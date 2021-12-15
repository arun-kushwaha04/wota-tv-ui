import io from "socket.io-client";

let socket = io("https://loom-server.herokuapp.com/");

console.log(socket);

export default socket;
