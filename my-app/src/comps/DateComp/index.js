import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
display:flex;
`;

const LArrow = styled.div``;

const RArrow = styled.div``;

const Date = styled.div`
margin-right: 20px;
margin-left: 20px;
`;

const DateComp = () => {
    
    var currentDate = moment().format("DD/MM/YYYY");

    const GoBack = () => {
        const newDate = moment().subtract(1, "days").format("DD-MM-YYYY");
        console.log(newDate)
        currentDate = newDate;
        return {currentDate};
    }
    // var startdate = moment().subtract(1, "days").format("DD-MM-YYYY");


    return <Container>
        <LArrow onClick={GoBack}>⪡</LArrow>
        <Date> {currentDate}</Date>
        <RArrow>⪢</RArrow>
    </Container>
}



DateComp.defaultProps = {

}
    
export default DateComp;