import express from 'express';

import { storeUser } from './routes';

const app = express();

app.post('/users', storeUser);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))