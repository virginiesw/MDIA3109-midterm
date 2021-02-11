import React, { useState, useEffect, Component } from 'react';
import styled from 'styled-components';
import treat from '../../img/treat.png';
import addTreat from '../../img/add.png';
import deleteTreat from '../../img/delete.png';

const Container = styled.div`
border: 1px solid black;
min-height: 50px;
max-height: 150px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #ffffff;
width: 340px;
margin: 10px;
padding: 5px;
`;

const AddButton = styled.img`
cursor: pointer;
`;

const DeleteButton = styled.img`
cursor: pointer;
`;

const HeaderCont = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;

const TreatIcono = styled.img`
padding-bottom: 10px;
`;

const BigCont = styled.div`
`;

const CounterIcon = styled.div`
z-index: 9;
position: absolute;
left: 49%;
top: 56%;

`;

const TreatCont = styled.div`
height: 50px;
min-width: 311px;
max-width: 500px;

display: flex;
align-items: center;
justify-content: center;
`;


class TreatIndicator extends Component {
  state = {
    count: 0
  };
  handleAdd = () => {
    console.log(this.state.count)
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));

  };
  handleDelete = () => {
    console.log(this.state.count)
    if (this.state.count >= 1) {
      this.setState((prevState, { count }) => ({
        count: prevState.count - 1
      }));
    }
    else {
      (this.state.count = 0)
    }
  };
  render() {
    return <Container>
      <HeaderCont>
        <DeleteButton src={deleteTreat} onClick={this.handleDelete} width="30px" height="30px"></DeleteButton>
        <h2>Treats</h2>
        <AddButton src={addTreat} onClick={this.handleAdd} width="30px" height="30px"></AddButton>
      </HeaderCont>
      <TreatCont>
        <BigCont>
          <TreatIcono src={treat} width="150px"></TreatIcono>
        </BigCont>
        <div>
          <CounterIcon>
            {this.state.count}
          </CounterIcon>
        </div>

      </TreatCont>
    </Container>


  }
}

export default TreatIndicator;