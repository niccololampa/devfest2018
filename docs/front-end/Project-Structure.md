# Project-Structure

[Table of Contents](../README.md)

The Frontend structure can be viewed at the `/src` of the project and is structured this way

```
src
├── assets
│   ├── fonts
│   ├── images
│   └── manifest
├── components
│   └── sample-component
│       ├── index.js
│       ├── style.styl
│       └── template.js
├── index.ejs
├── index.js
├── index.styl
├── index.worker.js
├── mixins
│   └── sample-mixin
│       └── index.js
├── pages
│   └── page-sample
│       ├── index.js
│       ├── style.styl
│       └── template.js
├── service-worker.js
├── smart-components
│   └── sample-smart-component
│       └── index.js
├── styles
│   ├── components
│   └── general
│   └── utils
├── firebase.js
├── fragments.js
├── html-webpack
├── local-forage.js
├── state.js
└── worker-connector.js
```

## Project Structure

### assets/

This directory contains images, fonts, configurations used in the front-end

#### fonts/
This directory contains fonts used in the front-end

#### images/
This directory contains images used in the front-end

#### manifest/
This directory contains the manifest.json configurations. See more [here](https://developers.google.com/web/fundamentals/web-app-manifest/)

### components
This directory contains the `dumb components` used in the front-end. See more at [Front-end documentation](../../README.md)

#### sample-component
This directory contains the `dumb component`

##### index.js
This file contains the properties and logic of the `dumb component`

##### style.styl
This file contains the CSS styling of the `dumb component` from the template.js file

##### template.js
This file contains the html structure of the `dumb component`

### mixins/
This directory contains the mixins used in the front-end

#### sample-mixin/
This directory contains the mixin

##### index.js
This file contains the logic done by the mixin

### pages/
This directory contains the pages of the front-end

#### page-sample/
This directory contains the page files

##### index.js
This file contains the properties and logic of the page

##### style.styl
This file contains the CSS styling of the page from the template.js file

##### template.js
This file contains the html structure of the page

### smart-components
This directory contains the `smart components` used in the front-end. See more at [Front-end documentation](../../README.md)

#### sample-smart-component
This directory contains the `smart component`

##### index.js
This file contains the properties and logic of the `smart component`

##### style.styl
This file contains the CSS styling of the `smart component` from the template.js file

##### template.js
This file contains the html structure of the `smart component`

### styles
This directory contains .styl file(s) selectively imported in styling the front-end component(s), smart-component(s), or page(s)

#### components
This directory contains .styl file(s) for styling native HTML elements in the front-end

#### general
This directory contains .styl file(s) for typography, colors, etc.

### utils
This directory contains utility javascript files

#### html-webpack
This directory contains html webpack plugin configuration files

### firebase.js
This file contains the firebase configurations of the repository

### fragments.js
This file contains the routes of the repository (built automatically by the compiler)

### local-forage.js
This file contains the functions used by the front-end from the localforage node package

### state.js
This file contains the functions used by the state-manager

### worker-connector.js
This file instantiates the web worker

### index.ejs
This file contains the html template of the site

### index.js
This file contains the functions, fragments and routing

### index.styl
This file contains styling for the index.ejs file

### service-worker.js
This file contains service worker functions
