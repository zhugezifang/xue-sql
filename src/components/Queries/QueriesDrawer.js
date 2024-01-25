import React from "react";
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  Text,
  AccordionPanel,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { queryMap } from "../../assets/data/queries";

const QueriesDrawer = ({ usePredefinedQuery, displayText, setValue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const Queryonclick = (value) => {
    usePredefinedQuery(value);
  };

  return (
    <>
      <Button
        aria-label="所有表"
        leftIcon={<AiOutlineBars />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        {displayText ? "所有表" : ""}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="teal">
          <DrawerCloseButton />
          <DrawerHeader color="white">所有表</DrawerHeader>

          <DrawerBody>
            <Stack direction="column" spacing={4}>
              <Accordion allowToggle>
                {queryMap.map((items, key) => (
                  <AccordionItem py={2} border="none" key={key}>
                    <h2>
                      <AccordionButton
                        onClick={() => {
                          Queryonclick(items.query);
                        }}
                        bgColor={"blackAlpha.300"}
                      >
                        <HStack justifyContent={"space-between"} w={"100%"}>
                          <Icon as={BsFillArrowRightCircleFill} />
                          <Text fontWeight="bold">{items.tableQuery}</Text>
                          <AccordionIcon />
                        </HStack>
                      </AccordionButton>
                    </h2>
                    {items.tableFields.map((tablefieldData, key) => (
                      <AccordionPanel
                        key={key}
                        bgColor={"blackAlpha.300"}
                        fontWeight="bold"
                        color="white"
                        pb={2}
                        cursor={"pointer"}
                        _hover={{ bg: "blackAlpha.100" }}
                        onClick={() => {
                          setValue(
                            "select " +
                              tablefieldData +
                              " from " +
                              items.tableQuery
                          );
                          onClose();
                        }}
                      >
                        {tablefieldData}
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default QueriesDrawer;
