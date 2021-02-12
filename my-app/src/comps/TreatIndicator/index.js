import React, { useState, useEffect, Component } from 'react';
import styled from 'styled-components';
import treat from '../../img/treat.png';
import addTreat from '../../img/add.png';
import deleteTreat from '../../img/delete.png';

const Container = styled.div`
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

  :hover {
    filter: drop-shadow(0px 0px 5px #ff9e44);
  }
`;

const DeleteButton = styled.img`
cursor: pointer;

  :hover {
    filter: drop-shadow(1px 1px 5px #ff7c03);
  }
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

const TreatIndicator = ({amount, clickTreatsLess, clickTreatsMore, id, a, onClick}) => {
  return <Container  onClick={() =>
    onClick(id, a)}> {id}  {a}
         <HeaderCont>
           <DeleteButton src={deleteTreat} onClick={clickTreatsLess} width="30px" height="30px"></DeleteButton>
           <h2>Treats</h2>
           <AddButton src={addTreat} onClick={clickTreatsMore} width="30px" height="30px"></AddButton>
         </HeaderCont>
         <TreatCont>
           <BigCont>
           <TreatIcono src={treat} width="150px"></TreatIcono>
           </BigCont>
           <div>
             <CounterIcon>
               {amount}
             </CounterIcon>
           </div>
  
        </TreatCont>
      </Container>
}

// class TreatIndicator extends Component {
//   state = {
//     count: 0
//   };
//   clickTreatsMore = () => {
//     console.log(this.state.count)
//     this.setState((prevState, { count }) => ({
//       count: prevState.count + 1
//     }));

//   };
//   clickTreatsLess = () => {
//     console.log(this.state.count)
//     if (this.state.count >= 1) {
//       this.setState((prevState, { count }) => ({
//         count: prevState.count - 1
//       }));
//     }
//     else {
//       (this.state.count = 0)
//     }
//   };
//   render() {

//     const {clickTreatsLess, clickTreatsMore, amount} = this.props;

//     return <Container>
//       <HeaderCont>
//         <DeleteButton src={deleteTreat} onClick={() => {clickTreatsLess(amount)}} width="30px" height="30px"></DeleteButton>
//         <h2>Treats</h2>
//         <AddButton src={addTreat} onClick={() => {clickTreatsMore(amount)}} width="30px" height="30px"></AddButton>
//       </HeaderCont>
//       <TreatCont>
//         <BigCont>
//           <TreatIcono src={treat} width="150px"></TreatIcono>
//         </BigCont>
//         <div>
//           <CounterIcon>
//             {this.state.amount}
//           </CounterIcon>
//         </div>

//       </TreatCont>
//     </Container>


//   }
// }

TreatIndicator.defaultProps = {
  amount: 0,
  clickTreatsLess: ()=>{},
  clickTreatsMore: ()=>{},
  id: null,
  a: null,
}

export default TreatIndicator;