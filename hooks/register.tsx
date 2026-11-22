import type { EngineInterface, Register, ThemeSetArgs } from 'claude-code'

import { SCENES } from './scenes'
import { DEFAULT_LOOK, LOOKS } from './themes'

const STORE_KEY = 'look'

function find(id: string) {
  const wanted = id
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

  return LOOKS.find(look => look.id === wanted)
}

function list(current: string | undefined): string {
  const lines = LOOKS.map(
    look => `${look.id === current ? '●' : '○'} ${look.id.padEnd(12)} ${look.name}: ${look.description}`,
  )

  return [
    'Ambiances disponibles :',
    ...lines,
    '',
    'Usage : /ambiance <nom>   (ex. /ambiance foret)   ·   /ambiance off pour revenir au look de base',
  ].join('\n')
}

// Pose le thème ; si la version de l'app refuse le style, on réessaie sans.
async function apply($: EngineInterface, args: ThemeSetArgs) {
  try {
    return await $.theme.set(args)
  } catch (error) {
    $.ui.log(`mes-themes: ${String(error)}`)
    const { style: _style, ...rest } = args

    return await $.theme.set(rest)
  }
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'ambiance',
      description: 'Changer d’ambiance (sans argument : la liste)',
      argumentHint: `[${LOOKS.map(look => look.id).join('|')}|off]`,
      immediate: true,
    })

    const saved = await $.store.get(STORE_KEY)
    if (saved !== 'off') {
      const look = find(typeof saved === 'string' ? saved : DEFAULT_LOOK) ?? find(DEFAULT_LOOK)
      if (look !== undefined) {
        const unpainted = look.problems.find(line => line.startsWith("Desktop won't paint"))
        if (unpainted !== undefined) {
          $.ui.log(`mes-themes (${look.id}): ${unpainted}`)
        }
        const set = await apply($, look.args)
        if (!set.isDrawn) {
          $.ui.log(`mes-themes: ${set.reason}`)
        }
      }
    }

    return next(e)
  })

  on('command.run', { command: 'ambiance' }, async ($, e) => {
    const arg = e.args.trim()
    const saved = await $.store.get(STORE_KEY)
    const current = typeof saved === 'string' ? saved : DEFAULT_LOOK

    if (arg === '') {
      return { text: list(current), isTextDisplayOnly: true }
    }

    if (['off', 'aucun', 'base', 'defaut', 'défaut'].includes(arg.toLowerCase())) {
      await $.store.set(STORE_KEY, 'off')
      await $.theme.clear()

      return { text: 'Thème retiré : retour au look de base de Claude.', isTextDisplayOnly: true }
    }

    const look = find(arg)
    if (look === undefined) {
      return { text: `Je ne connais pas « ${arg} ».\n\n${list(current)}`, isTextDisplayOnly: true }
    }

    await $.store.set(STORE_KEY, look.id)
    const set = await apply($, look.args)
    const note = set.isDrawn ? '' : `\n(Cette fenêtre n’affiche pas les thèmes : ${set.reason})`

    return { text: `Ambiance « ${look.name} » activée.${note}`, isTextDisplayOnly: true }
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    const scene = SCENES[e.props.scene]
    if (scene === undefined) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={scene.svg} alt={scene.alt} isInteractive />
  })
}
