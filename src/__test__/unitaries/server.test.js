import { describe, test, expect } from "@jest/globals";
import axios from "axios";
import { BASE_ROUTER } from "../constants/service_settings/serviceRouters";
import { OK_REQUEST_CODE_NUMBER } from "../../constants/httpRequestCodeNumberConstants";

describe("Test Server Behavior", () => {
  test("Test If Index Router Responds To Request Correctly", async () => {
    const requestResult = await axios.get(BASE_ROUTER);
    expect(requestResult.data).toBeTruthy();
    expect(requestResult.status).toEqual(OK_REQUEST_CODE_NUMBER);
  });
});
