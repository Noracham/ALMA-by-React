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
          <CodeList title="🌟 jQuery CDN(ver-3.6.1)" />
        </Box>
      </PageLayout>
    </>
  );
};
export default code;
