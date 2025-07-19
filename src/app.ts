import express from 'express';
import resourceRoutes from './routes/resource.routes';
import { setupSwagger } from './swagger';

const app = express();
app.use(express.json());
app.use('/api/resources', resourceRoutes);

setupSwagger(app)

export default app;
