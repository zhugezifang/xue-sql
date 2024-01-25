import {
  ListItem,
  ListIcon,
  List,
  Box,
  Heading,
  HStack,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { BsCodeSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function QueryHistory({ history, setQuery, setValue, setHistory }) {
  const onClickHistory = (value) => {
    if (value.includes("*")) setQuery(value);
    setValue(value);
  };
  const handleRemoveHistory = (e, historyItem) => {
    e.stopPropagation();
    setHistory((prevHistory) =>
      prevHistory.filter((history) => history !== historyItem)
    );
  };
  return (
    <Box
      w={["100%", "20%"]}
      bgColor={"whiteAlpha.500"}
      p={2}
      borderRadius={"5px"}
      minH={"20vh"}
      maxH={"40vh"}
      overflowY="auto"
      textAlign={"center"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    >
      <HStack justifyContent={"space-between"}>
        <Heading fontSize={"2xl"} m={2}>
          查询历史
        </Heading>
        <IconButton
          icon={<MdDelete />}
          aria-label="Delete"
          visibility={history.length === 0 ? "hidden" : "visible"}
          onClick={() => setHistory([])}
        ></IconButton>
      </HStack>
      {history.length > 0 ? (
        <List spacing={3} p={2}>
          {history.map((item, id) => (
            <ListItem
              bgColor={"teal.200"}
              p={3}
              borderRadius={"5px"}
              onClick={() => onClickHistory(item)}
              key={`${item}---${id}`}
              cursor={"pointer"}
              _hover={{ bg: "teal.500" }}
            >
              <Flex align="center" justify="space-between">
                <ListIcon as={BsCodeSquare} />
                {item}
                <IconButton
                  icon={<MdDelete />}
                  aria-label="Delete"
                  onClick={(e) => handleRemoveHistory(e, item)}
                ></IconButton>
              </Flex>
            </ListItem>
          ))}
        </List>
      ) : (
        "Execute a query first"
      )}
    </Box>
  );
}

export default QueryHistory;
