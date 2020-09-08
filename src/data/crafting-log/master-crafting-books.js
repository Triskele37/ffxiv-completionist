import { DataGroup } from "../DataGroup";

export const Crafting_Log_Master_Crafting_Books = function(parent) {
    const data = new DataGroup("Master Crafting Books", parent);
    data.name_fr = "Livres d'artisanat expert";

    data.initializeTasks(tasks, [
        { key: 'name', header: 'Book' },
        { key: 'npc', header: 'NPC' },
        { key: 'requirements', header: 'Requirements' }
    ]);

    return data;
};

const tasks = [
    //------------------------------------------------------- Carpenter
    {
        name: 'Master Carpenter I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Treated Spruce Lumber (HQ)'
    }, {
        name: 'Master Carpenter II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Reinforced Spruce Plywood (HQ)'
    }, {
        name: 'Master Carpenter III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Carpenter IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Carpenter V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Carpenter VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Carpenter VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Carpenter VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    }, {
        name: 'Master Carpenter: Demimateria',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Fieldcraft Demimateria I & Battlecraft Demimateria I'
    }, {
        name: 'Master Carpenter: Glamours',
        npc: 'Tataroga: Mor Dhona (x22, y6)',
        requirements: '300 gil'
    },
    //------------------------------------------------------- Blacksmith
    {
        name: 'Master Blacksmith I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Darksteel Ingot (HQ)'
    }, {
        name: 'Master Blacksmith II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Balanced Darksteel Hook (HQ)'
    }, {
        name: 'Master Blacksmith III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Blacksmith IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Blacksmith V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Blacksmith VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Blacksmith VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Blacksmith VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    }, {
        name: 'Master Blacksmith: Demimateria',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Fieldcraft Demimateria I & Battlecraft Demimateria I'
    }, {
        name: 'Master Blacksmith: Glamours',
        npc: 'Tataroga: Mor Dhona (x22, y6)',
        requirements: '3000 gil'
    },
    //------------------------------------------------------- Armorer
    {
        name: 'Master Armorer I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Darksteel Ingot (HQ)'
    }, {
        name: 'Master Armorer II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Reinforced Dark Steel Wire (HQ)'
    }, {
        name: 'Master Armorer III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Armorer IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Armorer V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Armorer VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Armorer VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Armorer VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    }, {
        name: 'Master Armorer: Demimateria',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Fieldcraft Demimateria I & Battlecraft Demimateria I'
    }, {
        name: 'Master Armorer: Glamours',
        npc: 'Tataroga: Mor Dhona (x22, y6)',
        requirements: '3000 gil'
    },
    //------------------------------------------------------- Goldsmith
    {
        name: 'Master Goldsmith I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Rose Gold Ingot (HQ)'
    }, {
        name: 'Master Goldsmith II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Calibrated Rose Gold Cog (HQ)'
    }, {
        name: 'Master Goldsmith III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Goldsmith IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Goldsmith V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Goldsmith VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Goldsmith VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Goldsmith VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    }, {
        name: 'Master Goldsmith: Demimateria',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Fieldcraft Demimateria I & Battlecraft Demimateria I'
    }, {
        name: 'Master Goldsmith: Glamours',
        npc: 'Tataroga: Mor Dhona (x22, y6)',
        requirements: '3000 gil'
    },
    //------------------------------------------------------- Leatherworker
    {
        name: 'Master Leatherworker I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Hard Hippogryph Leather (HQ)'
    }, {
        name: 'Master Leatherworker II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Water-hardened Hipogryph Strap (HQ)'
    }, {
        name: 'Master Leatherworker III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Leatherworker IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Leatherworker V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Leatherworker VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Leatherworker VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Leatherworker VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    }, {
        name: 'Master Leatherworker: Demimateria',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Fieldcraft Demimateria I & Battlecraft Demimateria I'
    }, {
        name: 'Master Leatherworker: Glamours',
        npc: 'Tataroga: Mor Dhona (x22, y6)',
        requirements: '3000 gil'
    },
    //------------------------------------------------------- Weaver
    {
        name: 'Master Weaver I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Vanya Silk (HQ)'
    }, {
        name: 'Master Weaver II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Intricate Silver Brocade (HQ)'
    }, {
        name: 'Master Weaver III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Weaver IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Weaver V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Weaver VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Weaver VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Weaver VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    }, {
        name: 'Master Weaver: Demimateria',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Fieldcraft Demimateria I & Battlecraft Demimateria I'
    }, {
        name: 'Master Weaver: Glamours',
        npc: 'Tataroga: Mor Dhona (x22, y6)',
        requirements: '3000 gil'
    },
    //------------------------------------------------------- Alchemist
    {
        name: 'Master Alchemist I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Growth Formula Delta Concentrate (HQ)'
    }, {
        name: 'Master Alchemist II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Concentrated Spirits of Salt (HQ)'
    }, {
        name: 'Master Alchemist III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Alchemist IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Alchemist V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Alchemist VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Alchemist VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Alchemist VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    }, {
        name: 'Master Alchemist: Demimateria',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Fieldcraft Demimateria I & Battlecraft Demimateria I'
    }, {
        name: 'Master Alchemist: Glamours',
        npc: 'Tataroga: Mor Dhona (x22, y6)',
        requirements: '3000 gil'
    },
    //------------------------------------------------------- Culinarian
    {
        name: 'Master Culinarian I',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Sauteed Coeurl (HQ)'
    }, {
        name: 'Master Culinarian II',
        npc: 'Talan: Mor Dhona (x21, y6)',
        requirements: 'Rich Tomato Relish (HQ)'
    }, {
        name: 'Master Culinarian III',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Culinarian IV',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '100 Yellow Scrips'
    }, {
        name: 'Master Culinarian V',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '300 Yellow Scrips'
    }, {
        name: 'Master Culinarian VI',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Culinarian VII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '400 Yellow Scrips'
    }, {
        name: 'Master Culinarian VIII',
        npc: 'Scrip Exchange: Eulmore (x11, y10)',
        requirements: '1200 Yellow Scrips'
    },
];
