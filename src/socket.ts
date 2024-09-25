import { Server, Socket } from "socket.io";

interface CustomSocket extends Socket {
  room?: string;
}
export function setupSocket(io: Server) {
  io.on("connection", (socket) => {
    console.log("The socket conencted", socket.id);

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });
}
