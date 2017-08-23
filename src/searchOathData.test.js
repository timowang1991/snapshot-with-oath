import searchOathData from './searchOathData';

it('should return name starting with T', () => {
    const oath = searchOathData('T');
    
    expect(oath).toMatchSnapshot();
});