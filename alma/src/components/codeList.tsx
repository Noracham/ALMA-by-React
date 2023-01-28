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
  const content = `const madeFromSoy = (product) => {
        return ["tofu", "soy sauce", "natto", "miso"].includes(product);
      };
      const products = ["tofu", "mochi", "natto", "pizza"];
      products.forEach((product) => {
        console.log(madeFromSoy(product));
      });`;
  const { title } = props;
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SyntaxHighlighter
              language="javascript" // 表示する言語
              style={okaidia}
              showLineNumbers // 行番号を表示
            >
              {content}
            </SyntaxHighlighter>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
