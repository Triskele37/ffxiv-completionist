import readline from 'readline';

import { skipClears } from '../constants';
import { Content } from '../domain/Content';
import { AllContent, ContentGroup } from '../domain';
import { cacheAPI } from '../cache';
import { mergeAPI } from '../merge';

export class ContentPrompt {
    rl: readline.Interface;
    returnToMain: () => void;

    crumbs: ContentGroup[];
    cur: ContentGroup;
    curKeys: string[] = [];

    constructor(rl: readline.Interface, returnToMain: () => void) {
        this.rl = rl;
        this.returnToMain = returnToMain;

        this.cur = AllContent;
        this.crumbs = [AllContent];
        this.diveContent();
    }

    // Recursive function to decide what content to interact with
    diveContent(): void {
        this.cur = this.crumbs[this.crumbs.length - 1];
        this.curKeys = Object.keys(this.cur);

        if(!skipClears) console.clear();
        this.writeOptions();
        this.contentPrompt();
    }

    // Writes current depth of options to screen
    writeOptions(): void {
        this.rl.write('Content Options:\n');

        this.curKeys.forEach((key, i) => {
            const ascii = !!this.cur[key].config ? '' : ' >';

            this.rl.write(`\n${i + 1}. ${key}${ascii}`);
        });

        this.rl.write(`\n${this.curKeys.length + 1}. Back\n`);
    }

    // Prompt for which content to execute on
    contentPrompt(): void {
        this.rl.question('\nChoice: ', (answer) => {
            const content = this.cur[this.curKeys[parseInt(answer, 10) - 1]];

            if(!content) this.goBack();
            else if(content instanceof Content) this.actionPrompt(content);
            else this.goForward(content);
        });
    }

    // Go back to the previous depth or throw back to main
    goBack(): void {
        this.crumbs.pop();

        if(this.crumbs.length) this.diveContent();
        else this.returnToMain();
    }

    // Go forward to the next depth
    goForward(content: ContentGroup): void {
        this.crumbs.push(content);
        this.diveContent();
    }

    // Prompt for which action to execute on the chosen content
    actionPrompt(content: Content): void {
        if(!skipClears) console.clear();

        this.rl.write(`Perform which action on (${content.Name})?\n\n`);
        this.rl.write('1. Add new content to cache\n');
        this.rl.write(`2. Retry failed content (${content.config.FAILED_IDS.length})\n`);
        this.rl.write('3. Create fresh cache\n');
        this.rl.write('4. Merge cache to App\n');
        this.rl.write('5. Back\n');

        this.rl.question('\nChoice: ', (answer) => {
            if(!skipClears) console.clear();

            switch(answer) {
                case '1':
                    cacheAPI(content, 'new', this.returnToMain.bind(this));
                    break;
                case '2':
                    cacheAPI(content, 'fail', this.returnToMain.bind(this));
                    break;
                case '3':
                    cacheAPI(content, 'full', this.returnToMain.bind(this));
                    break;
                case '4':
                    mergeAPI(content, this.rl, this.returnToMain.bind(this));
                    break;
                default:
                    this.diveContent();
            }
        });
    }

}
