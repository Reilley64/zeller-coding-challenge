import {Avatar, Flex, Heading, Text, useRadioGroup, VStack} from "@chakra-ui/react";

import {useState} from "react";
import RadioOption from "./RadioOption.tsx";


function UserList(props: { customers: Customer[] }) {
  const radioOptions = ["ADMIN", "MANAGER"];

  const [role, setRole] = useState<Role>(radioOptions[0] as Role);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: radioOptions[0],
    onChange: (e: Role) => setRole(e),
  });

  const radioGroupProps = getRootProps();

  function cleanRole(role: Role) {
    const firstChar = role.charAt(0);
    const restOfString = role.slice(1).toLowerCase();

    return firstChar + restOfString;
  }

  return (
    <Flex sx={{ flexDir: "column", maxW: "608px", px: 10 }}>
      <Flex sx={{ flexDir: "column", py: 10, borderBottomColor: "gray.200s", borderBottomWidth: 1 }}>
        <Heading size="md" sx={{ mb: 10 }}>User Types</Heading>

        <VStack {...radioGroupProps} sx={{ alignItems: "revert" }}>
          {radioOptions.map((value) => {
            const radio = getRadioProps({ value });

            return (
              <RadioOption key={value} {...radio}>
                {cleanRole(value as Role)}
              </RadioOption>
            );
          })}
        </VStack>
      </Flex>

      <Flex sx={{ flexDir: "column", py: 10, borderBottomColor: "gray.200s", borderBottomWidth: 1 }}>
        <Heading size="md" sx={{ mb: 10 }}>{cleanRole(role)} Users</Heading>

        <VStack spacing={7} sx={{ alignItems: "revert" }}>
          {props.customers.filter((customer) => customer.role === role).map((customer) => (
            <Flex key={customer.id} sx={{ alignItems: "center" }}>
              <Avatar name={customer.name.split(" ")[0]} size="zeller" />

              <Flex sx={{ flexDir: "column", ml: 3 }}>
                <Text>{customer.name}</Text>
                <Text sx={{ color: "blackAlpha.700", fontSize: "sm" }}>
                  {cleanRole(customer.role)}
                </Text>
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
}

export default UserList;
