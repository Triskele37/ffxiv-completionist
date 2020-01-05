module.exports = {
    name: 'Black Shroud',
    subGroups: [
        require('./central-shroud.js'),
        require('./north-shroud.js'),
        require('./east-shroud.js'),
        require('./south-shroud.js')
    ],
    tasks: [
        { name: 'Steel Reign' }
    ]
};
