export interface Generator {
  generate(): string | {[k: string]: string};
}
