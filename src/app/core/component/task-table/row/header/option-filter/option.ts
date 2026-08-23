export type Option = {
    value: string;
    isCustom?: boolean;
};

export function toOptions(values: string[]): Option[] {
    return values.map(toOption);
}

export function toOption(value: string): Option {
    return { value };
}

export function fromOptions(options: Option[]): string[] {
    return options.map(fromOption);
}

export function fromOption(option: Option): string {
    return option.value;
}
