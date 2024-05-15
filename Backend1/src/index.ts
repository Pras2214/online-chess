import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 3000 });

const gameManager = new GameManager();

wss.on("connection", (ws) => {
  console.log("Connection done");
  gameManager.addUser(ws);
  ws.on("close", () => {
    console.log("WebSocket connection closed");
    gameManager.removeUser(ws);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});
