export const Aesthetician = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.aesthetician`;

    return {
        name: "Aesthetician",
    	storageKey,
        columns: [
    		{ header: 'Hairstyle / Face Paint', key: 'name', },
    		{ header: 'Location', key: 'location', filterable: true },
    		{ header: 'Method of Unlock', key: 'unlock' },
    		{ header: 'Gender', key: 'gender', filterable: true }
    	],
        tasks: [{
            name: "Adventure",
            location: "The Gold Saucer",
            unlock: "Purchase from Modern Aesthetics Saleswoman for 14 MPG",
            gender: "Unisex (Differing Styles)"
        }, {
            name: "Curls",
            location: "The Gold Saucer",
            unlock: "Purchase from Gold Saucer Attendant for 9,600 MPG",
            gender: "Unisex"
        }, {
            name: "Eternal Bonding ",
            location: "MogStation",
            unlock: "Progression through \"The Ties that Bind\" quest for $0-$20 USD (Available on all plans)",
            gender: "Unisex (Differing Styles)"
        }, {
            name: "Fashionably Feathered",
            location: "Wolves' Den",
            unlock: "Purchased from Storm Sergeant - Wolves' Den Provisioner for 18,000 Wolf Marks",
            gender: "Unisex"
        }, {
            name: "Form and Function",
            location: "Eureka Pyros",
            unlock: "Drops from Eureka Pyros",
            gender: "Unisex"
        }, {
            name: "Great Lengths",
            location: "The Gold Saucer",
            unlock: "Purchase from Gold Saucer Attendant for 30,000 MPG",
            gender: "Unisex (Differing Styles)"
        }, {
            name: "Gyr Abanian Plait",
            location: "Random Drop",
            unlock: "Drops from Heaven-on-High",
            gender: "Unisex"
        }, {
            name: "Lexen-tails",
            location: "The Gold Saucer",
            unlock: "Purchase from Gold Saucer Attendant for 50,000 MPG after finishing \"The City of Lost Angels\" & \"The Orbonne Monastery\"",
            gender: "Unisex (Differing Styles)"
        }, {
            name: "Lucian Locks",
            location: "Crossover Questline",
            unlock: "Purchased from Ironworks Vendor for 20,000 MGP after completeing \"Messenger of the Winds\"",
            gender: "Unisex"
        }, {
            name: "Master & Commander",
            location: "MogStation",
            unlock: "Purchase \"Aymeric's Attire\" for $15",
            gender: "Unisex"
        }, {
            name: "Modern Legend",
            location: "The Firmament",
            unlock: "Purchase from Enie for 1,800 Skybuilders' Scrips",
            gender: "Unisex"
        }, {
            name: "Ponytails",
            location: "The Gold Saucer",
            unlock: "Purchase from Gold Saucer Attendant for 8,000 MPG",
            gender: "Unisex"
        }, {
            name: "Pulse - Lightning Hairstyle",
            location: "MogStation",
            unlock: "Purchase \"Lightning's Attire\" or \"Snow's Attire\" for $15",
            gender: "Female Only"
        }, {
            name: "Pulse - Snow's Hairstyle",
            location: "MogStation",
            unlock: "Purchase \"Lightning's Attire\" or \"Snow's Attire\" for $15",
            gender: "Male Only"
        }, {
            name: "Rainmaker",
            location: "Make it Rain 2018",
            unlock: "Purchase from Event NPC for 5,000 MPG",
            gender: "Unisex"
        }, {
            name: "Samsonian Locks",
            location: "Random Drop",
            unlock: "Drops from Palace of the Dead",
            gender: "Unisex"
        }, {
            name: "Scion Special Issue",
            location: "MogStation",
            unlock: "Purchase \"Minfilia's Attire\" for $15",
            gender: "Female Only"
        }, {
            name: "Scion Special Issue II",
            location: "MogStation",
            unlock: "Purchase \"Thancred's Modish Attire\" for $15",
            gender: "Male Only"
        }, {
            name: "Scion Special Issue III",
            location: "MogStation",
            unlock: "Purchase \"Y'shtola Modish Attire\" for $15",
            gender: "Female Only"
        }, {
            name: "Strife",
            location: "Contest",
            unlock: "Art or Costume contests for Fan Festival 2018",
            gender: "Unisex"
        }, {
            name: "Styled for Hire",
            location: "Wolves' Den",
            unlock: "Purchased from Storm Sergeant - Wolves' Den Provisioner for 18,000 Wolf Marks",
            gender: "Unisex"
        }, {
            name: "Bats",
            location: "MogStation",
            unlock: "Purchase Modern Cosmetics: A Wicked Wake for EUR 4.90 or $7 USD",
            gender: "Unisex"
        }, {
            name: "Spiderweb",
            location: "MogStation",
            unlock: "Purchase Modern Cosmetics: A Wicked Wake for EUR 4.90 or $7 USD",
            gender: "Unisex"
        }]
    };
};
