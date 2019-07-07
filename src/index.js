import React from 'react'
import Vue from 'vue'

const defaultPassProps = props => props

export default (Component, { passProps = defaultPassProps } = {}) => {
  return props => {
    const el = React.useRef(null)

    React.useEffect(() => {
      const app = new Vue({
        el: el.current,
        render: h => h(Component, { props: passProps ? passProps(props) : {} })
      })

      return () => app.$destroy()
    })

    return React.createElement(
      'div',
      null,
      React.createElement('div', { ref: el })
    )
  }
}
