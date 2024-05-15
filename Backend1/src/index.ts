import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 3000 });

const gameManager = new GameManager();

let count = 0;

wss.on("connection", (ws) => {
  // console.log("server side",ws.remoteAddress);
  console.log("Connection done");
  console.log(gameManager);

  gameManager.addUser(ws);
  ws.send(`hello ${count++}`);
  ws.on("close", () => {
    console.log("WebSocket connection closed");
    console.log(gameManager);
    gameManager.removeUser(ws);
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

// const PORT = 3000;
// httpsServer.listen(PORT, () => {
//   console.log(`Secure WebSocket server running on https://localhost:${PORT}`);
// });
