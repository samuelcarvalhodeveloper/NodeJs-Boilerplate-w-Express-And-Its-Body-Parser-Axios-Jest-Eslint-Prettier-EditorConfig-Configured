import server from "./server.js";
import { PORT, SERVER_LISTENING_MESSAGE } from "./constants/serverSettingsConstants.js";

server.listen(PORT, () => {
  console.log(SERVER_LISTENING_MESSAGE(PORT));
});
