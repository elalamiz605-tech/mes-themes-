import type { ThemeColors, ThemeSetArgs, ThemeStyle } from 'claude-code'

import { makeColors } from './make-colors.js'

type MessageColors = {
  light?: Record<string, `#${string}`>
  dark?: Record<string, `#${string}`>
}

export type Look = {
  id: string
  name: string
  description: string
  args: ThemeSetArgs
  problems: string[]
}

// Ajoute les couleurs des bulles (par mode) à la palette générée.
function withMessages(theme: ThemeColors, messages: MessageColors): ThemeColors {
  return {
    ...theme,
    inputs: {
      light: theme.inputs.light && { ...theme.inputs.light, ...messages.light },
      dark: theme.inputs.dark && { ...theme.inputs.dark, ...messages.dark },
    },
  }
}

// ---------- Océan ----------
const ocean = makeColors({
  label: 'Océan',
  roles: { accent: '#1f8fae', danger: '#c2453d', success: '#2e8a6a', warning: '#b7801c', pro: '#5b6fc9' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e4eff2',
        'surface-1': '#ecf5f7',
        'surface-2': '#f5fafb',
        'text-primary': '#0f2a35',
        'text-secondary': '#2f4d59',
        'text-muted': '#4a6672',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#07141f',
        'surface-1': '#0c1d2b',
        'surface-2': '#112636',
        'surface-3': '#162d3f',
        'text-primary': '#e3f3f7',
        'text-secondary': '#b5d2db',
        'text-muted': '#8fb2be',
      },
    },
  },
})

const oceanStyle: ThemeStyle = {
  Text: { fontFamily: ['sans'], lineHeight: 24 },
  Heading: { fontWeight: 'semibold', letterSpacing: 0.3 },
  UserMessage: {
    backgroundColor: 'bg-user-message',
    color: 'text-user-message',
    radius: [20, 20, 6, 20],
    paddingX: 16,
    paddingY: 10,
    shadow: { y: 2, blur: 10, color: '#06243a33' },
  },
  AssistantMessage: {
    backgroundColor: 'bg-assistant-message',
    color: 'text-assistant-message',
    radius: [20, 20, 20, 6],
    paddingX: 16,
    paddingY: 12,
  },
  ToolUse: { backgroundColor: 'surface-1', color: 'text-secondary', radius: 10, paddingX: 10, paddingY: 4 },
}

// ---------- Couchant ----------
const couchant = makeColors({
  label: 'Couchant',
  roles: { accent: '#d9603b', danger: '#c23b4a', success: '#5d8a3a', warning: '#c88a1a', pro: '#9b4f9e' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#f6e9de',
        'surface-1': '#f9efe6',
        'surface-2': '#fdf7f1',
        'text-primary': '#33201a',
        'text-secondary': '#5a3f34',
        'text-muted': '#73564a',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#1a1018',
        'surface-1': '#23161f',
        'surface-2': '#2c1c27',
        'surface-3': '#33212d',
        'text-primary': '#f7e6dc',
        'text-secondary': '#dcc2b6',
        'text-muted': '#b99c92',
      },
    },
  },
})

const couchantStyle: ThemeStyle = {
  Text: { fontFamily: ['serif'], fontSize: 16, lineHeight: 26 },
  Heading: { fontFamily: ['serif'], fontWeight: 'bold', italic: true },
  UserMessage: [
    {
      backgroundColor: 'bg-user-message',
      color: 'text-user-message',
      radius: 22,
      paddingX: 18,
      paddingY: 12,
      shadow: { y: 3, blur: 12, color: '#7a2e2433' },
      rotate: -0.6,
    },
    {
      backgroundColor: 'bg-user-message',
      color: 'text-user-message',
      radius: 22,
      paddingX: 18,
      paddingY: 12,
      shadow: { y: 3, blur: 12, color: '#7a2e2433' },
      rotate: 0.6,
    },
  ],
  AssistantMessage: {
    backgroundColor: 'bg-assistant-message',
    color: 'text-assistant-message',
    radius: 22,
    paddingX: 18,
    paddingY: 14,
  },
  ToolUse: { backgroundColor: 'surface-1', color: 'text-secondary', radius: 14, paddingX: 10, paddingY: 4 },
}

// ---------- Forêt ----------
const foret = makeColors({
  label: 'Forêt',
  roles: { accent: '#3f7a4f', danger: '#b4443a', success: '#4f8a3a', warning: '#a87a1c', pro: '#7a5a96' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e9ecdf',
        'surface-1': '#f0f2e7',
        'surface-2': '#f7f8f1',
        'text-primary': '#1d2a1f',
        'text-secondary': '#3d4c3f',
        'text-muted': '#56655a',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0e1612',
        'surface-1': '#141e18',
        'surface-2': '#1a261f',
        'surface-3': '#1f2d24',
        'text-primary': '#e5eee2',
        'text-secondary': '#bfcfbf',
        'text-muted': '#9bb09d',
      },
    },
  },
})

