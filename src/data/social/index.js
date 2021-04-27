import { DataGroup } from "../DataGroup";

const basePath = "./social";
export const Social = function(parent) {
    const data = DataGroup.fromJSON(parent, `${basePath}/index`);

    data.subGroups = [
        DataGroup.fromJSON(data, `${basePath}/emotes`, {
            patch: { filterable: true }
        }),
    ];

    return data;
};
