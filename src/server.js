import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { OK_REQUEST_CODE_NUMBER } from "./constants/httpRequestCodeNumberConstants.js";
import { INDEX_ROUTER } from "./constants/routersPathConstants.js";

const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.use(express.static(path.join(__dirname, "..", "public")));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get(INDEX_ROUTER, (req, res) => {
  res
    .status(OK_REQUEST_CODE_NUMBER)
    .sendFile(path.join(__dirname, "..", "public", "htmls", "index.html"));
});

export default server;
