export interface GetRandomIntOptions {
    length: number;
    offset: number;
    skip: number;
}
export declare type GetRandomInt = (options: Partial<GetRandomIntOptions>) => () => number;
export declare const getRandomInt: GetRandomInt;
