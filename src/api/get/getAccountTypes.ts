import apiClient from "../http-common";

export type AccountTypesType = {
  _id: string;
  id: string;
  title: string;
};

type GetAccontsTypesType = () => Promise<AccountTypesType[]>;

export const getAccountTypes: GetAccontsTypesType = async () => {
  const { data } = await apiClient.get("/accounttypes");
  return data;
};
