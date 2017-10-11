Hello there!

This project exists to help debug a Modal issue in `react-bootstrap'.

### How this project was created

- create a new react project at the command line
```
$ create-react-app test-react-bootstrap-modal
```

- add react bootstrap
```
$ yarn add react-bootstrap bootstrap@3
```

- import items from 'react-bootstrap' into `App.js`
```
import {
  PageHeader,
  Modal
} from 'react-bootstrap';
```

- Use those items in `App.js`
```` html
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<PageHeader>
  <span>React Bootstrap is wired up correctly</span>
</PageHeader>
<Modal show={true}>
  <p>This is a paragraph in the modal</p>
</Modal>
````

You can find a [build of this project here](https://consultant-capabilities-77488.netlify.com/).


### To Debug Locally
- clone the repo
```
$ git clone git@github.com:aljachimiak/test-react-bootstrap-modal.git
```

- enter the folder
```
$ cd test-react-bootstrap-modal
```

- fetch the dependancies
```
$ yarn install
```

- start the project locally
```
$ yarn start
```

### Shim insterted as fix
In App.js, adding a shim to the Modal will fix the issue:
```
import {
  PageHeader
  // , Modal
} from 'react-bootstrap';

import Modal from './modal-shim';
```

You can easily swap back to the broken state by commenting and uncommenting the appropriate lines:
```
import {
  PageHeader
  , Modal
} from 'react-bootstrap';

// import Modal from './modal-shim';
```
