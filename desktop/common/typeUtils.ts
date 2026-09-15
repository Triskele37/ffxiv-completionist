export type AnyFunction = (...args: any[]) => any;

// Partial of T where T[K] extends V
export type PartialWhere<T, V> = {
    [K in keyof T]-?: T[K] extends V ? T[K] : never;
};

export type KeysOfType<T, V> = {
    [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export type ReturnsOfType<T, V> = {
    [K in keyof T as T[K] extends AnyFunction
        ? ReturnType<T[K]> extends V ? K : never
        : never
    ]: T[K]
};

// Partial of T where T[K] does NOT extend V
export type PartialWhereNot<T, V> = {
    [K in keyof T]-?: T[K] extends V ? never : T[K];
};

export type KeysNotOfType<T, V> = {
    [K in keyof T]-?: T[K] extends V ? never : K;
}[keyof T];

export type ReturnsNotOfType<T, V> = {
    [K in keyof T as T[K] extends AnyFunction
        ? ReturnType<T[K]> extends V ? never : K
        : never
    ]: T[K]
};
