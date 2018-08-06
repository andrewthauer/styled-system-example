import system from 'system-components'

export const Text = system(
  {
    is: 'p',
    fontSize: 2,
    lineHeight: 'copy',
  },
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'space',
  'textAlign',
  'colorStyle',
)

Text.displayName = 'Text'

export default Text
