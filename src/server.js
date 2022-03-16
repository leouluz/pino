const express = require("express");
const logger = require("./logger");
const pinohttp = require("pino-http")({logger});

const app = express();

app.use(pinohttp);

logger.info("oi eu sou o servidor")
// logger.debug("oi eu sou o debug")
// logger.debug({msg: "json", letras: { a: 'teste', b: "testando b"}})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3333)
