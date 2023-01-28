import { useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Code,
  Box,
} from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// 任意のテーマをimport
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeList = (props: any) => {
  //   const content = `const madeFromSoy = (product) => {
  //         return ["tofu", "soy sauce", "natto", "miso"].includes(product);
  //       };
  //       const products = ["tofu", "mochi", "natto", "pizza"];
  //       products.forEach((product) => {
  //         console.log(madeFromSoy(product));
  //       });`;
  const { title, content, lang } = props;
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
            <SyntaxHighlighter
              language={lang} // 表示する言語
              style={okaidia}
              showLineNumbers // 行番号を表示
              customStyle={{ fontSize: "16px" }}
            >
              {content}
            </SyntaxHighlighter>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
