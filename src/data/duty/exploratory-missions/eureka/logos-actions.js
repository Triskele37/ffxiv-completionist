import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Eureka_Logos_Actions = function(parent) {
    const data = new DataGroup("Logos Actions", parent);
    data.columnConfig = [
        { header: "Action", key: "name_en" },
        { header: "Description", key: "description_en" },
        { header: "Mnemes Needed to Craft", key: "mnemesToCraft" },
        { header: "Equippable By", key: "equippableBy", filterable: true }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "Wisdom of the Aetherweaver",
        "description_en": "Increases magic damage dealt by 60%",
        "mnemesToCraft": "Wisdom of the Aetherweaver",
        "equippableBy": "Healers"
    },
    {
        "name_en": "Wisdom of the Martialist",
        "description_en": "Increases physical damage dealt by 40%",
        "mnemesToCraft": "Wisdom of the Martialist",
        "equippableBy": "Tanks"
    },
    {
        "name_en": "Wisdom of the Platebearer",
        "description_en": "Increases defense by 3,000 and maximum HP by 50%",
        "mnemesToCraft": "Wisdom of the Platebearer",
        "equippableBy": "DPS (all)"
    },
    {
        "name_en": "Wisdom of the Guardian",
        "description_en": "Increases defense by 1,800 and maximum HP by 10%",
        "mnemesToCraft": "Wisdom of the Platebearer, Incense L, Incense L",
        "equippableBy": "Tanks"
    },
    {
        "name_en": "Wisdom of the Ordained",
        "description_en": "Increases maximum MP by 50% and healing magic potency by 25%",
        "mnemesToCraft": "Wisdom of the Aetherweaver, Cure L, Cure L",
        "equippableBy": "Healers"
    },
    {
        "name_en": "Wisdom of the Skirmisher",
        "description_en": "Increases damage dealt by 12%",
        "mnemesToCraft": "Wisdom of the Martialist, Wisdom of the Martialist, Wisdom of the Martialist",
        "equippableBy": "DPS (all)"
    },
    {
        "name_en": "Wisdom of the Watcher",
        "description_en": "Increases evasion by 25% while reducing damage dealt by 5%",
        "mnemesToCraft": "Stealth L, Stealth L",
        "equippableBy": "Tanks"
    },
    {
        "name_en": "Wisdom of the Templar",
        "description_en": "Increases healing magic potency by 50% and maximum HP by 30%, while reducing damage dealt by 5%",
        "mnemesToCraft": "Wisdom of the Platebearer, Cure L, Stoneskin L",
        "equippableBy": "Healers"
    },
    {
        "name_en": "Wisdom of the Irregular",
        "description_en": "Increases damage dealt by 21% while reducing magic defense by 60%",
        "mnemesToCraft": "Wisdom of the Martialist, Wisdom of the Skirmisher, Incense L",
        "equippableBy": "DPS (all)"
    },
    {
        "name_en": "Wisdom of the Breathtaker",
        "description_en": "Increases poison resistance and movement speed, and increases evasion by 10%",
        "mnemesToCraft": "Stealth L, Stealth L, Stealth L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Wisdom of the Remembered",
        "description_en": "Increases maximum HP by 10% and accuracy by 30% and grants a 70% chance of automatic revival upon KO",
        "mnemesToCraft": "Wisdom of the Aetherwaver, Wisdom of the Martialist, Wisdom of the Platebearer",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Protect L",
        "description_en": "Increases the physical defense of the target by 1,000 for 30m",
        "mnemesToCraft": "Protect L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Shell L",
        "description_en": "Increases the magic defense of the target by 1,000 for 30m",
        "mnemesToCraft": "Protect L, Esuna L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Death L",
        "description_en": "KOs target. The less the target's HP, the greater the chance of success",
        "mnemesToCraft": "Wisdom of Aetherweaver, Raise L, Paralyse L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Focus L",
        "description_en": "Grants a stack of Boost for 30s. Each stack increases potency of next weaponskill by 30%. Max 16 stacks",
        "mnemesToCraft": "Wisdom of the Skirmisher, Bloodbath L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Paralyze L",
        "description_en": "Afflicts target with paralysis for 60s",
        "mnemesToCraft": "Paralyze L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Paralyze L III",
        "description_en": "Afllicts target and all nearby enemies with paralysis for 60s",
        "mnemesToCraft": "Paralyze L, Paralyze L, Paralyze L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Swift L",
        "description_en": "Greatly increases movement speed for 10s",
        "mnemesToCraft": "Featherfoot L, Featherfoot L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Featherfoot L",
        "description_en": "Increases evasion by 15% for 45s",
        "mnemesToCraft": "Feint L, Feint L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Spirit Dart L",
        "description_en": "Delivers a ranged attack with potency of 100 and afflicts target with Spirit Dart L, increasing damage taken by 8% for 60s",
        "mnemesToCraft": "Spirit Dart L",
        "equippableBy": "DPS (all)"
    },
    {
        "name_en": "Catastrophe L",
        "description_en": "Deals unaspected damage to all nearby enemies with potency of 4,000, while dealing damage with a potency of 999,999 to self",
        "mnemesToCraft": "Spirit Dart L, Spirit Dart L, Spirit Dart L",
        "equippableBy": "Tanks, Melee DPS, Ranged DPS"
    },
    {
        "name_en": "Dispel L",
        "description_en": "Removes one beneficial status from target",
        "mnemesToCraft": "Tranquilizer L, Tranquilizer L, Tranquilizer L",
        "equippableBy": "Healers, DPS (all)"
    },
    {
        "name_en": "Feint L",
        "description_en": "Delievrs an attack with potency of 100 and reduces target's evasion for 60s",
        "mnemesToCraft": "Feint L",
        "equippableBy": "Tanks, Healers"
    },
    {
        "name_en": "Stealth L",
        "description_en": "Activate to become invisible and reduce movement speed by 50%. Has no effect on some enemies",
        "mnemesToCraft": "Stealth L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Aetherial Manipulation L",
        "description_en": "Rush to a target's side. Unable to be cast while bound",
        "mnemesToCraft": "Wisdom of the Martialist, Feint L, Backstep L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Backstep L",
        "description_en": "Jump 10 yalms back from current position. Can not be executed while bound",
        "mnemesToCraft": "Backstep L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Tranquilizer L",
        "description_en": "Stuns target for 8s",
        "mnemesToCraft": "Tranquilizer L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Bloodbath L",
        "description_en": "Converts portion of damage dealt into HP. Lasts 45s",
        "mnemesToCraft": "Wisdom of the Martialist, Wisdom of the Martialist, Cure L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Rejuvenate L",
        "description_en": "Instantly restores 50% of maximum MP",
        "mnemesToCraft": "Wisdom of the Martialist, Wisdom of the Aetherweaver, Cure L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Haymaker L",
        "description_en": "Delivers an attack with a potency of 300 and afflicts target with Slow +20%. Lasts 30s. Can only be executed after evasion",
        "mnemesToCraft": "Wisdom of the Martialist, Incense L, Featherfoot L",
        "equippableBy": "Tanks"
    },
    {
        "name_en": "Rapid Recast L",
        "description_en": "Shortens recast time for next ability used by 50%. Lasts 15s",
        "mnemesToCraft": "Cure L, Esuna L, Feint L",
        "equippableBy": "Tanks, DPS (all)"
    },
    {
        "name_en": "Cure L",
        "description_en": "Restores target's HP. Cure potency: 9,000",
        "mnemesToCraft": "Cure L",
        "equippableBy": "Tanks, DPS (all)"
    },
    {
        "name_en": "Cure L II",
        "description_en": "Restores target's HP. Cure potency: 12,000",
        "mnemesToCraft": "Cure L, Cure L, Cure L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Stoneskin L",
        "description_en": "Creates a barrier around target that absorbs damage totalling 10% of targets maximum HP. Lasts 30s",
        "mnemesToCraft": "Protect L, Protect L, Protect L",
        "equippableBy": "Tanks, DPS (all)"
    },
    {
        "name_en": "Cure L III",
        "description_en": "Restores HP of target and all party members nearby target. Cure potency: 9,000",
        "mnemesToCraft": "Cure L II, Cure L II",
        "equippableBy": "Tanks, DPS (all)"
    },
    {
        "name_en": "Regen L",
        "description_en": "Grants healing over time effect to target. Cure potency: 2,500. Lasts 21s",
        "mnemesToCraft": "Cure L, Cure L, Feint L",
        "equippableBy": "Tanks, DPS (all)"
    },
    {
        "name_en": "Esuna L",
        "description_en": "Removes a single detrimental status effect from target",
        "mnemesToCraft": "Esuna L",
        "equippableBy": "Tanks, DPS (all)"
    },
    {
        "name_en": "Incense L",
        "description_en": "Gesture threateningly, placing yourself at the top of the target's enmity list and increasing enmity generation for 15s",
        "mnemesToCraft": "Incense L",
        "equippableBy": "Healers, DPS (all)"
    },
    {
        "name_en": "Raise L",
        "description_en": "Resurrects target to a weakened state",
        "mnemesToCraft": "Raise L",
        "equippableBy": "Tanks, DPS (all)"
    },
    {
        "name_en": "Bravery L",
        "description_en": "Increases target's damage dealt by 10% for 100s",
        "mnemesToCraft": "Wisdom of the Skirmisher, Wisdom of the Guardian, Wisdom of the Ordained",
        "equippableBy": "Healers, Caster DPS"
    },
    {
        "name_en": "Solid Shield L",
        "description_en": "Reduces physical damage by 99% for 8s",
        "mnemesToCraft": "Wisdom of the Guardian, Protect L, Stoneskin L",
        "equippableBy": "Healers, DPS (all)"
    },
    {
        "name_en": "Spell Shield L",
        "description_en": "Reduces magic damage taken by 99% for 8s",
        "mnemesToCraft": "Wisdom of the Guardian, Shell L, Stoneskin L",
        "equippableBy": "Healers, DPS (all)"
    },
    {
        "name_en": "Reflect L",
        "description_en": "Creates a magic-reflecting barrier around self or party member. Lasts 10s",
        "mnemesToCraft": "Wisdom of the Ordained, Protect L, Shell L",
        "equippableBy": "All Classes"
    },
    {
        "name_en": "Smite L",
        "description_en": "Delivers an attack with potency of 1,000 and restores an amount of own HP proportional to damage dealt. Can only be executed when HP is below 50%",
        "mnemesToCraft": "Wisdom of the Skirmisher, Spirit Dart L, Tranquilizer L",
        "equippableBy": "Tanks"
    },
    {
        "name_en": "Refresh L",
        "description_en": "Increases the amount of magia aether regenerated over time by self and nearby party members. Lasts 30s",
        "mnemesToCraft": "Wisdom of the Aetherweaver, Wisdom of the Ordained, Cure L II",
        "equippableBy": "Healers"
    },
    {
        "name_en": "Banish L",
        "description_en": "Deals unaspected damage with a potency of 200 and afflicts undead targets with Banish L, increasing damage taken by 12% for 60s",
        "mnemesToCraft": "Wisdom of the Aetherweaver, Dispel L, Dispel L",
        "equippableBy": "Healers"
    },
    {
        "name_en": "Banish L III",
        "description_en": "Deals unaspected damage with a potency of 150 to target and all nearby enemies and afflicts undead targets with Banish L, increasing damage taken by 12% for 60s",
        "mnemesToCraft": "Wisdom of the Ordained, Dispel L, Dispel L",
        "equippableBy": "Healers"
    },
    {
        "name_en": "Magic Burst L",
        "description_en": "Increases spell damage by 100% while increasing MP cost for 20s",
        "mnemesToCraft": "Wisodm of the Remembered, Wisdom of the Ordained, Stoneskin L",
        "equippableBy": "Healers, Caster DPS"
    },
    {
        "name_en": "Double Edge L",
        "description_en": "Stacking buff that increases physical damage dealt by 15% and deals damage over time with potency of 1,200 per stack. Lasts 48s. Max 16 stacks",
        "mnemesToCraft": "Wisdom of the Skirmisher, Bloodbath L, Wisdom of the Guardian",
        "equippableBy": "Tanks, Melee DPS"
    },
    {
        "name_en": "Eagle Eye Shot L",
        "description_en": "Delivers a ranged attack with potency of 80. Potency increases up to 1,000% the lower the target's HP. Generates significant enmity",
        "mnemesToCraft": "Wisdom of the Skirmisher, Wisdom of the Remembered, Spirit Dart L",
        "equippableBy": "Ranged DPS"
    },
    {
        "name_en": "Perception L",
        "description_en": "Reveals all traps within a 15-yalm radius. If no traps exist within 15 yalms, detects whether any traps are present within a 36-yalm radius. Only effective within dungeons.",
        "mnemesToCraft": "Wisdom of the Breathtaker, Stealth L, Dispel L",
        "equippableBy": "DPS (all)"
    },
    {
        "name_en": "Wisdom of the Elder L",
        "description_en": "Increases magic damage dealt by 35% and magic defense by 1,000, while decreasing spell MP cost.",
        "mnemesToCraft": "Wisdom of the Aetherweaver, Wisdom of the Ordained, Magic Burst L",
        "equippableBy": "Caster DPS"
    },
    {
        "name_en": "Wisdom of the Duelist L",
        "description_en": "Increases physical damage dealt by 40% and maximum HP by 15%.",
        "mnemesToCraft": "Double Edge L, Wisdom of the Skirmisher, Wisdom of the Skirmisher",
        "equippableBy": "Melee DPS"
    },
    {
        "name_en": "Wisdom of the Fiendhunter L",
        "description_en": "Increases physical damage dealt by 25% and evasion by 25%.",
        "mnemesToCraft": "Eagle Shot L, Spirit Dart L, Featherfoot L",
        "equippableBy": "Ranged Physical DPS"
    },
    {
        "name_en": "Wisdom of the Indomitable L",
        "description_en": "Increases defense by 2,000. Grants one stack of HP Boost each time damage equal to or greater than half of maximum HP is taken from a single-target attack.",
        "mnemesToCraft": "Double Edge L, Wisdom of the Platebearer, Incense L",
        "equippableBy": "Tanks"
    },
    {
        "name_en": "Sacrifice L",
        "description_en": "Restores 100% of target's HP, even if target is KO'd. Cannot be executed if currently afflicted with Doom. Inflicts Doom on self.",
        "mnemesToCraft": "Magic Burst L, Raise L, Esuna L",
        "equippableBy": "Healers"
    }
];
