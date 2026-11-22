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

// ---------- Hologramme (sombre) ----------
const hologramme = makeColors({
  label: 'Hologramme',
  only: 'dark',
  roles: { accent: '#2ee8ff', danger: '#ff5a6e', success: '#3dffb0', warning: '#ffd166', pro: '#ff6bdc' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#040a12',
        'surface-1': '#08131f',
        'surface-2': '#0c1a29',
        'surface-3': '#0f1f31',
        'text-primary': '#e4fbff',
        'text-secondary': '#b3dfe8',
        'text-muted': '#8bbcc8',
      },
    },
  },
})

const hologrammeStyle: ThemeStyle = {
  Text: { fontFamily: ['mono'], fontSize: 14, lineHeight: 22 },
  Heading: { fontFamily: ['mono'], fontWeight: 'bold', letterSpacing: 2, color: '#7ff9ff' },
  UserMessage: {
    backgroundColor: '#0a2030',
    color: '#e4fbff',
    radius: [4, 14, 4, 14],
    paddingX: 14,
    paddingY: 10,
    borderColor: '#2ee8ff',
    borderWidth: 1,
    shadow: { blur: 16, color: '#2ee8ff40' },
  },
  AssistantMessage: {
    backgroundColor: '#08131f',
    color: '#e4fbff',
    radius: [14, 4, 14, 4],
    paddingX: 16,
    paddingY: 12,
    borderColor: '#1a5b70',
    borderWidth: 1,
  },
  ToolUse: { backgroundColor: '#071521', color: '#8bbcc8', radius: 3, paddingX: 8, paddingY: 3 },
}

// ---------- Hyperespace (sombre) ----------
const hyperespace = makeColors({
  label: 'Hyperespace',
  only: 'dark',
  roles: { accent: '#8b7dff', danger: '#ff5c7a', success: '#4dffc3', warning: '#ffcf5c', pro: '#5ce1ff' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#03030b',
        'surface-1': '#090a18',
        'surface-2': '#0e1022',
        'surface-3': '#12142a',
        'text-primary': '#eeeeff',
        'text-secondary': '#c3c5ea',
        'text-muted': '#9b9dc8',
      },
    },
  },
})

const hyperespaceStyle: ThemeStyle = {
  Text: { fontFamily: ['sans'], fontSize: 15, lineHeight: 24, letterSpacing: 0.2 },
  Heading: { fontWeight: 'semibold', letterSpacing: 1.5, color: '#b9b3ff' },
  UserMessage: {
    backgroundColor: '#1a1840',
    color: '#eeeeff',
    radius: 16,
    paddingX: 16,
    paddingY: 10,
    borderColor: '#6a5cff',
    borderWidth: 1,
    shadow: { y: 4, blur: 20, color: '#6a5cff55' },
  },
  AssistantMessage: {
    backgroundColor: '#0b0c1c',
    color: '#eeeeff',
    radius: 16,
    paddingX: 16,
    paddingY: 12,
    borderColor: '#2a2d5c',
    borderWidth: 1,
  },
  ToolUse: { backgroundColor: '#0d0f22', color: '#9b9dc8', radius: 10, paddingX: 10, paddingY: 3 },
}

// ---------- Orbite (sombre) ----------
const orbite = makeColors({
  label: 'Orbite',
  only: 'dark',
  roles: { accent: '#ffa94d', danger: '#ff5f57', success: '#5fe39a', warning: '#ffd45c', pro: '#b79bff' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#07050f',
        'surface-1': '#0e0b19',
        'surface-2': '#141022',
        'surface-3': '#181329',
        'text-primary': '#f6efff',
        'text-secondary': '#d3c8e6',
        'text-muted': '#aa9fc0',
      },
    },
  },
})

const orbiteStyle: ThemeStyle = {
  Text: { fontFamily: ['sans'], fontSize: 15, lineHeight: 24 },
  Heading: { fontWeight: 'bold', color: '#ffc37a' },
  UserMessage: {
    backgroundColor: '#2a1a12',
    color: '#fff3e6',
    radius: 24,
    paddingX: 18,
    paddingY: 11,
    borderColor: '#ff9a3c',
    borderWidth: 1,
    shadow: { y: 3, blur: 18, color: '#ff9a3c44' },
  },
  AssistantMessage: {
    backgroundColor: '#100c1c',
    color: '#f6efff',
    radius: 24,
    paddingX: 18,
    paddingY: 13,
    borderColor: '#3a2d55',
    borderWidth: 1,
  },
  ToolUse: { backgroundColor: '#120e20', color: '#aa9fc0', radius: 12, paddingX: 10, paddingY: 3 },
}

