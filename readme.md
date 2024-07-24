 ## http headers reference link


```sh
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
``` 


## Express.js ->frameWork

  - handling the req and the types of files comes form the request

 => aternative for Express: 
         - vanila node.js
         - Adonis.js
         - Koa
         - Sail.js



## Install Express.js

```sh
npm install --save express
```

 -> read the documentation for "use" method from express documentation

 link -> https://expressjs.com/en/4x/api.html#app.use

## Body-parser  -> which is used to parse the body from req , before we do it manually thanks to express

```sh
npm install --save body-parse
```

## How to restrict to a particular method (GET , POST ,PUT , DELETE , PATCH)

 - generally app.use() -> for all method

 - app.get() -> only get method

