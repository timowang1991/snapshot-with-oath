import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders div without crashing', () => {
  const div = renderer.create(
    <div className="12345" />
  );
  
  expect(div).toMatchSnapshot();
});

it('renders app without crashing', () => {
  const app = renderer.create(
    <App />
  );

  expect(app).toMatchSnapshot();
});