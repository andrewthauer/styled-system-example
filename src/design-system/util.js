/**
 * Combines multiple styles into a single prop in which
 *
 * @param {string} prop The composite prop name.
 * @param {Object} styles An object of style functions.
 *
 * The keys styles object are used as the child prop names
 */
export const compositeStyle = ({ prop, styles }) => {
  const fn = (props) => {
    if (!props.hasOwnProperty(prop)) {
      return {}
    }

    const value = props[prop]

    return Object.keys(styles).reduce((accum, childProp) => {
      const childStyle = styles[childProp]
      const newProps = { [childProp]: value, ...props }
      const newStyle = childStyle(newProps)
      return { ...accum, ...newStyle }
    }, {})
  }

  return fn
}

// export const compositeStyle2 = ({ prop, cssProperties, key }) => {
//   const fn = (props) => {
//     return cssProperties.reduce((styles, cssProperty) => {
//       if (props.hasOwnProperty(prop)) {
//         const value = props[prop]
//         const themeValue = props.theme[key][value]
//         styles[cssProperty] = themeValue
//       }
//       return styles
//     }, {})
//   }
//   return fn
// }