const foretStyle: ThemeStyle = {
  Text: { fontFamily: ['serif'], fontSize: 16, lineHeight: 25 },
  Heading: { fontFamily: ['serif'], fontWeight: 'semibold' },
  UserMessage: {
    backgroundColor: 'bg-user-message',
    color: 'text-user-message',
    radius: 8,
    paddingX: 14,
    paddingY: 10,
    borderColor: 'surface-3',
    borderWidth: 1,
  },
  AssistantMessage: {
    backgroundColor: 'bg-assistant-message',
    color: 'text-assistant-message',
    radius: 8,
    paddingX: 16,
    paddingY: 12,
    shadow: { y: 1, blur: 6, color: '#0b1a0f22' },
  },
  ToolUse: { backgroundColor: 'surface-1', color: 'text-secondary', radius: 6, paddingX: 8, paddingY: 3 },
}

// ---------- Néon (sombre uniquement) ----------
const neon = makeColors({
  label: 'Néon',
  only: 'dark',
  roles: { accent: '#ff3d9a', danger: '#ff4d5e', success: '#2ee6a6', warning: '#ffc23d', pro: '#00d5ff' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0b0614',
        'surface-1': '#120a1f',
        'surface-2': '#180e29',
        'surface-3': '#1d1131',
        'text-primary': '#f3e9ff',
        'text-secondary': '#cdbbe8',
        'text-muted': '#a895c4',
      },
    },
  },
})

const neonStyle: ThemeStyle = {
  Text: { fontFamily: ['mono'], fontSize: 14, lineHeight: 22 },
  Heading: { fontFamily: ['mono'], fontWeight: 'bold', letterSpacing: 1.5 },
  UserMessage: {
    backgroundColor: '#1a0b2e',
    color: '#f3e9ff',
    radius: 2,
    paddingX: 14,
    paddingY: 10,
    borderColor: '#ff3d9a',
    borderWidth: 1,
    shadow: { blur: 14, color: '#ff3d9a55' },
  },
  AssistantMessage: {
    backgroundColor: '#120a1f',
    color: '#f3e9ff',
    radius: 2,
    paddingX: 14,
    paddingY: 12,
    borderColor: '#00d5ff',
    borderWidth: 1,
    shadow: { blur: 14, color: '#00d5ff40' },
  },
  ToolUse: { backgroundColor: '#140b24', color: '#cdbbe8', radius: 2, paddingX: 8, paddingY: 3 },
}

export const LOOKS: Look[] = [
  {
    id: 'ocean',
    name: 'Océan',
    description: 'bleus profonds et turquoise, vagues lentes',
    problems: ocean.problems,
    args: {
      colors: withMessages(ocean.theme, {
        light: {
          'bg-user-message': '#cfe7ee',
          'text-user-message': '#0f2a35',
          'bg-assistant-message': '#f5fafb',
          'text-assistant-message': '#0f2a35',
        },
        dark: {
          'bg-user-message': '#123a52',
          'text-user-message': '#e3f3f7',
          'bg-assistant-message': '#0c1d2b',
          'text-assistant-message': '#e3f3f7',
        },
      }),
      backdrop: { scene: 'ocean', glass: { blur: 18, opacity: 0.55 } },
      style: oceanStyle,
    },
  },
  {
    id: 'couchant',
    name: 'Couchant',
    description: 'orange, corail et violet chaud, ciel du soir',
    problems: couchant.problems,
    args: {
      colors: withMessages(couchant.theme, {
        light: {
          'bg-user-message': '#f8d6c2',
          'text-user-message': '#33201a',
          'bg-assistant-message': '#fdf7f1',
          'text-assistant-message': '#33201a',
        },
        dark: {
          'bg-user-message': '#4a2233',
          'text-user-message': '#f7e6dc',
          'bg-assistant-message': '#23161f',
          'text-assistant-message': '#f7e6dc',
        },
      }),
      backdrop: { scene: 'couchant', glass: { blur: 18, opacity: 0.55 } },
      style: couchantStyle,
    },
  },
  {
    id: 'foret',
    name: 'Forêt',
    description: 'verts mousse et crème, lucioles le soir',
    problems: foret.problems,
    args: {
      colors: withMessages(foret.theme, {
        light: {
          'bg-user-message': '#dde6cf',
          'text-user-message': '#1d2a1f',
          'bg-assistant-message': '#f7f8f1',
          'text-assistant-message': '#1d2a1f',
        },
        dark: {
          'bg-user-message': '#21352a',
          'text-user-message': '#e5eee2',
          'bg-assistant-message': '#141e18',
          'text-assistant-message': '#e5eee2',
        },
      }),
      backdrop: { scene: 'foret', glass: { blur: 16, opacity: 0.6 } },
      style: foretStyle,
    },
  },
  {
    id: 'neon',
    name: 'Néon',
    description: 'nuit violette, rose et cyan électriques (sombre)',
    problems: neon.problems,
    args: {
      colors: neon.theme,
      overrideColorScheme: 'dark',
      backdrop: { scene: 'neon', glass: { blur: 12, tint: '#0b0614', opacity: 0.6 } },
      style: neonStyle,
    },
  },
]

export const DEFAULT_LOOK = 'neon'
