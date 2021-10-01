import { Box, Center, Button } from "@chakra-ui/react";
import { memo, VFC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { TitleText } from "../atoms/title/TitleText";

export const Setting: VFC = memo(() => {
  const history = useHistory();

  const onClickLogOut = useCallback(() => {
    history.push("/");
  }, [history]);
  return (
    <>
      <TitleText>SETTINGS</TitleText>
      <Center p={{ base: 4, md: 10 }}>
        <Box
          w={{ base: "300px", md: "500px" }}
          h={{ base: "360px", md: "600px" }}
          bg="white"
          color="black"
          borderRadius="10px"
          shadow="md"
          p={10}
          m={30}
        >
          <Button
            size="md"
            height="48px"
            width="100%"
            border="2px"
            borderColor="teal.500"
            onClick={onClickLogOut}
          >
            ログアウト
          </Button>
        </Box>
      </Center>
    </>
  );
});
