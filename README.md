# horace
Experiment in distributing webpack loaders with a library

This is the client half of an experiment in using Webpack to include and
automatically process files from a Webpack-built dependent library.

You can read more about the precise problem we're trying to solve at the sister
repository, [Borges](https://github.com/ronichoudhury-work/borges#readme).

## Build Instructions

To build this project, clone this repository:

    $ git clone https://github.com/ronichoudhury-work/horace
    $ cd horace

install the Node dependencies:

    $ npm install

build the project:

    $ npm run build

and run the resulting project script:

    $ node dist/horace.js

## How Does It Work?

The source code for Horace consists of a single file,
[index.js](https://github.com/ronichoudhury-work/horace/blob/master/index.js),
which simply imports a function and a Jade template from the dependent Borges
library. It does so by `require()`ing individual files from the Borges
distribution.

Horace itself is a very simple project, not requiring the use of any Webpack
loaders. However, loaders are needed both for
[`borges/index.js`](https://github.com/ronichoudhury-work/borges/blob/master/index.js)
(mentioned in the code as simply `borges`), which is written in ES6 and needs
`babel-loader` to process it, and for
[`borges/template.jade`](https://github.com/ronichoudhury-work/borges/blob/master/template.jade),
which needs `jade-loader` to compile it into a function.

The loaders are specified automatically in
[`webpack.config.js`](https://github.com/ronichoudhury-work/horace/blob/master/webpack.config.js)
by making use of the Webpack config transformer function found in
[`borges/webpack-module.js`](https://github.com/ronichoudhury-work/borges/blob/master/webpack-module.js).
The loaders in that file are specified carefully to apply *only* to Borges's
distribution files, which are found in the *node_modules* directory of the
project.

## Why "Horace"?

[Horace Worblehat](http://wiki.lspace.org/mediawiki/Librarian) is the librarian
at Unseen University, which is very similar to Jorge Luis Borges's [Library of
Babel](https://en.wikipedia.org/wiki/The_Library_of_Babel) in structure and
scope.
