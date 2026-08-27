export type ThemePreset = {
    primary: string;
    primaryText: string;
    background: string;
    backgroundText: string;
    incomplete: string;
    partial: string;
    complete: string;
    exclude: string;
};

const presetPrimary = (primary: string, primaryText: string) =>
    ({ primary, primaryText });

const presetBackground = (background: string, backgroundText: string) =>
    ({ background, backgroundText });

const presetCompletion = (incomplete: string, partial: string, complete: string, exclude: string) =>
    ({ incomplete, partial, complete, exclude });

export const STANDARD_PRESETS = [
    { // Default
        ...presetPrimary('#446633', '#111111'),
        ...presetBackground('#212121', '#ffffff'),
        ...presetCompletion('#6f0000', '#6f6f00', '#006f00', '#6f6f6f')
    },
    { // Dark
        ...presetPrimary('#335533', '#dddddd'),
        ...presetBackground('#101010', '#dddddd'),
        ...presetCompletion('#7a2020', '#8a7a20', '#3f7a3f', '#666666')
    },
    { // Light
        ...presetPrimary('#447744', '#222222'),
        ...presetBackground('#333333', '#dddddd'),
        ...presetCompletion('#800000', '#808000', '#008000', '#808080')
    },
];

export const PRESETS = [
    { // LoZ
        ...presetPrimary('#cc9944', '#112222'),
        ...presetBackground('#223322', '#eeeedd'),
        ...presetCompletion('#bb6644', '#776644', '#779955', '#555555')
    },
    { // Factorio
        ...presetPrimary('#d47b32', '#171717'),
        ...presetBackground('#292929', '#ded8c9'),
        ...presetCompletion('#78483b', '#c27b32', '#6b8b45', '#66635e')
    },
    { // Souls
        ...presetPrimary('#b09055', '#171717'),
        ...presetBackground('#171717', '#d8d0c0'),
        ...presetCompletion('#bb7744', '#887755', '#778855', '#665566')
    },
    { // Monster Hunter
        ...presetPrimary('#b88a45', '#211b16'),
        ...presetBackground('#29241e', '#ded5c5'),
        ...presetCompletion('#79524a', '#b8783f', '#71845a', '#68635d')
    },

    { // Terraria
        ...presetPrimary('#4488cc', '#ffffff'),
        ...presetBackground('#17202b', '#ddeeee'),
        ...presetCompletion('#aa4444', '#cc8833', '#55aa55', '#667777')
    },
    { // Minecraft
        ...presetPrimary('#5c8f3d', '#ffffff'),
        ...presetBackground('#343434', '#eeeeee'),
        ...presetCompletion('#7c5550', '#b18a45', '#5f963f', '#777777')
    },
    { // Hollow Knight
        ...presetPrimary('#88aabb', '#171717'),
        ...presetBackground('#131313', '#d566d5'),
        ...presetCompletion('#996677', '#556677', '#669988', '#4b4b55')
    },
    { // Skyrim
        ...presetPrimary('#99aaaa', '#161616'),
        ...presetBackground('#202528', '#ddddcc'),
        ...presetCompletion('#775555', '#997744', '#667755', '#556666')
    },

    { // Celeste
        ...presetPrimary('#c26ba3', '#ffffff'),
        ...presetBackground('#27233a', '#eeddff'),
        ...presetCompletion('#995566', '#bb8844', '#669988', '#666677')
    },
    { // Classic
        ...presetPrimary('#777777', '#ffffff'),
        ...presetBackground('#000099', '#eeeeee'),
        ...presetCompletion('#aa1111', '#aaaa11', '#11aa11', '#666666')
    },
    { // Stardew
        ...presetPrimary('#5588bb', '#ffffff'),
        ...presetBackground('#ddc499', '#443322'),
        ...presetCompletion('#aa6050', '#cc9944', '#669955', '#888888')
    },
    { // Pokemon
        ...presetPrimary('#d33b32', '#ffffff'),
        ...presetBackground('#cccccc', '#202020'),
        ...presetCompletion('#b54b45', '#c59635', '#57945b', '#777777')
    },
];
