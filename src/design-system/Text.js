import system from 'system-components'

export const Text = system(
  {
    is: 'p',
    px: 2,
    lineHeight: 'copy',
  },
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'space',
  'textAlign',
)

Text.displayName = 'Text'

export default Text
