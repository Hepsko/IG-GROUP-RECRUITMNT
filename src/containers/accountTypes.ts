import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { AccountTypesType, getAccountTypes } from "@/src/api";
import { useQuery } from "react-query";

const accountTypes = createContainer(() => {
  const [accountTypes, setAccountTypes] = useState<AccountTypesType[] | null>(
    null
  );
  const [isAccTypesLoading, setIsAccTypesLoading] = useState(true);

  const { isError, data, isLoading } = useQuery(
    ["accountsType"],
    getAccountTypes
  );

  useEffect(() => {
    if (!isError && !isLoading && data) {
      setAccountTypes(data);
      setIsAccTypesLoading(false);
    }
  }, [data, isError, isLoading]);
  return { accountTypes, isAccTypesLoading };
});

export const AccountTypesDataProvider = accountTypes.Provider;
export const useAccountTypesDataState = accountTypes.useContainer;
