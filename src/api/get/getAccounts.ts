import apiClient from "../http-common";

export type AccountType = {
  _id: string;
  name: string;
  profitLoss: string;
  accountType: string;
  currency: string;
};

type GetAccontsType = () => Promise<AccountType[]>;

export const getAccounts: GetAccontsType = async () => {
  const { data } = await apiClient.get("/accounts");
  return data;
};
