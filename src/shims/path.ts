// export { join } from 'path-browserify';
export function join(...args) {
    const slash = args[0].indexOf('/') === -1 ? '\\' : '/';
    return args.join(slash);
}
