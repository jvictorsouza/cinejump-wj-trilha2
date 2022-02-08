import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      zero: string;
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
      six: string;
      seven: string;
      eigth: string;
    };
  }
}
