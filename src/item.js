import styled from 'styled-components';
import is from 'styled-is';

const GridItem = styled.div`
  ${is('column')`
    grid-column: ${props => props.column}`};
  ${is('row')`
    grid-row: ${props => props.row}`};
`;

export default GridItem;
