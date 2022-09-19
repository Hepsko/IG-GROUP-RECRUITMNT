import { Layout } from "@/src/layouts";
import { useQuery } from "react-query";
import { getAccounts } from "@/src/api";

const HomePage = () => {
  const { isLoading, data } = useQuery("get", getAccounts);
  return (
    <Layout pageTitle="HomePage">
      <div>{JSON.stringify(data)}</div>
    </Layout>
  );
};

export default HomePage;
