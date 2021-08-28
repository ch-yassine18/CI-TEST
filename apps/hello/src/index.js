const express = require('express');
const winston = require('winston');

// Env vars
const port = process.env.PORT || 3000;

// Logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    app: 'hello',
    version: '1.0.0'
  }
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Webserver
const app = express();
app.get('/', (req, res) => res.send('Hello'));
app.listen(port, () => logger.info(
  `Hello application started (http://localhost:${port}/)`,
  {port}
));
