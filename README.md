# vue-to-react

[![NPM version](https://badgen.net/npm/v/@egoist/vue-to-react)](https://npmjs.com/package/@egoist/vue-to-react) [![NPM downloads](https://badgen.net/npm/dm/@egoist/vue-to-react)](https://npmjs.com/package/@egoist/vue-to-react) [![CircleCI](https://badgen.net/circleci/github/egoist/vue-to-react/master)](https://circleci.com/gh/egoist/vue-to-react/tree/master) [![donate](https://badgen.net/badge/support%20me/donate/ff69b4)](https://patreon.com/egoist) [![chat](https://badgen.net/badge/chat%20on/discord/7289DA)](https://chat.egoist.moe)

## Install

```bash
yarn add @egoist/vue-to-react
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import toReact from '@egoist/vue-to-react'

const VueComponent = {
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
          click: () => this.count++
        }
      },
      [this.count]
    )
  }
}

const ReactComponent = toReact(VueComponent)

render(<ReactComponent />, document.getElementById('app'))
```

### Passing Props

By default we pass all props from React to Vue:

```js
const Counter = toReact({
  props: ['initialCount'],
  render(h) {
    return h('button', {}, [this.initialCount])
  }
})

const App = <Counter initialCount={0} />
```

However you can customize how the props are passed to Vue with the `passProps` option:

```js
toReact(VueComponent, {
  // Only pass `initialProps` prop
  passProps: props => ({ initialCount: props.initialProps }),
  // Or disable props
  passProps: false
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@egoist/vue-to-react** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/vue-to-react/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
