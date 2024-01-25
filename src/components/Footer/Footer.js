import { Link, Text, Button, Stack } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Stack
      direction={["column", "row"]}
      bgColor={"teal"}
      textAlign="center"
      py={2}
      color="#E7E6DA"
      justify={"center"}
    >
      <Text fontSize="16">
        SQL自学网 - Copyright © {currentYear} | Created by{" "}
        <Button
          as={"a"}
          href="https://zgzf.online/about"
          target="_blank"
          colorScheme="blackAlpha"
          fontWeight={"bold"}
          variant="link"
        >
          诸葛子房
        </Button>
      </Text>
    </Stack>
  );
}

export default Footer;
