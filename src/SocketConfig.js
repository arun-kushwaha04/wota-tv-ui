import io from "socket.io-client";

// let socket = io("https://loom-server.herokuapp.com/");
let socket = io("http//localhost:5000");

console.log(socket);

export default socket;
