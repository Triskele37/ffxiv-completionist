import * as BetaVersions from './beta';

export const VersionHistory = {
    name: 'Version History',
    component: BetaVersions.Beta_0_5_58_Component,
    subGroups: [
        ...mapSubGroupsFromImports(BetaVersions)
    ]
};

function mapSubGroupsFromImports(imports) {
    return Object.keys(imports)
        // Only work with components
        .filter((importName) => importName.includes('Component'))
        // Create the UI Group
        .map((importName) => {
            // All version history components need to end with _Component
            let name = importName.replace('_Component', '');
            name = name.replace(/_/g, '.');

            return {
                name,
                component: imports[importName]
            };
        });
}
