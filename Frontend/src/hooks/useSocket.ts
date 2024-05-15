import { useEffect, useState } from "react";

const WS_URL = "ws://localhost:3000";

const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log("WebSocket connection established.");
      setSocket(ws); // Update socket state when connection is open
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
      setSocket(null); // Reset socket state when connection is closed
    };

    ws.onerror = (error: Event) => {
      console.error("WebSocket error:", error);
      setSocket(null); // Reset socket state on error
    };

    // Clean up WebSocket on component unmount
    return () => {
      console.log("ws closed");
      ws.close();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return socket;
};

export default useSocket;