// ---------- Strates (sombre) ----------
const strates = makeColors({
  label: 'Strates',
  only: 'dark',
  roles: { accent: '#3fa9ff', danger: '#ff4d6d', success: '#39e6a5', warning: '#ffc94d', pro: '#ff3fb4' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#060a1e',
        'surface-1': '#0b1230',
        'surface-2': '#0f173b',
        'surface-3': '#131c44',
        'text-primary': '#eaf0ff',
        'text-secondary': '#bcc8ec',
        'text-muted': '#93a2cf',
      },
    },
  },
})

const stratesStyle: ThemeStyle = {
  Text: { fontFamily: ['sans'], fontSize: 15, lineHeight: 24 },
  Heading: { fontWeight: 'bold', letterSpacing: 0.5, color: '#7fd8ff' },
  UserMessage: {
    backgroundColor: '#14216b',
    color: '#eaf0ff',
    radius: 4,
    paddingX: 16,
    paddingY: 11,
    borderColor: '#ff3fb4',
    borderWidth: 1,
    shadow: { x: 6, y: 8, blur: 0, color: '#04061a' },
  },
  AssistantMessage: {
    backgroundColor: '#0b1236',
    color: '#eaf0ff',
    radius: 4,
    paddingX: 16,
    paddingY: 12,
    borderColor: '#2ee8ff',
    borderWidth: 1,
    shadow: { x: 6, y: 8, blur: 0, color: '#04061a' },
  },
  ToolUse: { backgroundColor: '#0c1438', color: '#93a2cf', radius: 3, paddingX: 8, paddingY: 3 },
}

// ---------- Soie (sombre) ----------
const soie = makeColors({
  label: 'Soie',
  only: 'dark',
  roles: { accent: '#c86bff', danger: '#ff5c86', success: '#4fe0b0', warning: '#ffcc66', pro: '#7a8bff' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0c0420',
        'surface-1': '#140a2c',
        'surface-2': '#1a0f35',
        'surface-3': '#1e123c',
        'text-primary': '#f6eeff',
        'text-secondary': '#d6c6ee',
        'text-muted': '#ad9bcb',
      },
    },
  },
})

const soieStyle: ThemeStyle = {
  Text: { fontFamily: ['sans'], fontSize: 15, lineHeight: 25 },
  Heading: { fontFamily: ['serif'], fontWeight: 'semibold', italic: true, color: '#e3b8ff' },
  UserMessage: {
    backgroundColor: '#3a1670',
    color: '#f6eeff',
    radius: [28, 28, 8, 28],
    paddingX: 18,
    paddingY: 11,
    shadow: { y: 6, blur: 22, color: '#9b3dff55' },
  },
  AssistantMessage: {
    backgroundColor: '#160b2e',
    color: '#f6eeff',
    radius: [28, 28, 28, 8],
    paddingX: 18,
    paddingY: 13,
    borderColor: '#3b2266',
    borderWidth: 1,
  },
  ToolUse: { backgroundColor: '#170c30', color: '#ad9bcb', radius: 14, paddingX: 10, paddingY: 3 },
}

// ---------- Cristal (clair) ----------
const cristal = makeColors({
  label: 'Cristal',
  only: 'light',
  roles: { accent: '#c2366e', danger: '#c4302b', success: '#2f8a5c', warning: '#b07a12', pro: '#5a6cc4' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#ecdde4',
        'surface-1': '#f3e8ed',
        'surface-2': '#faf4f7',
        'text-primary': '#2a1620',
        'text-secondary': '#4f3442',
        'text-muted': '#6b5060',
      },
    },
  },
})

const cristalStyle: ThemeStyle = {
  Text: { fontFamily: ['sans'], fontSize: 15, lineHeight: 24 },
  Heading: { fontWeight: 'bold', color: '#9c2a58' },
  UserMessage: {
    backgroundColor: '#f7d4e1',
    color: '#2a1620',
    radius: 6,
    paddingX: 16,
    paddingY: 11,
    shadow: { x: 5, y: 6, blur: 0, color: '#b9c9ec' },
  },
  AssistantMessage: {
    backgroundColor: '#fdf8fa',
    color: '#2a1620',
    radius: 6,
    paddingX: 16,
    paddingY: 12,
    shadow: { x: 5, y: 6, blur: 0, color: '#e6b3c6' },
  },
  ToolUse: { backgroundColor: '#f6edf1', color: '#4f3442', radius: 4, paddingX: 8, paddingY: 3 },
}

