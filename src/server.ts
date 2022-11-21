
import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3005;
app.use(express.json());

// app.use(router);


app.use((err: Error, request: Request, response: Response, nexT: NextFunction) => {
    if(err instanceof Error) {
        return response.status(404).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Erro interno no servidor"
    });
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})