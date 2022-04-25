import express, { json, urlencoded } from 'express';
import UserRouter from './src/routers/users.route';


const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/users', new UserRouter());



app.get('/test/:q', (req, res) => {


});










const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
    });

server.on('error', (err) => {
    console.error(err);
});