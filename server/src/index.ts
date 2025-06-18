import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (req:Request , res:Response) => {
    res.send("Server is working");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
