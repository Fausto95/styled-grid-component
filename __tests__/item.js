import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import GridItem from '../src/item';

test('it works grid-column - 1/3', () => {
	const tree = renderer.create(<GridItem column="1/3" />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree).toHaveStyleRule('grid-column', '1/3');
});

test('it works grid-row - 1', () => {
	const tree = renderer.create(<GridItem row="1" />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree).toHaveStyleRule('grid-row', '1');
});
