import { describe, test, expect } from "@jest/globals";
import axios from "axios";
import { BASE_ROUTER } from "../../constants/service_settings/serviceRouters";
import { OK_REQUEST_CODE_NUMBER } from "../../../constants/httpRequestCodeNumberConstants";

describe("Test Integration Of Index Router Behavior", () => {
  test("Test If Index Router Call From Server Responds Correctly", async () => {
    const requestResult = await axios.get(BASE_ROUTER);
    expect(requestResult.data).toBeTruthy();
    expect(requestResult.status).toEqual(OK_REQUEST_CODE_NUMBER);
  });
});
