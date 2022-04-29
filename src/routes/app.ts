import express from 'express';
import resizeRoute from './api/resize';
const routes = express.Router();

routes.use('/images/resize', resizeRoute);

export default routes;
