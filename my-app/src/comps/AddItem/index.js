import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column-reverse;
justify-content: center;
`;

const AddButton = styled.div`
min-width: 50px;
max-width: 200px;
padding: 0.2%;
min-height: 50px;
max-height: 100px;
background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
display: flex;
align-items: center;
justify-content: center;
`;

const TextLine = styled.div`
height: 1px;
width: 70%;
background-color: black;
`;

const MenuText = styled.div``;

const AddMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
min-height: 300px;
min-width: 50px;
max-width:200px;
border: 1px solid black;
border-radius: 10px;
box-shadow: 0px -2px 5px #565656;
`;

// const AddItem = ({HandleAdd}) => {

   
        

//     return <Container id="results" className="search-results">
//              <AddButton onClick={HandleAdd}>
//             Add Item +
//         </AddButton>
//         <AddMenu>
//                 <MenuText>Breakfast</MenuText>
//                 <TextLine></TextLine>
//                 <MenuText>Lunch</MenuText>
//                 <TextLine></TextLine>
//                 <MenuText>Dinner</MenuText>
//                 <TextLine></TextLine>
//                 <MenuText>Treats</MenuText>
//             </AddMenu>  
//     </Container>
// }

// AddItem.defaultProps = {
//     HandleAdd:()=>{},
// }

// export default AddItem;

class AddItem extends React.Component {

    state = { showing: false };

    render() {
        const { showing, HandleAdd } = this.state;
        return (
            <div>
                <Container>
                    <AddButton onClick={HandleAdd} onClick={() => this.setState({ showing: !showing })}>Add Item+</AddButton>
                </Container>
                { showing 
                    ?    <AddMenu onClick={() => this.setState({ showing: !showing })}>
                            <MenuText>Breakfast</MenuText>
                            <TextLine></TextLine>
                            <MenuText>Lunch</MenuText>
                            <TextLine></TextLine>
                            <MenuText>Dinner</MenuText>
                            <TextLine></TextLine>
                            <MenuText>Treats</MenuText>
                </AddMenu>  
                    : null
                }
            </div>  
        )
        AddItem.defaultProps = {
    HandleAdd:()=>{},
}
    }
}
export default AddItem;