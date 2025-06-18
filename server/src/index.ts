import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import http from "http";
import { Server, Socket } from "socket.io"

const app = express();

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

const port = 3000;

app.get("/", (req:Request , res:Response) => {
    res.send("Server is working");
})

io.on("connection", (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);
    
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
