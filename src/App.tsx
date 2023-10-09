import {ChakraProvider, Flex, Portal, Spinner} from "@chakra-ui/react";
import UserList from "./UserList.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Suspense} from "react";
import theme from "./theme.ts";

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
          <UserList />
        </Suspense>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App
