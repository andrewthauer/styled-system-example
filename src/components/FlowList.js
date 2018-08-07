import system from 'system-components'
import { themeGet } from 'styled-system'
import { Box } from '../design-system'

export const itemMarginStyle = (props) => {
  const margin = props.itemMargin | null
  const value = themeGet(`space.${margin}`, '1')(props)
  return {
    '> *': {
      margin: `${value}px`,
    },
  }
}

export const FlowList = system({ is: Box }, itemMarginStyle)

FlowList.displayName = 'FlowLista'

export default FlowList
