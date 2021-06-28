import { io } from "socket.io-client";

const URL = "http://localhost:3030";
const socket = io(URL);

export default (({ app }) => {

  console.log("socket io load")

  socket.on("connect", () => {
    console.log('connection = '+socket.connected); // true

  });
  
  app.config.globalProperties.$socket = socket;
  
})

export { socket } 
