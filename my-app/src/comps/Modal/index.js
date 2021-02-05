import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    min-width: 367px;
    max-width: 500px;
    min-height: 168px;
    max-height: 300px;
    border-radius: 15px;
    border: 1px solid black;
    margin-top: 50px;
    background-color: white;
`;

const Center = styled.div`
    width: 100%;
    margin-left: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Options = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    margin-top: 5px;
    font-size: 24px;
    margin-bottom: 20px;
`;

const Close = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    left: 10px;
    top: 10px;
    cursor: pointer;

    :hover {
        filter: drop-shadow(0px 0px 1px #999999);
      }
`;

const HR = styled.hr`
    width: 250px;
    border: 1px solid black;
`;

const TextCont = styled.div`
font-size: 20px;
cursor: pointer;
`;

const Modal = ({most, least, handleClose, clickLeast, clickMost}) => {

    return <Container>
        <Close src="/X.svg" onClick={handleClose}/>
        <Center>
            <Title>Filter By:</Title>
            <Options>
                <TextCont onClick={() => { most(); clickMost();}}>Most Completed</TextCont>
                <HR/>
                <TextCont onClick={() => { least(); clickLeast();}}>Least Completed</TextCont>
            </Options>
        </Center>
    </Container>
}

Modal.defaultProps = {
    most:()=>{},
    least:()=>{},
    clickMost:()=>{},
    clickLeast:()=>{},
    handleClose:()=>{}
}
    
export default Modal;