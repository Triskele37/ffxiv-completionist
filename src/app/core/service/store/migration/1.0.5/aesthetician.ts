import { ChangeStore } from '@service/store/migration/ChangeStore';

const AESTHETICIAN = 'overall.character.character.aesthetician';

/** Aesthetician changes from Generated Resources
 * */
export function migrateAesthetician(store: ChangeStore): void {
    store.deleteTask(AESTHETICIAN, 15);

    store.safeChangeKeys(AESTHETICIAN, [
        [0, 286], // Adventure
        [1, 72], // Controlled Chaos
        [2, 287], // Curls
        [3, 66], // Early to Rise
        [4, 228], // Eternal Bonding
        [5, 268], // Fashionably Feathered
        [6, 397], // Form and Function
        [7, 413], // Great Lengths
        [8, 267], // Gyr Abanian Plait
        [9, 230], // Lexen-tails
        [10, 231], // Lucian Locks
        [11, 338], // Master & Commander
        [12, 79], // Modern Legend
        [13, 243], // Ponytails
        [14, 303], // Pulse - Lightning/Snow Hairstyle
        [16, 337], // Rainmaker
        [17, 280], // Saintly Style
        [18, 302], // Samsonian Locks
        [19, 290], // Scion Special Issue
        [20, 321], // Scion Special Issue II
        [21, 322], // Scion Special Issue III
        [22, 67], // Sharlayan Studies
        [23, 399], // Strife
        [24, 398], // Styled for Hire
        [25, 281], // Wind Caller
        [26, 227], // A Wicked Wake
        [28, 421], // Scanning For Style
        [29, 420], // Battle-ready Bobs
        [30, 419], // Both Ways
        [31, 239], // Clowning Around
        [32, 441], // Tall Tails
        [33, 442], // Practical Ponytails
        [34, 435], // Liberating Locks
        [35, 447], // Sharlayan Rebellion
        [36, 448], // A Close Shave
        [37, 460], // Ambitious Ends
        [38, 476], // The Bold and the Braid
    ]);
}
