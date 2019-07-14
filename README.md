# Bookmarklet starter

Build bookmarklets with ease and modern JavaScript.

### Installation

```
nvm use
npm i
```

### Getting started

* Write your bookmarklet in `src/bookmarklet.js`.
* Run `npm run build` to run Webpack, Babel and prepare the code to be bookmarklet-ready.
* The output will be in `./build/bookmarklet.build.js` as well as in your console.
* Copy and paste the code into a new bookmark in your browser!

**Running without Webpack**

If you prefer to not run Babel and simply remove whitespace in the code and one-line it, run: `npm run build-simple`

### Building bookmarklets

You can find some tips about how to build a bookmarklet using [this article](https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154).