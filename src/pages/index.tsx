import { MainLayout } from "@/src/layouts";
import { Container, Loader } from "@/src/components";
import { useQuery } from "react-query";
import {
  AccountType,
  AccountTypesType,
  getAccounts,
  getAccountTypes,
} from "@/src/api";
import { notification, Table, Typography } from "antd";
import React from "react";
const { Title } = Typography;

const ErrorMessage =
  "Make sure you have followed the instructions and you have created an  file containing the correct api key :)";

const handleError = () =>
  notification.error({
    message: "Problem with data fetching",
    description: ErrorMessage,
    placement: "bottomLeft",
    duration: 12,
  });

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
    onError: handleError,
  });
  const accountData = useQuery(["accounts"], getAccounts, {
    onError: handleError,
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
      <Loader isLoading={isFetching} />
      <Container>
        {!isFetching && (
          <>
            <Title type="secondary" level={3}>
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
