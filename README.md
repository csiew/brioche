# Brioche

Brioche is a barebones UI component library for React. It is intended for use with web apps or sites which use routing (think: `react-router` and `react-router-dom`).

It is currently under heavy development and is *strictly not* recommended for use in production apps/sites. Use it at your own peril.

An example of a site which uses an early version of Brioche is [my personal website](https://clarencesiew.com) (before it was transformed into a library).

You can view the [project roadmap here](https://github.com/csiew/brioche/wiki/Roadmap).

See the latest [changelog](https://github.com/csiew/brioche/wiki/Version-0.1.7) for version 0.1.7 on the wiki.


## Dependencies

You need to install the following packages in order to use Brioche:

* `react`
* `react-dom`
* `react-icons`
* `react-router`
* `react-router-dom`


## Getting started

### Installation

1. Setup a project using `create-react-app`.
2. Navigate into the project directory and run `npm install brioche`.


### Setting up your project

1. Remove files like `index.css` and `App.css` in the `src/` directory. Remove imports for these files in `index.js` and `App.css` as well.
2. Replace the contents of `index.js` with the contents of the code block below. This will convert your project into a routed project and import the root Brioche stylesheet.

```js
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "brioche/dist/App.css";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

3. Import `AppContainer` into `App.js`. Replace the root element with it. It is recommended to encapsulate all page content within `main` tags, and place the `Switch` and `Route` components (from `react-router-dom`) within it. For example:

```js
import { AppContainer } from 'brioche';

function App() {
  return (
    <AppContainer>
      <h1>Hello World</h1>
      <main className="overflow-auto">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </AppContainer>
  );
}
```

And that's it. You've just setup Brioche (as well as routing) in your project. Have fun!


## Disclaimer

Remember that Brioche is still in the very early stages of development. Documentation that describes the components and expected properties as well as of the classes in the stylesheets is in progress.
