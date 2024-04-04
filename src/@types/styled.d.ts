import { defaultTheme } from "../styles/default";

type ThemeType = typeof defaultTheme

declare module 'styled-compnents' {
    export interface DefaultTheme extends ThemeType {}
}