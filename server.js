const express = require('express');
const path = require('path');
const helmet = require('helmet');
const history = require('connect-history-api-fallback')
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

app.use(helmet);

app.use((req, res, next) => {
  return history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    index: 'index.html'
  })(req, res, next);
});

app.use(
  express.static(path.join(__dirname, '/build'), {
    maxAge: 31536000,
    index: 'index.html',
    setHeaders: (res, filePath) => {
      const isIndexFile = filePath === path.join(__dirname, '/build/index.html');

      if (isIndexFile) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    }
  })
)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
