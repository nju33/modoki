export type GetArrayBy = <T>(fn: () => T, length: number) => T[];
export const getArrayBy: GetArrayBy = (fn, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(fn());
  }

  return result;
}
