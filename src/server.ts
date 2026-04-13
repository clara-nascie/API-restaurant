import express from "express";
import { routes } from "./routes";  
import { errorHandling } from "./middlewares/errorHandling";

const PORT = 3333;
const app = express();

//conectando o express com as rotas
app.use(express.json());
app.use(routes);

//adicionando o tratamento de erros
app.use(errorHandling);

//iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


