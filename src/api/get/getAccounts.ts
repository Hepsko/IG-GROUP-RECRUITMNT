import apiClient from "../http-common";

export async function getAccounts() {
  const { data } = await apiClient.get("/accounts");
  return data;
}
