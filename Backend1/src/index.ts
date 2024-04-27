import { WebSocket } from "ws";
const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({ port: 8080 });

// wss.on('headers', (headers, req) => {
//     headers.push('Access-Control-Allow-Origin: http://localhost:8080');
//     // Add other CORS headers as needed
//   });

wss.on("connection", (ws) => {
  console.log("WebSocket client connected");

  ws.on("message", (message) => {
    console.log("Received message:", message);
  });

  ws.on("close", () => {
    console.log("WebSocket client disconnected");
  });
});

wss.on("listening", () => {
  console.log("WebSocket server listening on port 8080");
});

wss.on("error", (error)=>console.log(error));
