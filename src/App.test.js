import React from 'react';
import renderer from 'react-test-renderer';
import { render, shallow } from 'enzyme';
import enzymeSerializer from 'enzyme-to-json/serializer';
import App from './App';

expect.addSnapshotSerializer(enzymeSerializer);

it('renders app with react-test-renderer', () => {
    const app = renderer.create(
        <App />
    );

    expect(app).toMatchSnapshot();
});

it('renders app with render enzyme', () => {
    const app = render(
        <App />
    );

    expect(app).toMatchSnapshot();
});

it('renders app with shallow enzyme', () => {
    const app = shallow(
        <App />
    );

    expect(app).toMatchSnapshot();
});
