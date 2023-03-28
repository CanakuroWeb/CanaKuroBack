import express from "express";
import { createServer } from "http";
import { WebSocket } from "ws";

const app = express();
const server = createServer(app);
const wsServer = new WebSocket.Server({ server, path: "/daechung-router-irum" });
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello, Responsed");
});
wsServer.on("connection", (ws: WebSocket) => {
    console.log("ws connected!");
    ws.send("welcome to ws!");

    ws.on("message", msg => {
        console.log(`Received: ${msg}`);
        ws.send("help");
    });

    ws.on("close", () => {
        console.log("client disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Listening...: ${PORT}`);
});
