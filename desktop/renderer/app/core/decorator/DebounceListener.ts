export function DebounceListener(delay: number = 100): MethodDecorator {
    return function(
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {

        const original = descriptor.value;
        const key = `__timeout__${String(propertyKey)}`;

        descriptor.value = function(
            this: Record<string, ReturnType<typeof setTimeout>>,
            ...args: any[]
        ) {
            clearTimeout(this[key]);
            this[key] = setTimeout(() => original.apply(this, args), delay);
        };

        return descriptor;
    };
}
