import React, {useState, useEffect, Component} from 'react';
import styled from 'styled-components';
import treat from '../../img/treat.png';
import addTreat from '../../img/add.png';
import deleteTreat from '../../img/delete.png';

const Container = styled.div`
border: 1px solid black;
min-height: 74px;
max-height: 200px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 311px;
max-width: 500px;
padding: 5px;
`;

const AddButton = styled.img``;

const DeleteButton = styled.img``;

const HeaderCont = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

`;

const TextCont = styled.div``;
const TreatIcono = styled.img``;

const BigCont = styled.div`
`;

const CounterIcon = styled.div`
z-index: 9;
position: absolute;
left: 49%;
top: 50%;

`;

const TreatCont = styled.div`
height: 200px;
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
      if (this.state.count >= 1 ) {
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
              <DeleteButton src={deleteTreat} onClick={this.handleDelete} width="20px"></DeleteButton>
              <TextCont>Treats</TextCont>
              <AddButton src={addTreat} onClick={this.handleAdd} width="20px"></AddButton> 
      </HeaderCont>
      <TreatCont>
        <BigCont>
                  <TreatIcono src={treat} width="130px"></TreatIcono>
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