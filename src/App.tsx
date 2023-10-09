import {ChakraProvider, Flex, Portal, Spinner} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Suspense} from "react";

import theme from "./theme";
import ListZellerCustomersWrapper from "./ListZellerCustomersWrapper";

const client = new QueryClient({
  defaultOptions: {
    queries: { suspense: true },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <Suspense
          fallback={
            <Portal>
              <Flex sx={{ alignItems: "center", height: "100vh", justifyContent: "center", width: "100vw" }}>
                <Spinner sx={{ mt: 2 }} />
              </Flex>
            </Portal>
          }
        >
          <ListZellerCustomersWrapper />
        </Suspense>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App
