import * as BetaVersions from "./beta";

export const versionHistory = {
    name: "Version History",
    component: BetaVersions.version_0_5_58,
    subGroups: [
        ...Object.keys(BetaVersions).map((key) => ({
            name: key.replace('version_', '').replace(/_/g, '.'),
            component: BetaVersions[key]
        }))
    ],
};
