import React from 'react'
import Vue from 'vue'

export default Component => {
  return () => {
    const el = React.useRef(null)

    React.useEffect(() => {
      const app = new Vue({
        el: el.current,
        render: h => h(Component)
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
