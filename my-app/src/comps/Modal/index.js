import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    border-radius: 15px;
    border: 1px solid black;
`;

const Center = styled.div`
    width: 100%;
    font-size: 20pt;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Options = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const Title = styled.div`
    margin-top: 5px;
`;

const Close = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    left: 10px;
    top: 10px;
    cursor: pointer;
`;

const HR = styled.hr`
    width: 250px;
    border: 1px solid black;
`;

const Modal = ({most, least}) => {

    return <Container>
        <Close src="/X.svg" onClick=""/>
        <Center>
            <Title>Filter By:</Title>
            <Options>
                <div onClick={most}>Most Completed</div>
                <HR/>
                <div onClick={least}>Least Completed</div>
            </Options>
        </Center>
    </Container>
}

Modal.defaultProps = {
    most: "",
    least: ""
}
    
export default Modal;