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

/**
 * Simple CSS-like syntax to map props to styles with styled-components.
 *
 * @param {string} prop The composite prop name.
 * @param {Object} styles An object of style functions.
 *
 * @example
 *   const buttonColor = styledMap({
 *     primary: orange;
 *     warning: red;
 *     info: blue;
 *     default: white;
 *   });
 *
 *   const Button = styled.button`
 *     color: ${buttonColor};
 *     border: 2px solid ${buttonColor};
 *     font-size: ${styledMap({
 *       large: 2.5rem;
 *       small: 1rem;
 *     })};
 *   `;
 *
 *   const ButtonWithType = styled.button`
 *     color: ${buttonColor};
 *     border: 2px solid ${buttonColor};
 *     font-size: ${styledMap('buttonType', {
 *       large: 2.5rem;
 *       small: 1rem;
 *     })};
 *   `;
 *
 * @see
 * https://github.com/scf4/styled-map
 */
export const styledMap = (...args) => (props) => {
  const mapOfStyles = args[args.length - 1]
  const styleKeys = Object.keys(mapOfStyles)

  // If the first argument is a string, styled-map works differently:
  if (typeof args[0] === 'string') {
    // We use the value of a prop, rather than the key
    const val = props[args[0]]
    if (mapOfStyles[val]) return mapOfStyles[val]
  } else {
    // Otherwise we do things the normal way:
    const matchingKeys = styleKeys.filter((key) => props[key])
    // If we have a matching key, return it (or the last if we have multiple):
    if (matchingKeys.length) return mapOfStyles[matchingKeys.pop()]
  }

  // If nothing has matched so far, look for a "default" item in our map:
  if (Object.prototype.hasOwnProperty.call(mapOfStyles, 'default')) {
    return mapOfStyles.default
  }

  // Else just return the last item, whatever it is:
  return mapOfStyles[styleKeys.pop()]
}
