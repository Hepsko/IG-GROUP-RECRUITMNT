import apiClient from "../http-common";

export async function getAccountTypes() {
  const { data } = await apiClient.get("/accounttypes");
  return data;
}
