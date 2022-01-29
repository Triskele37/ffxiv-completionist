import readline from 'readline';

import { skipClears } from '../constants';
import { AllContent, ContentGroup } from '../domain';
import { Content } from '../domain/Content';

import { removeExcluded } from './removeExcluded';
import { reviewErrors } from './reviewErrors';
import { splitCommonKeys } from './splitCommonKeys';

type Callback = () => void;

const TAB = '    ';
export function cleanAPI(rl: readline.Interface, back: Callback): void {
    if(!skipClears) console.clear();

    diveContent(rl, AllContent, 0);

    done(rl, back);
}

function diveContent(rl: readline.Interface, group: ContentGroup, depth: number): void {
    Object.keys(group).forEach((key) => {
        const indentation = new Array(depth).fill(TAB).join('');
        const content = group[key];

        if(content instanceof Content) {
            rl.write(`${indentation}Cleaning ${key}\n`);

            removeExcluded(rl, content, indentation + TAB);

            //TODO: one of these hangs the process
            // reviewErrors(rl, content, indentation + TAB);
            // splitCommonKeys(rl, content, indentation + TAB);
        }
        else {
            rl.write(`${indentation}(${key})\n`);
            diveContent(rl, content, depth + 1);
        }
    });
}

function done(rl: readline.Interface, back: Callback) {
    rl.write('\n\n');
    rl.question('Completed, press any key to continue...', back);
}
