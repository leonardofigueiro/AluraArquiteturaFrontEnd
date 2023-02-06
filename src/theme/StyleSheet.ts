import { Breakpoints } from "@skynexui/responsive_stylesheet";

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>

interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  [key: string]: any
}
export default StyleSheet;
