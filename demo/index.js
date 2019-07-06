import Vue from 'vue'
import React from 'react'
import toVue from '../src'

const App = toVue(() => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    return () => {
      console.log('Goodbye!')
    }
  })

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => app.$destroy()}>Destroy</button>
    </div>
  )
})

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
