// Return a safe version of names for file/directory name
module.exports = function safeName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z_\- ]/g, '') // remove non-alpha characters
        .replace(/\s\s+/g, ' ') // remove multiple spacing
        .replace(/ - /, '-') // special case for "x - y"
        .replace(/\s/g, '-');
};
