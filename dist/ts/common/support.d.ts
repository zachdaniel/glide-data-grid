export declare function proveType<T>(_val: T): void;
export declare function assert(fact: boolean, message?: string): asserts fact;
export declare function assertNever(_never: never): never;
export declare function dontAwait(p: Promise<unknown>): void;
export declare function removeArrayItem<T>(arr: ReadonlyArray<T>, index: number): T[];
export declare function maybe<T>(fn: () => T, defaultValue: T): T;
