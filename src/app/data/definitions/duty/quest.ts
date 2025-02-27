const coane = (name: string, subGroups: string[]) => ({
    path: `chronicles-of-a-new-era---${name}`,
    subGroups
});

const alliedSociety = (path: string) => ({
    path,
    subGroups: ['main-quests', 'daily-quests']
});

export const QUEST_DEFINITION = {
    path: 'quest',
    subGroups: [
        {
            path: 'main-scenario',
            subGroups: [
                {
                    path: 'seventh-umbral-era',
                    subGroups: [
                        'gridania',
                        'limsa-lominsa',
                        'uldah',
                    ]
                },
                'seventh-astral-era-main-scenario-quests',
                'heavensward-main-scenario-quests',
                'dragonsong-main-scenario-quests',
                'post-dragonsong-main-scenario-quests',
                'stormblood-main-scenario-quests',
                'post-stormblood-main-scenario-quests',
                'shadowbringers-main-scenario-quests',
                'post-shadowbringers-main-scenario-quests',
                'post-shadowbringers-main-scenario-quests-ii',
                'endwalker-main-scenario-quests',
                'post-endwalker-main-scenario-quests',
                'dawntrail-main-scenario-quests',
                'post-dawntrail-main-scenario-quests'
            ]
        },
        {
            path: 'chronicles-of-a-new-era',
            subGroups: [
                coane('primals', ['primal-quests']),
                coane('bahamut', ['bahamut-quests']),
                coane('the-crystal-tower', ['crystal-tower-quests']),
                coane('alexander', ['alexander-quests']),
                coane('the-warring-triad', ['heavensward-primal-quests']),
                coane('the-shadow-of-mhach', ['shadow-of-mhach-quests']),
                coane('omega', ['omega-quests', 'omega-beyond-the-rift']),
                coane('return-to-ivalice', ['return-to-ivalice']),
                coane('the-four-lords', ['the-four-lords']),
                coane('eden', ['eden']),
                {
                    path: 'yorha-dark-apocalypse',
                    subGroups: ['yorha-dark-apocalypse']
                },
                coane('the-sorrow-of-werlyt', ['garlemalds-machinations']),
                coane('pandmonium', ['pandmonium', 'pandmonium-epilogue']),
                coane('myths-of-the-realm', ['myths-of-the-realm']),
                coane('the-arcadion', ['the-arcadion']),
                coane('echoes-of-vanadiel', ['echoes-of-vanadiel']),
            ]
        },
        {
            path: 'sidequests',
            subGroups: [
                {
                    path: 'chronicles-of-light',
                    subGroups: [
                        'tales-of-the-dragonsong-war',
                        'tales-from-the-shadows',
                        'tales-of-newfound-adventure',
                    ]
                },
                {
                    path: 'hildibrand-sidequests',
                    subGroups: [
                        'hildibrand-adventures',
                        'further-hildibrand-adventures',
                        'even-further-hildibrand-adventures',
                        'somehow-further-hildibrand-adventures',
                        'manderville-weapons',
                    ]
                },
                {
                    path: 'weapon-enhancement-sidequests',
                    subGroups: [
                        'zodiac-weapons',
                        'anima-weapons',
                        'the-forbidden-land-eureka',
                        'resistance-weapons',
                    ]
                },
                {
                    path: 'records-of-unusual-endeavors',
                    subGroups: [
                        'doman-adventurers-guild-quests',
                        'doman-reconstruction-quests',
                        'ishgardian-restoration-main-quests',
                        'ishgardian-restoration-sidequests',
                        'splendorous-tools',
                        'palace-of-the-dead',
                        'heaven-on-high',
                        'eureka-orthos',
                        'island-sanctuary-quests',
                        'variant-dungeons',
                    ]
                },
                {
                    path: 'side-story-quests',
                    subGroups: [
                        'tales-from-the-calamity',
                        'delivery-moogle-quests',
                        'scholasticate-quests',
                        'void-quests',
                        'tatarus-grand-endeavor',
                    ]
                },
                {
                    path: 'lominsan-sidequests',
                    subGroups: [
                        'limsa-lominsa',
                        'wolves-den-pier',
                        'middle-la-noscea',
                        'lower-la-noscea',
                        'eastern-la-noscea',
                        'western-la-noscea',
                        'upper-la-noscea',
                        'outer-la-noscea',
                    ]
                },
                {
                    path: 'gridanian-sidequests',
                    subGroups: [
                        'gridania',
                        'central-shroud',
                        'east-shroud',
                        'south-shroud',
                        'north-shroud',
                    ]
                },
                {
                    path: 'uldahn-sidequests',
                    subGroups: [
                        'uldah',
                        'the-waking-sands',
                        'chocobo-square',
                        'the-gold-saucer',
                        'western-thanalan',
                        'central-thanalan',
                        'eastern-thanalan',
                        'southern-thanalan',
                        'northern-thanalan',
                    ]
                },
                {
                    path: 'coerthan-sidequests',
                    subGroups: [
                        'coerthas-central-highlands',
                        'coerthas-western-highlands',
                    ]
                },
                {
                    path: 'mor-dhonan-sidequests',
                    subGroups: ['mor-dhona']
                },
                {
                    path: 'ishgardian-sidequests',
                    subGroups: ['ishgard']
                },
                {
                    path: 'abalathian-sidequests',
                    subGroups: ['the-sea-of-clouds']
                },
                {
                    path: 'dravanian-sidequests',
                    subGroups: [
                        'matoyas-cave',
                        'idyllshire',
                        'the-dravanian-forelands',
                        'the-dravanian-hinterlands',
                        'the-churning-mists',
                    ]
                },
                {
                    path: 'azys-lla-sidequests',
                    subGroups: ['azys-lla']
                },
                {
                    path: 'gyr-abanian-sidequests',
                    subGroups: [
                        'rhalgrs-reach',
                        'the-fringes',
                        'the-peaks',
                        'the-lochs',
                    ]
                },
                {
                    path: 'othardian-sidequests',
                    subGroups: [
                        'the-ruby-sea',
                        'yanxia',
                        'the-azim-steppe',
                    ]
                },
                {
                    path: 'hingan-sidequests',
                    subGroups: ['kugane']
                },
                {
                    path: 'lakeland-sidequests',
                    subGroups: [
                        'lakeland',
                        'the-crystarium',
                    ]
                },
                {
                    path: 'kholusian-sidequests',
                    subGroups: [
                        'kholusia',
                        'eulmore',
                    ]
                },
                {
                    path: 'amh-araeng-sidequests',
                    subGroups: ['amh-araeng']
                },
                {
                    path: 'il-mheg-sidequests',
                    subGroups: ['il-mheg']
                },
                {
                    path: 'raktika-sidequests',
                    subGroups: ['the-raktika-greatwood']
                },
                {
                    path: 'tempest-sidequests',
                    subGroups: ['the-tempest']
                },
                {
                    path: 'sharlayan-sidequests',
                    subGroups: ['old-sharlayan', 'labyrinthos']
                },
                {
                    path: 'thavnairian-sidequests',
                    subGroups: ['radz-at-han', 'thavnair']
                },
                {
                    path: 'garlean-sidequests',
                    subGroups: ['garlemald']
                },
                {
                    path: 'mare-lamentorum-sidequests',
                    subGroups: ['mare-lamentorum']
                },
                {
                    path: 'elpis-sidequests',
                    subGroups: ['elpis']
                },
                {
                    path: 'ultima-thule-sidequests',
                    subGroups: ['ultima-thule']
                }
            ]
        },
        {
            path: 'allied-society-quests',
            subGroups: [
                alliedSociety('amaljaa-quests'),
                alliedSociety('sylph-quests'),
                alliedSociety('kobold-quests'),
                alliedSociety('sahagin-quests'),
                alliedSociety('ixal-quests'),
                alliedSociety('vanu-vanu-quests'),
                alliedSociety('vath-quests'),
                alliedSociety('moogle-quests'),
                alliedSociety('kojin-quests'),
                alliedSociety('ananta-quests'),
                alliedSociety('namazu-quests'),
                alliedSociety('pixie-quests'),
                alliedSociety('qitari-quests'),
                alliedSociety('dwarf-quests'),
                alliedSociety('arkasodara-quests'),
                alliedSociety('omicron-quests'),
                alliedSociety('loporrit-quests'),
                {
                    path: 'intersocietal-quests',
                    subGroups: [
                        'a-realm-reborn-allied-society-quests',
                        'heavensward-allied-society-quests',
                        'stormblood-allied-society-quests',
                        'endwalker-allied-society-quests',
                    ]
                }
            ]
        },
        {
            path: 'class-and-job-quests',
            subGroups: [
                {
                    path: 'disciple-of-war-quests',
                    subGroups: [
                        'gladiator-quests',
                        'pugilist-quests',
                        'marauder-quests',
                        'lancer-quests',
                        'archer-quests',
                        'rogue-quests',
                    ]
                },
                {
                    path: 'disciple-of-magic-quests',
                    subGroups: [
                        'conjurer-quests',
                        'thaumaturge-quests',
                        'arcanist-quests',
                    ]
                },
                {
                    path: 'disciple-of-the-hand-quests',
                    subGroups: [
                        'carpenter-quests',
                        'blacksmith-quests',
                        'armorer-quests',
                        'goldsmith-quests',
                        'leatherworker-quests',
                        'weaver-quests',
                        'alchemist-quests',
                        'culinarian-quests',
                    ]
                },
                {
                    path: 'disciple-of-the-land-quests',
                    subGroups: [
                        'miner-quests',
                        'botanist-quests',
                        'fisher-quests',
                    ]
                },
                {
                    path: 'crystalline-mean-quests',
                    subGroups: [
                        'facet-of-forging-quests',
                        'facet-of-crafting-quests',
                        'facet-of-nourishing-quests',
                        'facet-of-gathering-quests',
                        'facet-of-fishing-quests',
                    ]
                },
                {
                    path: 'studium-quests',
                    subGroups: [
                        'faculty-of-aetherology-quests',
                        'faculty-of-anthropology-quests',
                        'faculty-of-archaeology-quests',
                        'faculty-of-astronomy-quests',
                        'faculty-of-medicine-quests',
                    ]
                },
                {
                    path: 'disciple-of-war-job-quests',
                    subGroups: [
                        'paladin-quests',
                        'monk-quests',
                        'warrior-quests',
                        'dragoon-quests',
                        'bard-quests',
                        'ninja-quests',
                        'dark-knight-quests',
                        'machinist-quests',
                        'samurai-quests',
                        'gunbreaker-quests',
                        'dancer-quests',
                        'reaper-quests',
                    ]
                },
                {
                    path: 'disciple-of-magic-job-quests',
                    subGroups: [
                        'white-mage-quests',
                        'black-mage-quests',
                        'summoner-quests',
                        'scholar-quests',
                        'astrologian-quests',
                        'red-mage-quests',
                        'sage-quests',
                        'blue-mage-quests',
                    ]
                },
                {
                    path: 'role-quests',
                    subGroups: [
                        'tank-role-quests-shadowbringers',
                        'healer-role-quests-shadowbringers',
                        'physical-dps-role-quests-shadowbringers',
                        'magical-ranged-dps-role-quests-shadowbringers',
                        'role-quests-shadowbringers',
                        'tank-role-quests-endwalker',
                        'healer-role-quests-endwalker',
                        'melee-dps-role-quests-endwalker',
                        'physical-ranged-dps-role-quests-endwalker',
                        'magical-ranged-dps-role-quests-endwalker',
                        'role-quests-endwalker',
                        'tank-role-quests-dawntrail',
                        'healer-role-quests-dawntrail',
                        'melee-dps-role-quests-dawntrail',
                        'physical-ranged-dps-role-quests-dawntrail',
                        'magical-ranged-dps-role-quests-dawntrail',
                        'role-quests-dawntrail',
                    ]
                }
            ]
        },
        {
            path: 'other-quests',
            subGroups: [
                {
                    path: 'grand-company-quests',
                    subGroups: [
                        'maelstrom-quests',
                        'order-of-the-twin-adder-quests',
                        'immortal-flames-quests',
                    ]
                },
                {
                    path: 'seasonal-events',
                    subGroups: [
                        'heavensturn-events',
                        'valentiones-day-events',
                        'valentiones-and-little-ladies-day-events',
                        'little-ladies-day-events',
                        'little-ladies-and-hatching-tide-events',
                        'hatching-tide-events',
                        'gold-saucer-festivities',
                        'moonfire-faire-events',
                        'rising-events',
                        'all-saints-wake-events',
                        'starlight-celebration-events',
                    ]
                },
                {
                    path: 'special-quests',
                    subGroups: ['collaboration-quests']
                },
                'quasi-quests'
            ]
        },
        {
            path: 'levequests',
            subGroups: [
                {
                    path: 'battlecraft-leves',
                    subGroups: [
                        'lower-la-noscea',
                        'eastern-la-noscea',
                        'western-la-noscea',
                        'central-shroud',
                        'east-shroud',
                        'south-shroud',
                        'western-thanalan',
                        'eastern-thanalan',
                        'southern-thanalan',
                        'northern-thanalan',
                        'coerthas-central-highlands',
                        'coerthas-western-highlands',
                        'mor-dhona',
                        'the-sea-of-clouds',
                        'the-dravanian-forelands',
                        'the-dravanian-hinterlands',
                        'the-churning-mists',
                    ]
                },
                {
                    path: 'mining-leves',
                    subGroups: [
                        'eastern-la-noscea',
                        'south-shroud',
                        'western-thanalan',
                        'eastern-thanalan',
                        'coerthas-central-highlands',
                        'coerthas-western-highlands',
                        'mor-dhona',
                        'the-sea-of-clouds',
                        'the-dravanian-forelands',
                        'the-dravanian-hinterlands',
                        'the-churning-mists',
                        'the-fringes',
                        'the-peaks',
                        'the-ruby-sea',
                        'yanxia',
                        'the-azim-steppe',
                        'lakeland',
                        'kholusia',
                        'amh-araeng',
                        'il-mheg',
                        'the-raktika-greatwood',
                        'labyrinthos',
                        'thavnair',
                        'garlemald',
                        'urqopacha',
                        'kozamauka',
                        'yak-tel',
                        'shaaloani',
                    ]
                },
                {
                    path: 'botany-leves',
                    subGroups: [
                        'eastern-la-noscea',
                        'central-shroud',
                        'east-shroud',
                        'south-shroud',
                        'coerthas-central-highlands',
                        'coerthas-western-highlands',
                        'mor-dhona',
                        'the-sea-of-clouds',
                        'the-dravanian-forelands',
                        'the-dravanian-hinterlands',
                        'the-churning-mists',
                        'the-fringes',
                        'the-peaks',
                        'the-ruby-sea',
                        'yanxia',
                        'the-azim-steppe',
                        'lakeland',
                        'kholusia',
                        'amh-araeng',
                        'il-mheg',
                        'the-raktika-greatwood',
                        'labyrinthos',
                        'thavnair',
                        'garlemald',
                        'urqopacha',
                        'kozamauka',
                        'yak-tel',
                        'shaaloani',
                    ]
                },
                {
                    path: 'fishing-leves',
                    subGroups: [
                        'limsa-lominsa',
                        'ishgard',
                        'eastern-la-noscea',
                        'western-la-noscea',
                        'south-shroud',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'carpentry-leves',
                    subGroups: [
                        'gridania',
                        'ishgard',
                        'eastern-la-noscea',
                        'central-shroud',
                        'east-shroud',
                        'south-shroud',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'blacksmithing-leves',
                    subGroups: [
                        'limsa-lominsa',
                        'ishgard',
                        'lower-la-noscea',
                        'eastern-la-noscea',
                        'western-la-noscea',
                        'south-shroud',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'armoring-leves',
                    subGroups: [
                        'limsa-lominsa',
                        'ishgard',
                        'lower-la-noscea',
                        'eastern-la-noscea',
                        'western-la-noscea',
                        'south-shroud',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'goldsmithing-leves',
                    subGroups: [
                        'uldah',
                        'ishgard',
                        'eastern-la-noscea',
                        'south-shroud',
                        'western-thanalan',
                        'eastern-thanalan',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'leatherworking-leves',
                    subGroups: [
                        'gridania',
                        'ishgard',
                        'eastern-la-noscea',
                        'central-shroud',
                        'east-shroud',
                        'south-shroud',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'clothcrafting-leves',
                    subGroups: [
                        'uldah',
                        'ishgard',
                        'eastern-la-noscea',
                        'south-shroud',
                        'western-thanalan',
                        'eastern-thanalan',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'alchemy-leves',
                    subGroups: [
                        'uldah',
                        'ishgard',
                        'eastern-la-noscea',
                        'south-shroud',
                        'western-thanalan',
                        'eastern-thanalan',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'cooking-leves',
                    subGroups: [
                        'limsa-lominsa',
                        'ishgard',
                        'lower-la-noscea',
                        'eastern-la-noscea',
                        'western-la-noscea',
                        'south-shroud',
                        'coerthas-central-highlands',
                        'mor-dhona',
                        'kugane',
                        'the-crystarium',
                        'old-sharlayan',
                        'tuliyollal',
                    ]
                },
                {
                    path: 'company-leves',
                    subGroups: [
                        'maelstrom-levequests',
                        'order-of-the-twin-adder-levequests',
                        'immortal-flames-levequests',
                    ]
                },
            ]
        }
    ]
};
