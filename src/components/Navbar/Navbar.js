import { HStack, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import QueriesDrawer from "../Queries/QueriesDrawer";
import { BsGithub } from "react-icons/bs";

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
        href="https://zgzf.online/about"
        target="_blank"
        aria-label="blog link"
      />
    </HStack>
  );
}

export default Navbar;
