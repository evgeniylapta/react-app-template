import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    colors: {
      apricot: string;
      coral: string;
      easternBlue: string;
    };
  }
}
