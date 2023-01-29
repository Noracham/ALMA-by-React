import { LinkButton } from "@/components/linkButtom";
import { SiteList } from "@/components/siteList";
import { Box } from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
const site = () => {
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
          <SiteList
            title="ここに表示文字を設定"
            goLink="https://nsorym.site"
            siteName="portfolio site"
          />
        </Box>

        <Box
          display={"flex"}
          w={"60%"}
          m={"10% auto 0"}
          justifyContent={"space-around"}
        >
          <LinkButton link="main" />
          <LinkButton link="code" />
          <LinkButton link="tool" />
        </Box>
      </PageLayout>
    </>
  );
};
export default site;
