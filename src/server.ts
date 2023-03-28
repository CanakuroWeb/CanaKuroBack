import express from "express";

const server = express();
const PORT = 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.send("Hello, Responsed");
});

server.listen(PORT, () => {
    console.log(`Listening...: ${PORT}`);
});
