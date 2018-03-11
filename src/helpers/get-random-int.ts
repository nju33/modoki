export interface GetRandomIntOptions {
  length: number;
  offset: number;
  skip: number;
}

const defaultOpts = {
  length: 10,
  offset: 0,
  step: 1
};

export type GetRandomInt = (
  options: Partial<GetRandomIntOptions>
) => () => number;
export const getRandomInt: GetRandomInt = _opts => {
  return () => {
    const opts = {...defaultOpts, ..._opts};

    let value = Math.floor(Math.random() * opts.length);

    value += opts.offset;
    value *= opts.step;

    return value;
  };
};
