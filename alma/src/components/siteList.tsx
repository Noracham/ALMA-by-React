import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Code,
  Box,
} from "@chakra-ui/react";

export const SiteList = (props: any) => {
  const { title, goLink, siteName } = props;
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                fontSize={"20px"}
                fontWeight={"bold"}
                as="span"
                flex="1"
                textAlign="left"
                p={"7px 0"}
              >
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <a href={goLink}>{siteName}</a>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
