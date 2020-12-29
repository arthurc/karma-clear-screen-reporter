# Karma Clear Screen

Reporter that clears the screen before each test run.

## Installation

The easiest way is to keep `karma-clear-screen` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-clear-screen": ">=1.0.1"
  }
}
```

You can simple do it by:

```bash
npm install karma-clear-screen --save-dev
```

## Configuration
Play it safe to load this plugin both in your reporters and plugins, if you are already having a plugins section. Karama loads automatically all available plugins from your node modules as long as you have not declared them explicitly. For more details please read the [Loading Plugins](http://karma-runner.github.io/0.13/config/plugins.html) by Karma.

karma.conf.js

```js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'clear-screen'],
    plugins: ['karma-clear-screen']
  });
};
```

You can pass list of reporters as a CLI argument too:

```bash
karma start --reporters clear-screen,dots
```

### **Flags:**

 - clear-screen: clears the screen.
 - dots: points separating each of the tests.
