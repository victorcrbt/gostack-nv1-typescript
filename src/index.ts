import express from 'express';

import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))