// ---------- Chrome (sombre) ----------
const chrome = makeColors({
  label: 'Chrome',
  only: 'dark',
  roles: { accent: '#8fb3d9', danger: '#ff6a5c', success: '#5fd49a', warning: '#e8c15a', pro: '#b49cf0' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#08090b',
        'surface-1': '#0f1114',
        'surface-2': '#14171b',
        'surface-3': '#181b20',
        'text-primary': '#f2f4f7',
        'text-secondary': '#c6ccd4',
        'text-muted': '#9aa2ad',
      },
    },
  },
})

const chromeStyle: ThemeStyle = {
  Text: { fontFamily: ['sans'], fontSize: 15, lineHeight: 24, letterSpacing: 0.2 },
  Heading: { fontWeight: 'semibold', letterSpacing: 2, color: '#dfe5ee' },
  UserMessage: {
    backgroundColor: '#1c2026',
    color: '#f2f4f7',
    radius: 12,
    paddingX: 16,
    paddingY: 10,
    borderColor: '#9aa6b5',
    borderWidth: 1,
    shadow: { y: 4, blur: 14, color: '#00000088' },
  },
  AssistantMessage: {
    backgroundColor: '#111317',
    color: '#f2f4f7',
    radius: 12,
    paddingX: 16,
    paddingY: 12,
    borderColor: '#2c3138',
    borderWidth: 1,
  },
  ToolUse: { backgroundColor: '#121418', color: '#9aa2ad', radius: 8, paddingX: 10, paddingY: 3 },
}

export const LOOKS: Look[] = [
  {
    id: 'strates',
    name: 'Strates',
    description: 'panneaux bleus en relief, bords néon cyan et magenta (sombre)',
    problems: strates.problems,
    args: {
      colors: strates.theme,
      overrideColorScheme: 'dark',
      backdrop: { scene: 'strates', glass: { blur: 16, tint: '#060a1e', opacity: 0.55 } },
      style: stratesStyle,
    },
  },
  {
    id: 'soie',
    name: 'Soie',
    description: 'rubans violets et magenta qui ondulent (sombre)',
    problems: soie.problems,
    args: {
      colors: soie.theme,
      overrideColorScheme: 'dark',
      backdrop: { scene: 'soie', glass: { blur: 18, tint: '#0c0420', opacity: 0.55 } },
      style: soieStyle,
    },
  },
  {
    id: 'cristal',
    name: 'Cristal',
    description: 'facettes et cubes pastel en relief (clair)',
    problems: cristal.problems,
    args: {
      colors: cristal.theme,
      overrideColorScheme: 'light',
      backdrop: { scene: 'cristal', glass: { blur: 16, tint: '#faf4f7', opacity: 0.6 } },
      style: cristalStyle,
    },
  },
  {
    id: 'chrome',
    name: 'Chrome',
    description: 'ondulations de métal chromé (sombre)',
    problems: chrome.problems,
    args: {
      colors: chrome.theme,
      overrideColorScheme: 'dark',
      backdrop: { scene: 'chrome', glass: { blur: 14, tint: '#08090b', opacity: 0.55 } },
      style: chromeStyle,
    },
  },
  {
    id: 'hologramme',
    name: 'Hologramme',
    description: 'globe 3D en fil de fer qui tourne, cyan et magenta (sombre)',
    problems: hologramme.problems,
    args: {
      colors: hologramme.theme,
      overrideColorScheme: 'dark',
      backdrop: { scene: 'hologramme', glass: { blur: 14, tint: '#040a12', opacity: 0.55 } },
      style: hologrammeStyle,
    },
  },
  {
    id: 'hyperespace',
    name: 'Hyperespace',
    description: 'tunnel d’anneaux et étoiles qui filent vers toi (sombre)',
    problems: hyperespace.problems,
    args: {
      colors: hyperespace.theme,
      overrideColorScheme: 'dark',
      backdrop: { scene: 'hyperespace', glass: { blur: 12, tint: '#03030b', opacity: 0.55 } },
      style: hyperespaceStyle,
    },
  },
  {
    id: 'orbite',
    name: 'Orbite',
    description: 'planètes en relief sur des orbites inclinées (sombre)',
    problems: orbite.problems,
    args: {
      colors: orbite.theme,
      overrideColorScheme: 'dark',
      backdrop: { scene: 'orbite', glass: { blur: 14, tint: '#07050f', opacity: 0.55 } },
      style: orbiteStyle,
    },
  },
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
