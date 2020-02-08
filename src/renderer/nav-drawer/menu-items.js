import { remote } from 'electron';
import Store from 'electron-store';
const store = new Store();

import { versionHistory } from '../../version-history';

export const MainMenu = {
    name: "FFXIV Completionist",
    disableSelection: true,
    subGroups: [
        { name: "Import", component: "import-sheet" },
        versionHistory,
        {
            name: "Debug",
            disableSelection: true,
            subGroups: [
                { name: "Log Store", onNavigation: () => console.log(store) },
                {
                    name: "Nuke Store",
                    onNavigation: () => {
                        const buttons = ['Yes', 'No'];

                        const answer = remote.dialog.showMessageBox({
                            type: 'question',
                            buttons,
                            message: 'Are you sure you want to delete all of your saved data???' +
                                '\n(This cannot be undone)',
                        });

                        if(buttons[answer] === 'Yes') store.clear();
                    }
                },
            ],
        },
    ],
};
