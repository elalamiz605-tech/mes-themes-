import { expect, test } from 'claude-code/testing'

const RUN = {
  command: 'ambiance',
  origin: { kind: 'composer' },
  presentation: { isFullscreen: false, columns: 100 },
} as const

test('le thème enregistré est posé au démarrage, et /ambiance en change', async ($, on) => {
  const sets: unknown[] = []
  let stored: unknown = undefined
  on('command.register', () => ({ value: { command: 'ambiance' } }))
  on('store.get', () => ({ value: stored }))
  on('store.set', (_, e) => {
    stored = (e as { value: unknown }).value

    return { value: undefined }
  })
  on('theme.set', (_, e) => {
    sets.push(e)

    return { value: { isDrawn: true, requestId: 'r' } }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true })
  expect(sets.length).toBe(1)
  expect(JSON.stringify(sets[0])).toContain('"scene":"neon"')

  const listed = await $.command.run({ ...RUN, args: '' })
  expect(listed.text).toContain('foret')

  const changed = await $.command.run({ ...RUN, args: 'Forêt' })
  expect(changed.text).toContain('Forêt')
  expect(stored).toBe('foret')
  expect(JSON.stringify(sets[1])).toContain('"scene":"foret"')
})

test('le fond est dessiné sur desktop', async $ => {
  const ui = await $.ui.mount({
    plugin: 'mes-themes',
    surface: 'desktop',
    component: 'Backdrop',
    props: { scene: 'neon', plugin: 'mes-themes', glass: false },
  })
  expect(await ui.find({ type: 'Svg' })).toBeDefined()
  await ui.unmount()
})

test('les thèmes futuristes se choisissent et se dessinent', async ($, on) => {
  const sets: unknown[] = []
  on('command.register', () => ({ value: { command: 'ambiance' } }))
  on('store.get', () => ({ value: undefined }))
  on('store.set', () => ({ value: undefined }))
  on('theme.set', (_, e) => {
    sets.push(e)

    return { value: { isDrawn: true, requestId: 'r' } }
  })
  for (const id of ['hologramme', 'hyperespace', 'orbite', 'strates', 'soie', 'cristal', 'chrome']) {
    const done = await $.command.run({ ...RUN, args: id })
    expect(done.text).toContain('activée')
    expect(JSON.stringify(sets.at(-1))).toContain(`"scene":"${id}"`)
    const ui = await $.ui.mount({
      plugin: 'mes-themes',
      surface: 'mobile',
      component: 'Backdrop',
      props: { scene: id, plugin: 'mes-themes', glass: false },
    })
    expect(await ui.find({ type: 'Svg' })).toBeDefined()
    await ui.unmount()
  }
})
