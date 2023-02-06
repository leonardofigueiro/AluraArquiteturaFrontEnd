import React from "react";
import * as NextLink from "next/link";
import Text from "../Text/Text";
import StyleSheet from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

interface LinkProps {
    href: string;
    children: React.ReactNode;
    styleSheet?: StyleSheet;
    variant?: ThemeTypographyVariants;
    colorVariant: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';

}

export default function Link ({ href, children, colorVariant, styleSheet, variant, ...props }: LinkProps) {

  const theme = useTheme();

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600
    }
  }

  const linkProps = {
    href,
    children,
    styleSheet: {
      textDecoration: 'none',
      color: currentColorSet.color,
      ...styleSheet,
    },
    ...props
  }
  console.log(linkProps)
    return (
      <NextLink.default href={href} style={{textDecoration: 'none'}} {...props}>
        <Text {...linkProps}>{children}</Text>
      </NextLink.default>
    )
}

Link.defaultProps = {
  colorVariant: 'primary'
}
