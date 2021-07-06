import React from 'react'
import { render } from 'react-dom'
import toReact from '../src'

const App = toReact({
  data() {
    return {
      count: 0
    }
  },

  render(h) {
    return h(
      'button',
      {
        on: {
          click: () => {
            this.count++
          }
        }
      },
      [this.count]
    )
  }
})
console.log(App)
render(<App />, document.getElementById('app'))
