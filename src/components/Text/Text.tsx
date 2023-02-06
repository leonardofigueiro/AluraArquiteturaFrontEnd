import theme, { ThemeTypographyVariants } from "@/theme/theme";
import StyleSheet from "@/theme/StyleSheet";
import { BaseComponent } from "@/theme/BaseComponent";
import { useTheme } from "@/theme/ThemeProvider";


interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Text({
  tag,
  styleSheet, 
  variant,
  ...props}: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];
  const Tag = tag || 'p'
  return (
    <BaseComponent 
      as={Tag}
      styleSheet={{fontFamily: theme.typography.fontFamily,
      ...textVariant,
      ...styleSheet,      
      }} 
      {...props}/>
  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
}
