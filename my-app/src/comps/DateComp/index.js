import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const LArrow = styled.div``;

const RArrow = styled.div``;

const DateComp = () => {
    return <Container>
        <LArrow>⪡</LArrow>
        <Date> 28 Jan 2021 </Date>
        <RArrow>⪢</RArrow>
    </Container>
}



DateComp.defaultProps = {

}
    
export default DateComp;