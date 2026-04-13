import express from "express";
import { routes } from "./routes";  

const PORT = 3333;
const app = express();

//conectando o express com as rotas
app.use(express.json());
app.use(routes);

//iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


