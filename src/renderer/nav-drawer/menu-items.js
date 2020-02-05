import { remote } from 'electron';
import Store from 'electron-store';
const store = new Store();

export const MainMenu = {
    name: "FFXIV Completionist",
    disableSelection: true,
    groupKeys: ["Import", "Log", "Nuke"],

    Import: { name: "Import", component: "import-sheet", },
    Log: { name: "Log Store", onNavigation: () => console.log(store) },
    Nuke: {
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
    }
};
