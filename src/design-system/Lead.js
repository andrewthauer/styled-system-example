import system from 'system-components'

export const Lead = system(
  {
    is: 'p',
  },
  'color',
  'space',
  'lineHeight',
  'colorStyle',
  'textStyle',
)

Lead.displayName = 'Lead'

export default Lead
