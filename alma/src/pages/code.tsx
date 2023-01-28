import { CodeList } from "@/components/codeList";
import { Box } from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
const code = () => {
  return (
    <>
      <PageLayout>
        <Box
          m={"5% 10%"}
          w={"80%"}
          bg={"#fff"}
          fontFamily={"en-maru-gothic"}
          fontSize={"20px"}
          fontWeight={700}
          borderRadius={"20px"}
          p={"60px 40px"}
        >
          <CodeList
            title="🌟 jQuery CDN(ver-3.6.1)"
            content='
          <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>'
          />
          <CodeList
            title="🌟 HTML雛形"
            content={`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
</body>
</html>`}
          />
        </Box>
      </PageLayout>
    </>
  );
};
export default code;
