import React, { useEffect, useState } from "react";
import OutputTable from "./OutputTable";
import {
  Button,
  Heading,
  Image,
  Spacer,
  Spinner,
  Text,
  VStack,
  Stack,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { queryMap } from "../../assets/data/queries";
import CsvDownload from "react-json-to-csv";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import girlWithLaptopImage from "../../assets/screenshots/girlwithlaptop.png";

const OutputDisplay = ({ submittedQuery, loading, setLoading }) => {
  const [results, setResults] = useState([]);
  const [filename, setFilename] = useState("");
  const [queryTime, setQueryTime] = useState();
  const [rowsAffected, setRowsAffected] = useState(0);
  const toast = useToast();

  useEffect(() => {
    // loading result and fetching query time
    let startTime = performance.now();
    selectResults();
    setLoading(false);
    let endTime = performance.now();
    setQueryTime((endTime - startTime).toFixed(2) + " ms");

    // Show toast when query runs successfully
    if (submittedQuery !== "") {
      toast({
        title: "执行查询成功",
        description: "执行查询成功",
        status: "success",
        duration: 2000,
        isClosable: true,
        colorScheme: "blue",
      });
    }
    // eslint-disable-next-line
  }, [submittedQuery]);

  const selectResults = () => {
    console.log("submittedQuery:"+submittedQuery);
    if (submittedQuery === "") {
      setResults([]);
      setRowsAffected(0);
      return;
    }
    const queryIndex = queryMap.findIndex((o) => o.query === submittedQuery);
    if (queryIndex === -1) {
      setResults([]);
      setRowsAffected(0);
    } else {
        const queryData = queryMap[queryIndex].data;
        setResults(queryData);
        setFilename(queryMap[queryIndex].tableQuery);
        setRowsAffected(queryData.length);
    }
  };

  if (loading) {
    return <Spinner thickness="4px" size="xl" />;
  }

  function exportToJSON() {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(results, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.json`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <>
      {results.length > 0 ? (
        <>
          <Stack
            direction={["column", "column", "row"]}
            w={"100%"}
            px={4}
            justifyContent={"space-between"}
          >
            <Heading textAlign="center" fontSize={"3xl"}>
              输出
            </Heading>
            <Spacer />

            <Flex
              justify={"center"}
              align={"center"}
              direction={["column-reverse", "row"]}
            >
              <Button colorScheme="blue" mr={2} cursor={"initial"} size={"xs"}>
                总行数: {rowsAffected}
              </Button>
              <Button colorScheme="blue" mr={2} cursor={"initial"} size={"xs"}>
                耗时: {queryTime}
              </Button>
              <Flex justify={"space-between"} py={[2, 0]}>
                <CsvDownload data={results} filename={`${filename}.csv`}>
                  <Button
                    leftIcon={<BsFillFileEarmarkArrowDownFill />}
                    colorScheme="blue"
                    size={["sm", "md"]}
                  >
                    导出CSV
                  </Button>
                </CsvDownload>
                <Button
                  ml={2}
                  onClick={exportToJSON}
                  leftIcon={<BsFillFileEarmarkArrowDownFill />}
                  colorScheme="blue"
                  size={["sm", "md"]}
                >
                  导出JSON
                </Button>
              </Flex>
            </Flex>
          </Stack>
          <OutputTable data={results} />
        </>
      ) : (
        <VStack justifyContent="center" p={4}>
          <Image
            src={girlWithLaptopImage}
            alt="Girl With Laptop"
            maxH="300px"
          />
          <Heading as="h1" fontSize="xl" mt={4}>
            没有查询结果
          </Heading>
          <Text>执行查询SQL查看结果</Text>
        </VStack>
      )}
    </>
  );
};

export default OutputDisplay;
