# Styled Grid Component

Grid Element for not writing any more custom grid styles because foda-se!

Notice that this component was inspired by Flex - Element -> https://www.npmjs.com/package/styled-flex-component

Test it: https://codesandbox.io/s/m7rzqw40wp

## Install

```
yarn add styled-grid-component
or
npm i styled-grid-component
```

## Usage

```jsx
import React from 'react';
import { Grid, GridItem } from 'styled-grid-component';

export default () => (
  <Grid
    width="100%"
    height="100vh"
    templateColumns="repeat(3, 1fr)"
    gap="10px"
    autoRows="minmax(100px, auto)"
  >
    <GridItem column="1 / 3" row="1">
      <h1>Hello</h1>
    </GridItem>
    <GridItem column="2 / 4" row="1 / 3">
      <h1>World!</h1>
    </GridItem>
  </Grid>
);
```

## Props

All props without description are just true or false values and take no arguments

#### Grid Wrapper

* width -> Sets the witdh
* height -> Sets the height
* templateColumns -> Sets the grid-template-columns
* gap -> Sets the grid-gap
* rowGap -> Sets the grid-row-gap
* autoRows -> Sets the grid-auto-rows

#### GridItem

* column -> Sets the grid-row
* row -> Sets the grid-row

# License

MIT
