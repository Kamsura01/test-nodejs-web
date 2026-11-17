import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug';
import morgan from 'morgan';

const debug = createDebug('app');

const app = express();
const port = 3000;

app.use(morgan('combined'));

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  debug('%s %s', req.method, req.url);
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(chalk.green(`Server is running on http://localhost:${port}`));
  debug('listening on port %d', port);
});