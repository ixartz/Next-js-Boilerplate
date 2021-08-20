const express = require('express');

function getDist() {
  return process.env.npm_config_dist || 'out';
}

function getPort() {
  return process.env.PORT || process.env.npm_config_port || 3000;
}

const app = express();
const dist = getDist();
const port = getPort();

app.use(express.static(dist));
app.disable('x-powered-by');

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${port}, dist: ${dist}`);
});
