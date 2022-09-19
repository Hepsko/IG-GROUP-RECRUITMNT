import "antd/dist/antd.css";
import { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { AccountTypesDataProvider } from "../containers/accountTypes";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AccountTypesDataProvider>
        <Component {...pageProps} />
      </AccountTypesDataProvider>
    </QueryClientProvider>
  );
};

export default App;
