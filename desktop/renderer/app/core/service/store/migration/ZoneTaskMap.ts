export type ZoneTaskMap = Partial<Record<ZoneKeys, number[]>>;

export type ZoneKeys =
    | 'limsa-lominsa'
    | 'eastern-la-noscea'
    | 'lower-la-noscea'
    | 'western-la-noscea'

    | 'uldah'
    | 'eastern-thanalan'
    | 'northern-thanalan'
    | 'southern-thanalan'
    | 'western-thanalan'

    | 'gridania'
    | 'central-shroud'
    | 'east-shroud'
    | 'south-shroud'

    | 'coerthas-central-highlands'
    | 'mor-dhona'

    // HW
    | 'ishgard'
    | 'coerthas-western-highlands'
    | 'the-churning-mists'
    | 'the-dravanian-forelands'
    | 'the-dravanian-hinterlands'
    | 'the-sea-of-clouds'

    // SB
    | 'kugane'
    | 'the-azim-steppe'
    | 'the-fringes'
    | 'the-peaks'
    | 'the-ruby-sea'
    | 'yanxia'

    // ShB
    | 'the-crystarium'
    | 'amh-araeng'
    | 'il-mheg'
    | 'kholusia'
    | 'lakeland'
    | 'the-raktika-greatwood'

    // EW
    | 'old-sharlayan'
    | 'garlemald'
    | 'labyrinthos'
    | 'thavnair'

    // DT
    | 'tuliyollal'
    | 'kozamauka'
    | 'shaaloani'
    | 'urqopacha'
    | 'yak-tel';
