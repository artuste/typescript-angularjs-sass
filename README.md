# TypeScript with AngularJS App
This is an example application based on AngularJS written in TypeScript.

# What is inside ?
## General
* AngularJS code written in TypeScript
* CSS styles compiled from SASS files `/src/public/branding/sass` 
* Customizable Bootstrap's variables
* Unit and E2E tests
* Growl messages (toastr)
* A lot of customizations based on JSON config files
* Http error handling mechanism (interceptor)
* Server Errors Mapper for the forms inputs

## Features
* TypeScript/AngularJS SPA
* Token authentication
* SASS version of Bootstrap
* Customizable general & custom Bootstra CSS styles
* Switching styles
* i18n with English, chinese and arabic translations
* RTL (right-to-left) layout

# Technology Stack

* AngularJS
* TypeScript
* SASS
* Twitter Bootstrap
* NPM
* Bower
* JSPM
* Gulp
* Karma
* Mocha
* Chaijs
* Sinonjs
* Protractor

# What do you need ?
* nodejs 0.12.+
* npm 2.13.+
* ruby ~2.0.0

# Installation
```
npm install gulp jspm typescript tsd -g
```
```
git clone https://github.com/artuste/typescript-angularjs-sass.git
```
```
npm install
```

# Gulp tasks

## Serve application or documentation to browser
```
gulp serve            # Serves application, watch *.ts, recompile, reload
gulp serve --watch-js # Serves application, watch *.js, recompile, reload (useful with TypeScript IDE compilation)
gulp serve:docs       # Generates and serves documentation
```
### Validate sources with specified rules defined in :
* `tslint.json` for TypeScript
* `.jshintrc` for JavaScript
```
gulp check              # check all
gulp check:jshint       # checks gulp tasks and gulpfile (only not generated js files in this repo)
gulp check:tslint       # checks TypeScript files from src/ and test/ directory
gulp check:tslint:src   # checks TypeScript files from src/ directory
gulp check:tslint:test  # checks TypeScript files from src/ directory
```

### Remove compiled files
```
gulp clean      # clean all
gulp clean:src  # removes *.map, *.js files from source directory 
gulp clean:test # removes *.map, *.js files from test directory
```

### Run TypeScript compiler
```
gulp compile      # compile all
gulp compile:src  # compile *.ts files from source directory
gulp compile:test # compile *.ts files from test directory
```

### Build sources and documentation
```
gulp build      # build all
gulp build:dist # creates self executable distribution file into dist directory
gulp build:docs # generates documentation into docs directory
```
Run tests
```
gulp test       # all tests
gulp test:unit  # run unit tests from test/unit directory
gulp test:e2e   # run e2e tests from test/e2e directory
```

# License
MIT

