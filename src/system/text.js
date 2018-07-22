import system from 'system-components'

export const Text = system(
  {
    is: 'p',
    px: 2,
    lineHeight: 'copy',
  },
  'space',
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
)

Text.displayName = 'Text'

export default Text
