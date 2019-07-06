# react-to-vue

[![NPM version](https://badgen.net/npm/v/@egoist/react-to-vue)](https://npmjs.com/package/@egoist/react-to-vue) [![NPM downloads](https://badgen.net/npm/dm/@egoist/react-to-vue)](https://npmjs.com/package/@egoist/react-to-vue) [![CircleCI](https://badgen.net/circleci/github/egoist/react-to-vue/master)](https://circleci.com/gh/egoist/react-to-vue/tree/master) [![donate](https://badgen.net/badge/support%20me/donate/ff69b4)](https://patreon.com/egoist) [![chat](https://badgen.net/badge/chat%20on/discord/7289DA)](https://chat.egoist.moe)

## Install

```bash
yarn add react-to-vue
```

## Usage

```js
import Vue from 'vue'
import React from 'react'
import toVue from '@egoist/react-to-vue'

const ReactComponent = () => {
  const [count, setCount] = React.useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

const VueComponent = toVue(ReactComponent)

new Vue({
  el: '#app',
  render: h => h(VueComponent)
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@egoist/react-to-vue** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/react-to-vue/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
