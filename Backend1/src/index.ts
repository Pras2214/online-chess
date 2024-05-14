import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

let count = 0;

wss.on("connection", (ws) => {
  gameManager.addUser(ws);
  ws.send(`hello ${count++}`);
  ws.on("close", () => {
    console.log("WebSocket connection closed");
    gameManager.removeUser(ws);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});
