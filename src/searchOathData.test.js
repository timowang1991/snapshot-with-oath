import searchOathData from './searchOathData';

it('should return name starting with T', () => {
    const oath = searchOathData('T');
    
    expect(oath).toMatchSnapshot();
});

it('should return name with sequences of Timo', () => {
    ['T', 'Ti', 'Timo'].forEach((query) => {
        const oath = searchOathData(query);

        expect(oath).toMatchSnapshot();
    });
});
