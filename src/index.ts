import React from 'react'
import * as Vue from 'vue'

const defaultPassProps = <T = any>(props: T): T => props

export default <TProps = any>(
  Component: any,
  { passProps = defaultPassProps } = {}
) => {
  return (props: TProps) => {
    const el = React.useRef(null)

    React.useEffect(() => {
      // @ts-expect-error
      if (Vue.createApp) {
        // @ts-expect-error
        const app = Vue.createApp({
          // @ts-expect-error
          render: () => Vue.h(Component, (passProps && passProps(props)) || {})
        })
        app.mount(el.current)

        return () => app.unmount()
      } else if (Vue.default) {
        const app = new Vue.default({
          // @ts-expect-error
          el: el.current,
          render: h =>
            h(Component, { props: passProps ? passProps(props) : {} })
        })

        return () => app.$destroy()
      }
    })

    return React.createElement(
      'div',
      null,
      React.createElement('div', { ref: el })
    )
  }
}
