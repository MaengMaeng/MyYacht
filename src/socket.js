import { io } from "socket.io-client";
import * as config from "../config";

export let socket = null;

export const connectSocket = () => {
  socket = io(config.SERVER_URL);
};
