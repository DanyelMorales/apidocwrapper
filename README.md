# typescriptscaffolding
- Just clone (or download as a zip)
- execute ``npm install``
- Start adding files to ./src
- execute ``grunt build`` (to compile typescript and run your project)

## Global dependencies
Some dependencies must be installed first (one by one, if you get an error try installation using sudo):
- npm install typescript -g 
- npm install mocha -g 
- npm install grunt-cli -g 
- npm install grunt -g

#### Optional global dependencies
- npm install nodemon -g
- npm install pm2 -g

## Features
- Typescript support
- Mocha tests
- Grunt tasks
- Grunt bumping (for fast semver taging and commit)

## Project commands 

- ``grunt build``: Compiles typescript project and execute dist/index.js
- ``grunt bump``: Executes grunt-bump command (see https://www.npmjs.com/package/grunt-bump) 
- ``grunt exec``: Executes dist/index.js
- ``test``: Executes mocha tests
