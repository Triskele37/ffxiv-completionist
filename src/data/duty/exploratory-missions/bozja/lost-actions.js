import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Bozja_Lost_Actions = function(parent) {
    const data = new DataGroup("Lost Actions", parent);
    data.columnConfig = [
        { header: "Action", key: "name_en" },
        { header: "Category", key: "category", filterable: true },
        { header: "Description", key: "description_en" },
        { header: "Forgotten Fragment", key: "fragment", filterable: true }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "Lost Focus",
        "category": "Offensive",
        "description_en": "Grants a stack of Boost, up to a maximum of 16. Increases potency of next weaponskill by 15% per stack. Lasts for 30s",
        "fragment": "Forgotten Fragment of Violence"
    },
    {
        "name_en": "Lost Font of Magic",
        "category": "Offensive",
        "description_en": "Increases damage dealt by 70%, while draining MP for 30s. When under Spirit of the Veteran, grants Spell Shield, reducing magic damage taken by 50% for 15s.",
        "fragment": "Forgotten Fragment of Sagacity"
    },
    {
        "name_en": "Lost Font of Power",
        "category": "Offensive",
        "description_en": "Increases damage dealt by 30% and critical hit rate by 40%. When under Spirit of the Irregular, the bonus is 40%. When under Spirit of the Platebearer, reduces physical damage taken by 50% for 15s",
        "fragment": "Forgotten Fragment of Sagacity"
    },
    {
        "name_en": "Lost Slash",
        "category": "Offensive",
        "description_en": "Delivers an attack with a potency of 800 to all enemies in a cone before you. When critical damage is dealt, potency is tripled.",
        "fragment": "Forgotten Fragment of Violence"
    },
    {
        "name_en": "Lost Death",
        "category": "Offensive",
        "description_en": "KOs target. The less the target's HP, the greater the chance of success. When under Spirit of the Ordained chance of success is increased",
        "fragment": "Forgotten Fragment of Violence"
    },
    {
        "name_en": "Banner of Noble Ends",
        "category": "Offensive",
        "description_en": "Increases damage dealt by 50% while reducing own HP recovery via most healing actions by 100% for 15s",
        "fragment": "Forgotten Fragment of Resolve"
    },
    {
        "name_en": "Banner of Honored Sacrifice",
        "category": "Offensive",
        "description_en": "Increases damage dealt by 55% while draining your HP for 15s",
        "fragment": "Forgotten Fragment of Resolve"
    },
    {
        "name_en": "Banner of Honed Acuity",
        "category": "Offensive",
        "description_en": "Stacks each time an attack is evaded to a maximum of 3. Increases damage taken by 10% per stack for 120s. At max stacks, increases critical hit rate by 30% and reduces cast time and recast time, and auto-attack delay by 20% for 180s",
        "fragment": "Forgotten Fragment of Resolve"
    },
    {
        "name_en": "Lost Fair Trade",
        "category": "Offensive",
        "description_en": "Throw a random Lost Action at a target, dealing damage with a potency of 50. Potency increases up to 1,000 based on the weight of the lost action. The action thrown will be lost upon execution.",
        "fragment": "Forgotten Fragment of Caprice"
    },
    {
        "name_en": "Lost Flare Star",
        "category": "Offensive",
        "description_en": "Deals unaspected damage with a potency of 300 to all nearby enemies. Deals unaspected damage over time with a potency of 350 for 60s.  The damage over time effect can only be applied once per target.",
        "fragment": "Forgotten Fragment of Clarity"
    },
    {
        "name_en": "Lost Manawall",
        "category": "Defensive",
        "description_en": "Temporarily applies Heavy to self, while reducing damage taken by 90% and nullifying most knockback and draw-in effects. Lasts for 6s.",
        "fragment": "Forgotten Fragment of Caution"
    },
    {
        "name_en": "Banner of Tireless Conviction",
        "category": "Defensive",
        "description_en": "Gain stacks each time damage is taken, up to a max of 5. Increases damage taken by 15% per stack for 30s. At max stacks, reduces damage taken by 30% for 180s",
        "fragment": "Forgotten Fragment of Resolve"
    },
    {
        "name_en": "Banner of Firm Resolve",
        "category": "Defensive",
        "description_en": "Gain stacks each time damage is taken, up to a max of 5. Reduces damage dealt by 15% per stack for 30s. At max stacks, reduces damage taken by 30% for 180s",
        "fragment": "Forgotten Fragment of Resolve"
    },
    {
        "name_en": "Lost Incense",
        "category": "Defensive",
        "description_en": "Places yourself at the top of a target's enmity list. Enmity generation is increased and damage taken is reduced by 20%. Lasts for 20s.",
        "fragment": "Forgotten Fragment of Caution"
    },
    {
        "name_en": "Banner of Solemn Clarity",
        "category": "Restorative",
        "description_en": "Periodically gain stacks, up to a max of 4. Effects ends upon using an action or moving. Cancels auto-attack upon execution. At max stacks, Increases healing potency by 50% while reducing MP cost for 120s",
        "fragment": "Forgotten Fragment of Resolve"
    },
    {
        "name_en": "Lost Cure",
        "category": "Restorative",
        "description_en": "Restores 15,000 potency worth of HP to one target",
        "fragment": "Forgotten Fragment of Caution"
    },
    {
        "name_en": "Lost Cure II",
        "category": "Restorative",
        "description_en": "Restores 21,700 potency worth of HP to one target and applies a 6,000 potency regen effect over 21s",
        "fragment": "Forgotten Fragment of Compassion"
    },
    {
        "name_en": "Lost Cure III",
        "category": "Restorative",
        "description_en": "Restores 15,000 potency worth of HP to a target and all nearby party members",
        "fragment": "Forgotten Fragment of Caution"
    },
    {
        "name_en": "Lost Cure IV",
        "category": "Restorative",
        "description_en": "Restores 21,700 potency worth of HP to a target and all nearby party members and applies a 6,000 potency regen effect over 21s",
        "fragment": "Forgotten Fragment of Compassion"
    },
    {
        "name_en": "Lost Arise",
        "category": "Restorative",
        "description_en": "Restores 100% of target's HP, even if target is KO'd. If the target was weakened at the time of Raise, the weakness effect will be removed.",
        "fragment": "Forgotten Fragment of Compassion"
    },
    {
        "name_en": "Lost Sacrifice",
        "category": "Restorative",
        "description_en": "Restores all of a KO'd target's HP. Cannot be executed if currently afflicted with Sacrifice. Inflicts Sacrifice on self for 10s",
        "fragment": "Forgotten Fragment of Loss"
    },
    {
        "name_en": "Lost Spellforge",
        "category": "Beneficial",
        "description_en": "All attacks now deal magic damage. However, all bonuses to damage dealt are determined by the attack's base damage type. Lasts for 300s",
        "fragment": "Forgotten Fragment of Ingenuity"
    },
    {
        "name_en": "Lost Steelsting",
        "category": "Beneficial",
        "description_en": "All attacks now deal physical damage. However, all bonuses to damage dealt are determined by the attack's base damage type. Lasts for 300s",
        "fragment": "Forgotten Fragment of Ingenuity"
    },
    {
        "name_en": "Lost Protect",
        "category": "Beneficial",
        "description_en": "Applies a barrier to self or target player reducing physical damage taken by 10% for 30m",
        "fragment": "Forgotten Fragment of Caution"
    },
    {
        "name_en": "Lost Shell",
        "category": "Beneficial",
        "description_en": "Applies a barrier to self or target player reducing magic damage taken by 10% for 30m",
        "fragment": "Forgotten Fragment of Caution"
    },
    {
        "name_en": "Lost Reflect",
        "category": "Beneficial",
        "description_en": "Creates a barrier around self or party member that reflects most magic attacks for 10s (30s if under Spirit of the Guardian effect)",
        "fragment": "Forgotten Fragment of Support"
    },
    {
        "name_en": "Lost Stoneskin",
        "category": "Beneficial",
        "description_en": "Applies a barrier to self or target player that absorbs damage totaling 15% of target's maximum HP for 60s",
        "fragment": "Forgotten Fragment of Support"
    },
    {
        "name_en": "Lost Bravery",
        "category": "Beneficial",
        "description_en": "Increases damage dealt by an ally or self by 5% for 600s",
        "fragment": "Forgotten Fragment of Support"
    },
    {
        "name_en": "Lost Aethershield",
        "category": "Beneficial",
        "description_en": "Reduces damage taken by self and nearby party members by 30% for 15s",
        "fragment": "Forgotten Fragment of Fortitude"
    },
    {
        "name_en": "Lost Dervish",
        "category": "Beneficial",
        "description_en": "Increases critical hit rate of self and nearby party members by 10%, increases damage dealt by 7%, and reduces weaponskill and spell cast time and recast time, and auto-attack delay by 1% for 60s",
        "fragment": "Forgotten Fragment of Finesse"
    },
    {
        "name_en": "Lost Stealth",
        "category": "Tactical",
        "description_en": "Most enemies cannot detect you, but reduces movement speed by 25%. Has no effect on certain enemies with special sight",
        "fragment": "Forgotten Fragment of Caution"
    },
    {
        "name_en": "Lost Swift",
        "category": "Tactical",
        "description_en": "Greatly increases movement speed for 10s. When under Spirit of the Breathtaker, increases evasion by 30% and lasts for 60s. When under Spirit of the Watcher, shortens recast time for next ability used by 60% and lasts for 30s",
        "fragment": "Forgotten Fragment of Ingenuity"
    },
    {
        "name_en": "Lost Font of Skill",
        "category": "Tactical",
        "description_en": "Resets the recast timer for most actions and role actions",
        "fragment": "Forgotten Fragment of Sagacity"
    },
    {
        "name_en": "Mimic",
        "category": "Tactical",
        "description_en": "Study the lost techniques used by a targeted party member and make them your own",
        "fragment": "Forgotten Fragment of Caprice"
    },
    {
        "name_en": "Lost Perception",
        "category": "Tactical",
        "description_en": "Detect traps within a radius of 15 yalms. If there are no traps within 15 yalms, alerts you to the presence of traps with a radius of 36 yalms. ※This action can only be used in Delubrum Reginae.",
        "fragment": "Forgotten Fragment of Observation"
    },
    {
        "name_en": "Lost Paralyze III",
        "category": "Detrimental",
        "description_en": "Afflicts target and all nearby enemies with Paralysis for 60s",
        "fragment": "Forgotten Fragment of Ingenuity"
    },
    {
        "name_en": "Lost Banish III",
        "category": "Detrimental",
        "description_en": "Deals unaspected damage with a potency of 200 to target and all enemies nearby it. Increases damage undead enemies take by 25%. Lasts for 60s",
        "fragment": "Forgotten Fragment of Ingenuity"
    },
    {
        "name_en": "Lost Dispel",
        "category": "Detrimental",
        "description_en": "Removes one beneficial status from target",
        "fragment": "Forgotten Fragment of Ingenuity"
    },
    {
        "name_en": "Lost Rend Armor",
        "category": "Detrimental",
        "description_en": "Delivers a jumping attack with a potency of 100.  Increases target's damage taken by 10% for 30s.  Cannot be executed while bound",
        "fragment": "Forgotten Fragment of Contention"
    },
    {
        "name_en": "Lost Seraph Strike",
        "category": "Detrimental",
        "description_en": "Delivers a jumping attack for unaspected damage with a potency of 500. Reduces target's accuracy by 10% for 15s. Grants Cleric Stance to self which reduces healing potency by 60% while increasing damage dealt by 60% for 15s",
        "fragment": "Forgotten Fragment of Divinity"
    },
    {
        "name_en": "Dynamis Dice",
        "category": "Item-Related",
        "description_en": "Place your faith in the goddess Nymeia as she spins the wheel of fate (random effect)",
        "fragment": "Forgotten Fragment of Caprice"
    },
    {
        "name_en": "Resistance Phoenix",
        "category": "Item-Related",
        "description_en": "Resurrects target to a weakened state",
        "fragment": "Forgotten Fragment of Preparation"
    },
    {
        "name_en": "Resistance Reraiser",
        "category": "Item-Related",
        "description_en": "Grants a 70% chance of automatic revival upon KO. Lasts 180m",
        "fragment": "Forgotten Fragment of Care"
    },
    {
        "name_en": "Resistance Potion Kit",
        "category": "Item-Related",
        "description_en": "Restores HP automatically when HP falls below 50% Lasts for 600s. When triggered, there is a 50% chance the effect will end. When under Spirit of the Breathtaker this chance is reduced to 10%",
        "fragment": "Forgotten Fragment of Care"
    },
    {
        "name_en": "Resistance Ether Kit",
        "category": "Item-Related",
        "description_en": "Restores MP automatically when MP falls below 20%. Lasts for 600s. When triggered, there is a 50% chance the effect will end. When under Spirit of the Breathtaker this chance is reduced to 10%",
        "fragment": "Forgotten Fragment of Care"
    },
    {
        "name_en": "Resistance Medikit",
        "category": "Item-Related",
        "description_en": "Removes a single detrimental effect from self. When not suffering from detrimental effects, creates a barrier that protects against most status ailments. The barrier is removed after curing the next status ailment suffered. Lasts for 30m",
        "fragment": "Forgotten Fragment of Compassion"
    },
    {
        "name_en": "Resistance Potion",
        "category": "Item-Related",
        "description_en": "Gradually restore 5,000 potency of HP over 40s",
        "fragment": "Forgotten Fragment of Preparation"
    },
    {
        "name_en": "Essence of the Aetherweaver",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 80%",
        "fragment": "Forgotten Fragment of Skill"
    },
    {
        "name_en": "Essence of the Martialist",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 60%",
        "fragment": "Forgotten Fragment of Skill"
    },
    {
        "name_en": "Essence of the Savior",
        "category": "Item-Related",
        "description_en": "Increases healing potency by 60%",
        "fragment": "Forgotten Fragment of Skill"
    },
    {
        "name_en": "Essence of the Veteran",
        "category": "Item-Related",
        "description_en": "Increases physical defense by 150%, magic defense by 45%, and maximum HP by 60%",
        "fragment": "Forgotten Fragment of Skill"
    },
    {
        "name_en": "Essence of the Platebearer",
        "category": "Item-Related",
        "description_en": "Increases defense by 80% and maximum HP by 45%",
        "fragment": "Forgotten Fragment of Skill"
    },
    {
        "name_en": "Essence of the Guardian",
        "category": "Item-Related",
        "description_en": "Increases defense by 30% and maximum HP by 10%",
        "fragment": "Forgotten Fragment of Awakening"
    },
    {
        "name_en": "Essence of the Ordained",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 20%, healing potency by 25%, and maximum MP by 50%",
        "fragment": "Forgotten Fragment of Awakening"
    },
    {
        "name_en": "Essence of the Skirmisher",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 20% and critical hit rate by 15%",
        "fragment": "Forgotten Fragment of Awakening"
    },
    {
        "name_en": "Essence of the Watcher",
        "category": "Item-Related",
        "description_en": "Reduces maximum HP by 5% while increasing evasion by 40%",
        "fragment": "Forgotten Fragment of Awakening"
    },
    {
        "name_en": "Essence of the Profane",
        "category": "Item-Related",
        "description_en": "Reduces healing potency by 70% while increasing damage dealt by 100%",
        "fragment": "Forgotten Fragment of Awakening"
    },
    {
        "name_en": "Essence of the Irregular",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 90% and damage taken by 200% while reducing maximum HP by 30%",
        "fragment": "Forgotten Fragment of Awakening"
    },
    {
        "name_en": "Essence of the Breathtaker",
        "category": "Item-Related",
        "description_en": "Increases poison resistance and movement speed, including mount speed, and increases evasion by 10%",
        "fragment": "Forgotten Fragment of Awakening"
    },
    {
        "name_en": "Essence of the Bloodsucker",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 40%. Absorb a portion of damage dealt as HP",
        "fragment": "Forgotten Fragment of Superstition"
    },
    {
        "name_en": "Essence of the Beast",
        "category": "Item-Related",
        "description_en": "Increases defense by 50% and maximum HP by 45%. Absorb a portion of damage dealt as HP",
        "fragment": "Forgotten Fragment of Superstition"
    },
    {
        "name_en": "Essence of the Templar",
        "category": "Item-Related",
        "description_en": "Increases defense by 50%, maximum HP by 45%, and damage dealt by 60%",
        "fragment": "Forgotten Fragment of Superstition"
    },
    {
        "name_en": "Deep Essence of the Aetherweaver",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 96%",
        "fragment": "Forgotten Fragment of Mastery"
    },
    {
        "name_en": "Deep Essence of the Martialist",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 72%",
        "fragment": "Forgotten Fragment of Mastery"
    },
    {
        "name_en": "Deep Essence of the Savior",
        "category": "Item-Related",
        "description_en": "Increases healing potency by 72%",
        "fragment": "Forgotten Fragment of Mastery"
    },
    {
        "name_en": "Deep Essence of the Veteran",
        "category": "Item-Related",
        "description_en": "Increases physical defense by 180%, magic defense by 54%, and maximum HP by 72%",
        "fragment": "Forgotten Fragment of Mastery"
    },
    {
        "name_en": "Deep Essence of the Platebearer",
        "category": "Item-Related",
        "description_en": "Increases defense by 96% and maximum HP by 54%",
        "fragment": "Forgotten Fragment of Mastery"
    },
    {
        "name_en": "Deep Essence of the Guardian",
        "category": "Item-Related",
        "description_en": "Increases defense by 36% and maximum HP by 12%",
        "fragment": "Forgotten Fragment of Becoming"
    },
    {
        "name_en": "Deep Essence of the Ordained",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 24%, healing potency by 30%, and maximum MP by 60%",
        "fragment": "Forgotten Fragment of Becoming"
    },
    {
        "name_en": "Deep Essence of the Skirmisher",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 24% and critical hit rate by 18%",
        "fragment": "Forgotten Fragment of Becoming"
    },
    {
        "name_en": "Deep Essence of the Watcher",
        "category": "Item-Related",
        "description_en": "Reduces maximum HP by 3% while increasing evasion by 48%",
        "fragment": "Forgotten Fragment of Becoming"
    },
    {
        "name_en": "Deep Essence of the Profane",
        "category": "Item-Related",
        "description_en": "Reduces healing potency by 70% while increasing damage dealt by 120%",
        "fragment": "Forgotten Fragment of Becoming"
    },
    {
        "name_en": "Deep Essence of the Irregular",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 108% and damage taken by 200% while reducing maximum HP by 30%",
        "fragment": "Forgotten Fragment of Becoming"
    },
    {
        "name_en": "Deep Essence of the Breathtaker",
        "category": "Item-Related",
        "description_en": "Increases poison resistance and movement speed, including mount speed, and increases evasion by 20%",
        "fragment": "Forgotten Fragment of Becoming"
    },
    {
        "name_en": "Deep Essence of the Bloodsucker",
        "category": "Item-Related",
        "description_en": "Increases damage dealt by 48%. Absorb a portion of damage dealt as HP",
        "fragment": "Forgotten Fragment of Transcendence"
    },
    {
        "name_en": "Deep Essence of the Beast",
        "category": "Item-Related",
        "description_en": "Increases defense by 60% and maximum HP by 54%. Absorb a portion of damage dealt as HP",
        "fragment": "Forgotten Fragment of Transcendence"
    },
    {
        "name_en": "Deep Essence of the Templar",
        "category": "Item-Related",
        "description_en": "Increases defense by 60%, maximum HP by 54%, and damage dealt by 72%",
        "fragment": "Forgotten Fragment of Transcendence"
    },
    {
        "name_en": "Pure Essence of the Gambler",
        "category": "Item-Related",
        "description_en": "Increases evasion by 11%, critical hit rate by 77%, and direct hit rate by 77%. ※This action can only be used in Delubrum Reginae.",
        "fragment": "Forgotten Fragment of Deception"
    },
    {
        "name_en": "Pure Essence of the Elder",
        "category": "Item-Related",
        "description_en": "Increases defense by 25%, damage dealt by 50%, and maximum HP by 100%. ※This action can only be used in Delubrum Reginae.",
        "fragment": "Forgotten Fragment of Clarity"
    },
    {
        "name_en": "Pure Essence of the Duelist",
        "category": "Item-Related",
        "description_en": "Increases defense by 60%, damage dealt by 60%, and maximum HP by 81%. ※This action can only be used in Delubrum Reginae.",
        "fragment": "Forgotten Fragment of Contention"
    },
    {
        "name_en": "Pure Essence of the Fiendhunter",
        "category": "Item-Related",
        "description_en": "Increases defense by 60%, damage dealt by 50%, and maximum HP by 81%. ※This action can only be used in Delubrum Reginae.",
        "fragment": "Forgotten Fragment of Finesse"
    },
    {
        "name_en": "Pure Essence of the Indomitable",
        "category": "Item-Related",
        "description_en": "Increases defense by 40%, damage dealt by 72%, and maximum HP by 50%. ※This action can only be used in Delubrum Reginae.",
        "fragment": "Forgotten Fragment of Fortitude"
    },
    {
        "name_en": "Pure Essence of the Divine",
        "category": "Item-Related",
        "description_en": "Increases defense by 25%, damage dealt by 35%, and maximum HP by 100%. ※This action can only be used in Delubrum Reginae.",
        "fragment": "Forgotten Fragment of Divinity"
    }
];
