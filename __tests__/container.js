import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Grid from '../src/grid';

test('it works', () => {
	const tree = renderer.create(<Grid />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree).toHaveStyleRule('display', 'grid');
});

test('it works - templateColumns', () => {
	const tree = renderer
		.create(<Grid templateColumns="repeat(3,1fr)" />)
		.toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree).toHaveStyleRule('grid-template-columns', 'repeat(3,1fr)');
});

test('it works - grid-gap', () => {
	const tree = renderer.create(<Grid gap="10px" />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree).toHaveStyleRule('grid-gap', '10px');
});

test('it works - grid-auto-rows', () => {
	const tree = renderer.create(<Grid autoRows="minmax(100px,auto)" />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree).toHaveStyleRule('grid-auto-rows', 'minmax(100px,auto)');
});
