const oathDb = {
    Arvin: {
        image: require('./assets/arvin.png'),
        oath: ['Workout every night', 'I hate reflection']
    },
    Cloe: {
        image: require('./assets/cloe.jpg'),
        oath: ['Shut Timo up']
    },
    John: {
        image: require('./assets/john.png'),
        oath: ['Why so serious?']
    },
    Kate: {
        oath: ['Work from remote']
    },
    Sonys: {
        image: require('./assets/sonys.jpg'),
        oath: ['Youcard is MINE!']
    },
    Timo: {
        image: require('./assets/timo.jpg'),
        oath: ['Listen to TA', 'Must Be Crazy']
    },
    'Tim Armstrong': {
        image: require('./assets/tim-armstrong.jpg'),
        oath: ['Give up!', 'Take private jets']
    },
    'Tsai Ing-wen': {
        image: require('./assets/tsai-ing-wen.jpg'),
        oath: ['No more blackouts']
    }
};

export default (query) => {
    if (!query) {
        return Object.keys(oathDb).map((name) => ({ name, info: oathDb[name] }));
    }
    const names = Object.keys(oathDb).filter((personName) =>
        personName.toLowerCase().indexOf(query) === 0
    );
    return names.map((name) => ({ name, info: oathDb[name] }));
}