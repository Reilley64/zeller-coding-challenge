import {useQuery} from "@tanstack/react-query";
import {Amplify, API, graphqlOperation} from "aws-amplify";
import {ListZellerCustomers} from "./graphql/queries.ts";
import {GraphQLResult} from "@aws-amplify/api-graphql";

import UserList from "./UserList.tsx";
import awsExports from "./aws-exports.ts";

Amplify.configure(awsExports);

function ListZellerCustomersWrapper() {
  const listZellerCustomersQuery = useQuery<Customer[]>({
    queryKey: ["listZellerCustomersQuery"],
    queryFn: async () => {
      const response = await API.graphql(graphqlOperation(ListZellerCustomers)) as GraphQLResult<{ listZellerCustomers: { items: Customer[] } }>;
      return response.data?.listZellerCustomers.items!;
    },
  });

  const customers = listZellerCustomersQuery.data!;

  return (
    <UserList customers={customers} />
  );
}

export default ListZellerCustomersWrapper;
