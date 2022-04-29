import express, { Application, Request, Response } from 'express'; // import express
import routes from './routes/app'; // import routes

const app: Application = express(); // create application object

const port: number = 3000;

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.get('/anything', (req: Request, res: Response) => {
    res.sendStatus(404);
});

const server = app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

export default server;
