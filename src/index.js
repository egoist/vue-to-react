import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

export default Component => {
  return {
    mounted() {
      render(React.createElement(Component, null), this.$el)
    },

    beforeDestroy() {
      unmountComponentAtNode(this.$el)
    },

    render(h) {
      return h('div')
    }
  }
}
