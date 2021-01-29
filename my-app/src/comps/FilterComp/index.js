import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const Container = styled.div``;

const Button = styled.div``;

const FilterButton = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const FilterComp = () => {

    return <Container>
        <Button>
            <FilterButton src="/filter.svg" />
        </Button>
        <Modal />
    </Container>
}

FilterComp.defaultProps = {

}
    
export default FilterComp;