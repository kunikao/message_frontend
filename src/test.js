import React from 'react';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

test('renders correctly', () => {
const component = renderer.create(<HelloWorld />);
const tree = component.toJSON();
expect(tree).toMatchSnapshot();
});