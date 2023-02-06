import Box from "@/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@/theme/ThemeProvider";
import Link from '@/components/Link/Link';


export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        flex: '1'
      }}
    >
      <Link href="/sobre">Vá para Sobre</Link>
      <Link href="http://google.com">Vá para o Google</Link>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header/>
        <Text variant="heading1"  tag="h1">
          Últimas Atualizações
        </Text>
        <Feed.Posts/>
      </Feed>
      <Footer/>
    </Box>
  );
}
