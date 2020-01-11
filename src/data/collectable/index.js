module.exports = {
    name: 'Collectable',
    subGroups:[
        require('./aesthetician.js'),
        require('./barding.js'),

        require('./emote.js'),
        require('./minion.js'),
        require('./mount.js'),
        { name: 'Orchestrion' },
        require('./tripletriad-card.js'),
        require('./tripletriad-opponent.js'),
    ]
};
