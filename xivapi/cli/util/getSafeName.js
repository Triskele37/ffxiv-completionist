// Return a safe version of names for file/directory name
module.exports = function safeName(name) {
    return name
        .toString()
        .toLowerCase()
        .replace(/[^a-z0-9_\- ]/g, '') // remove non-alphanumeric characters
        .replace(/\s\s+/g, ' ') // remove multiple spacing
        .replace(/ - /, '-') // special case for "x - y"
        .replace(/\s/g, '-');
};
