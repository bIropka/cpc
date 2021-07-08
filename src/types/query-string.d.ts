import qs from 'query-string';

declare module 'query-string' {
  export interface OutputParams {
    [key: string]: string | string[] | undefined;
  }

  export function parse<T = OutputParams>(
    str: string,
    options?: ParseOptions
  ): T;

  export function parseUrl<T = OutputParams>(
    str: string,
    options?: ParseOptions
  ): { url: string; query: T };
}
