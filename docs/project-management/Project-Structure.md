# Project-Structure

[Table of Contents](../README.md)

The project structure viewed in tree...

```
.
├── .github
│   ├── ISSUE_TEMPLATE
│   ├── CODEOWNERS
│   ├── ISSUE_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
├── docs
├── functions
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── src
│   ├── assets
├── typings-project
│   └── global.d.ts
├── storage.rules
├── superstatic.json
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── compiler.js
├── database.rules.json
├── delete.sh
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── frontend.config.js
├── jsconfig.json
├── log.txt
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── renovate.json
├── server.js
├── webpack-module.config.js
├── webpack-nomodule.config.js
├── webpack.config.js
└── workbox.config.js
```

## Project Structure

### .github/
This directory contains files in association of github documentation

#### ISSUE_TEMPLATE
This directory contains template files in creating issues in github

#### CODEOWNER
This file contains the list of usernames that owns the code (they are automatically tagged in pull requests for code review)

#### ISSUE_TEMPLATE.md
This file is the issue template when creating a `new` issue in the repository

#### PULL_REQUEST_TEMPLATE.md
This file is the pull request description template when creating a `new` pull request in the repository

### docs/
This directory contains the full documentation for the senti-full-dashboard

#### back-end/
This directory contains further documentations on the backend of the repository

#### front-end/
This directory contains further documentations on the frontend of the repository

#### project-management/
This directory contains further documenatations on project management

#### README.md
This file contains the overview of the docs directory

### functions/
This directory contains packages and configurations for firebase functions (backend)

#### https/
This directory contains firebase function configurations in https

##### actions/
This directory contains files used for general use of firebase function https api calls

##### models/
This directory contains files used for CRUD (Create - POST, Retrieve - GET, Update - PUT, Delete - DEL) firebase function https api calls

#### .eslintrc.json
This file contains eslint configurations for the firebase function(s)

#### index.js
This file contains the firebase function(s)

#### package.json
This file contains node package configurations for the firebase function(s)

#### package-lock.json
This file contains node package configurations for the firebase function(s)

### node_modules/
This directory contains packages installed from [package.json](../../package.json)

### public/
This directory contains bundled files to be served statically by the web server

### src/
This directory contains the source code for the repository (frontend)

### .eslintignore
This file contains directory(ies) or file(s) ignored by the linter

### .eslintrc.js
This file contains the runtime configurations used by the linter

### .firebaserc
This file contains the runtime configurations used by firebase

### .gitignore
This file contains directory(ies) or file(s) ignored by git

### compiler.js
This file contains the compiler for the pages and components built when run with the start script

### CONTRIBUTING.md
This file contains instructions for contributors in senti-full-dashboard

### database.rules.json
This file contains the database rules for the repository in its firebase instance

### delete.sh
This file contains the script for deleting babelrc for localforage package

### firebase.json
This file contains configurations for firebase

### firestore.indexes.json
This file contains the configurations for cloud firestore

### firestore.rules
This file contains the cloud firestore rules

### frontend.config.js
This file contains the routes and application configurations

### jscocnfig.json
This file contains configurations for the compiler

### LICENSE
This file contains the license of the repository

### package-lock.json
This file contains npm (node package manager) configurations on the repository's node modules as well as their respective dependencies

### package.json
This file contains the site's configurations on the repository's installed node modules

### postcss.config.js
This file calls for autoprefixer for styling files

### README.md
This file contains the general instructions for users

### renovate.json
This file contains configurations for the [renovate](https://github.com/renovatebot/renovate)

### server.js
This file runs the server for the front-end

### storage.rules
This file contains rules for cloud storage for firebase

### superstatic.json
This file contains configurations for superstatic

### webpack-module.config.js
This file contains configurations for webpack when the browser does support modules

### webpack-nomodule.config.js
This file contains configurations for webpack when the browser does not support modules

### webpack.config.js
This file contains configurations for webpack

### workbox.config.js
This file contains configurations for workbox

## What's next?

We can now [install its dependencies](Installation.md) and [running](Running.md) them or you can now go and edit and [do commits](Commit.md).