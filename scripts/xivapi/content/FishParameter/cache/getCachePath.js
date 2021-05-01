module.exports = function getAppPath(FishParameter) {
    if(!FishParameter || !FishParameter.ID) return ["_error"];
    return [`page-${Math.floor(FishParameter.ID / 25) + 1}`];
};
