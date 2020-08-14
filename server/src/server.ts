import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//GET POST PUT DELETE
//request body
//routes params (identifica qual recurso a ser alterado ou deletado)
//query params (filtros ordens e paginação) 

app.listen(3333);