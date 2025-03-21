// start.js setup from learnnode.com by Wes Bos
import Express, { Application, Request, Response, NextFunction } from 'express';
import * as Dotenv from 'dotenv';
import * as Path from 'path';
Dotenv.config({ path: '.env' });
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import IndexRouter from './routes/index.js';
import { errorHandler } from './middleware/errors/errorHandler.js';

const app: Application = Express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3010;

/**
 * Switch to ES6 modules
 * https://www.geeksforgeeks.org/how-to-fix-referenceerror-dirname-is-not-defined-in-es-module-scope-in-javascript/
 */
const fileName: string = fileURLToPath(import.meta.url);
const dirName: string = dirname(fileName);

// support json encoded and url-encoded bodies, mainly used for post and update
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', Path.join(dirName, 'views'));

// Serve static files from the 'assets' base directory
app.use(Express.static(Path.join(dirName, 'assets')));

app.use('/', IndexRouter);

// Error handling
app.use((req: Request, res: Response, next: NextFunction) => {
  try {
    //set header before response
    res.status(404).send('Sorry can\'t find that! Please explore more troubleshooting options.');
  } catch (err) {
    next(err);
  }
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`🍿 Express running → PORT ${port}`);
});
