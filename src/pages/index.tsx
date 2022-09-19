import { MainLayout } from "@/src/layouts";
import { Container } from "@/src/components";
import { useQuery } from "react-query";
import {
  AccountType,
  AccountTypesType,
  getAccounts,
  getAccountTypes,
} from "@/src/api";
import { notification, Spin, Table, Typography } from "antd";
import React from "react";
const { Title } = Typography;

const ErrorMessage =
  "Make sure you have followed the instructions and you have created an .env file containing the correct api key :)";

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
  const accountTypesData = useQuery(["accountTypes"], getAccountTypes, {
    onError: () =>
      notification.error({
        message: "Problem with data fetching",
        description: ErrorMessage,
        placement: "bottomLeft",
        duration: 12,
      }),
  });
  const accountData = useQuery(["accounts"], getAccounts, {
    onError: () =>
      notification.error({
        message: "Problem with data fetching",
        description: ErrorMessage,
        placement: "bottomLeft",
        duration: 12,
      }),
  });

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
      <Container>
        {isFetching && <Spin size="large" />}
        {!isFetching && accounts && (
          <>
            <Title type="secondary" level={2}>
              Profit & Loss Table
            </Title>
            <Table
              style={{ width: "100%" }}
              columns={columns}
              dataSource={accounts}
              pagination={false}
              loading={isFetching}
            />
          </>
        )}
      </Container>
    </MainLayout>
  );
};

export default HomePage;
