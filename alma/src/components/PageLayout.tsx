import { Box } from "@chakra-ui/react";
import { Header } from "./header";

interface PageLayoutProps {
  children: any;
  hasHeader?: boolean;
}

export const PageLayout = (props: PageLayoutProps) => {
  const { children, hasHeader = true } = props;

  return (
    <Box bg={"#e3e3e3"} minHeight={"100vh"} height="auto" width={"100vw"}>
      {hasHeader && <Header />}
      {children}
    </Box>
  );
};
