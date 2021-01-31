import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const Container = styled.div`
position: relative;
display: flex;
`;

const Button = styled.div`
position: absolute;
right: 10px;
top: 10px;
`;

const FilterButton = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;


class FilterComp extends React.Component {

    state = { showing: false };

    render() {
        const {showing} = this.state;
        return ( <Container>
                    <Button onClick={() => this.setState({ showing: !showing})}>
                        <FilterButton src="/filter.svg" />
                    </Button>         
                { showing 
                    ?    
                          <Modal handleClose={() => this.setState({ showing: !showing})}/>
                    : null
                }      
        </Container>  
        )
   
    }    
}

FilterComp.defaultProps = {

}

export default FilterComp;