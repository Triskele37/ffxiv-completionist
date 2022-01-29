import { Content } from './Content';

import { Title } from './character/character/Title';
import { BuddyEquip } from './character/companion/BuddyEquip';
import { TripleTriadCard } from './character/gold-saucer/TripleTriadCard';
import { Achievement } from './character/Achievement';
import { Fate } from './duty/Fate';
import { Leve } from './duty/quest/Leve';
import { Quest } from './duty/quest/Quest';
import { Recipes } from './logs/crafting/RecipeNotebookList';
import { FishParameter } from './logs/gathering/FishParameter';
import { FishingSpot } from './logs/gathering/FishingSpot';
import { SpearfishingItem } from './logs/gathering/SpearfishingItem';
import { Emote } from './social/Emote';
import { ENpcResident } from './_other/ENpcResident';
import { Map } from './_other/Map';

export type ContentGroup = {
    [key: string]: ContentGroup | Content;
};

export const AllContent: ContentGroup = {
    Character: {
        Character: {
            Title: new Title()
        },
        Companion: {
            Barding: new BuddyEquip()
        },
        'Gold Saucer': {
            TripleTriadCard: new TripleTriadCard()
        },
        Achievement: new Achievement()
    },
    Duty: {
        Fate: new Fate(),
        Quest: {
            Levequest: new Leve(),
            Quest: new Quest()
        }
    },
    Logs: {
        Crafting: new Recipes(),
        Gathering: {
            Fish: new FishParameter(),
            Spot: new FishingSpot(),
            Spearfish: new SpearfishingItem(),
        }
    },
    Emote: new Emote(),
    Other: {
        NPC: new ENpcResident(),
        Map: new Map()
    }
};
