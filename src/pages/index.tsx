import { Layout } from "@/src/layouts";
import { useQuery } from "react-query";
import { AccountType, getAccounts } from "@/src/api";
import { Spin, Table } from "antd";
import React from "react";
import { useAccountTypesDataState } from "../containers/accountTypes";

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

const HomePage = () => {
  const { accountTypes, isAccTypesLoading } = useAccountTypesDataState();
  const { isLoading, data } = useQuery(["accounts"], getAccounts);

  const isFetching = isLoading || isAccTypesLoading;

  const convertAccountsToRow = (data: AccountType[]): AccountRowType[] => {
    const accounts = data.map((acc) => {
      return {
        key: acc._id,
        name: acc.name,
        profitLoss: acc.currency + " " + acc.profitLoss,
        accountType: accountTypes
          ? accountTypes.find((e) => e.id === acc.accountType)?.title
          : "",
      };
    });

    return accounts;
  };

  const accounts = React.useMemo(
    () => data && convertAccountsToRow(data),
    [data, isAccTypesLoading]
  );

  return (
    <Layout pageTitle="HomePage">
      {isFetching && <Spin size="large" />}
      {!isFetching && (
        <Table
          columns={columns}
          dataSource={accounts}
          pagination={false}
          loading={isFetching}
        />
      )}
    </Layout>
  );
};

export default HomePage;
