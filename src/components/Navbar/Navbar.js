import { HStack, Heading, Link, Text, Button } from "@chakra-ui/react";
import React from "react";
import QueriesDrawer from "../Queries/QueriesDrawer";
import { VscAccount } from "react-icons/vsc";

 

function Navbar({ usePredefinedQuery, setValue }) {
  return (
    <HStack
      bgColor={"teal"}
      width={"100%"}
      p={4}
      justifyContent={"space-between"}
    >
      <QueriesDrawer
        usePredefinedQuery={usePredefinedQuery}
        displayText={false}
        setValue={setValue}
      />
      <Heading>SQL自学网</Heading>

      <Text fontSize="16">
        <Button
          as={"a"}
          href="https://zgzf.online/about"
          target="_blank"
          color="white"
          colorScheme="blackAlpha"
          fontWeight={"bold"}
          variant="link"
        >
          关于我
        </Button>
      </Text>
    </HStack>
  );
}

export default Navbar;
