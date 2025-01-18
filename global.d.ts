declare global {
  namespace NodeJS {
    interface ProcessEnv {
      baseFolder: string;
    }
  }
}
