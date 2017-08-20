const oathDb = {
    Timo: {
        image: require('./assets/oath_timowang_01_2043.jpg'),
        oath: ["Listen to TA", "Must Be Crazy", "Go to Google!"]
    },
    "Tim Armstrong": {
        oath: ["Never give up  —  2016"]
    }
};

export default (query) => {
    if (!query) {
        return [];
    }
    const names = Object.keys(oathDb).filter((personName) =>
        personName.toLowerCase().indexOf(query) === 0
    );
    return names.map((name) => ({ name, info: oathDb[name] }));
}