import { CodeList } from "@/components/codeList";
import { LinkButton } from "@/components/linkButtom";
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
            lang="html"
            title="🌟 jQuery CDN(ver-3.6.1)"
            content='
          <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>'
          />
          <CodeList
            lang="html"
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
          <CodeList
            lang="html"
            title="🌟 HTML雛形(CSS,JavaScript（jQuery）読み込み有)"
            content={`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title></title>
</head>
<body>
    <script src="js/index.js"></script>
</body>
</html>`}
          />
          <CodeList
            lang="scss"
            title="🌟 SCSS(Sass)レスポンシブ対応用ファイル[ _mixin.scss ]"
            content={`$breakpoint: (
  tab: 'screen and (max-width: 1024px)',
  sp: 'screen and (max-width: 768px)'
);
              
@mixin mq($bp) {
  @media #{map-get($breakpoint, $bp)} {
    @content;
  }
}`}
          />
          <CodeList
            lang="scss"
            title="🌟 SCSS(Sass)mixinレスポンシブ書き方"
            content={`//タブレット ※_mixin.scss必須
@include m.mq(tab){
}
//スマホ　※_mixin.scss必須
@include m.mq(sp){
}`}
          />
        </Box>
        <Box
          display={"flex"}
          w={"60%"}
          m={"10% auto 0"}
          justifyContent={"space-around"}
        >
          <LinkButton link="main" />
          <LinkButton link="site" />
          <LinkButton link="tool" />
        </Box>
      </PageLayout>
    </>
  );
};
export default code;
