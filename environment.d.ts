export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USERNAME: string;
      PASSWORD: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
