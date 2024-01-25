import { HStack, Heading, IconButton } from "@chakra-ui/react";
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
      <Heading> SQL自学网</Heading>
      <IconButton
        as={"a"}
        href="https://www.zgzf.online"
        target="_blank"
        aria-label="about"
        icon={<VscAccount />}
      />
    </HStack>
  );
}

export default Navbar;
