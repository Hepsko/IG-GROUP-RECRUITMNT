import { MainLayout } from "@/src/layouts";
import { useQuery } from "react-query";
import {
  AccountType,
  AccountTypesType,
  getAccounts,
  getAccountTypes,
} from "@/src/api";
import { Spin, Table } from "antd";
import React from "react";

type AccountRowType = {
  key: string;
  name: string;
  profitLoss: string;
  accountType?: string;
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Profit & Loss",
    dataIndex: "profitLoss",
    key: "ProfitLoss",
  },
  {
    title: "Account Type",
    dataIndex: "accountType",
    key: "accountType",
  },
];

const convertAccountsToRow = (
  account: AccountType[],
  accountTypes: AccountTypesType[]
): AccountRowType[] => {
  const accounts = account.map((acc) => {
    return {
      key: acc._id,
      name: acc.name,
      profitLoss: acc.currency + " " + acc.profitLoss,
      accountType: accountTypes.find((e) => e.id === acc.accountType)?.title,
    };
  });

  return accounts;
};

const HomePage = () => {
  const accountTypesData = useQuery(["accountTypes"], getAccountTypes);
  const accountData = useQuery(["accounts"], getAccounts);

  const isFetching = accountData.isLoading || accountTypesData.isLoading;

  const accounts = React.useMemo(
    () =>
      accountData.data &&
      accountTypesData.data &&
      convertAccountsToRow(accountData.data, accountTypesData.data),
    [accountData.data, accountTypesData.data]
  );

  return (
    <MainLayout>
      {isFetching && <Spin size="large" />}
      {!isFetching && accounts && (
        <Table
          columns={columns}
          dataSource={accounts}
          pagination={false}
          loading={isFetching}
        />
      )}
    </MainLayout>
  );
};

export default HomePage;
