import express from 'express';

import userRoutes from './routes/user.routes.js';
import photoRoutes from './routes/photos.routes.js';

const app = express();

app.use(express.json());
 
app.use(photoRoutes);
app.use(userRoutes);

app.listen(3000);
console.log('Servidor iniciado en http://localhost:3000');
