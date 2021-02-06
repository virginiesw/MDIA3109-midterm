import React, {useState} from 'react';
import styled from 'styled-components';
import close from '../../img/close.png';

const Container = styled.div`
// display: flex;
// align-items: center;
// flex-direction: column-reverse;
position: relative;
margin-right: 30px;

.open {
    display: none;
}

.open.open {
    display: block;
}
`;

const AddButton = styled.div`
min-width: 340px;
max-width: 500px;
padding: 0.2%;
min-height: 50px;
max-height: 100px;
background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
display: flex;
align-items: center;
justify-content: center;
// background-color: white;
cursor: pointer;

:hover {
    filter: drop-shadow(0px 0px 1px #999999);
  }
`;

const TextLine = styled.div`
height: 2px;
width: 70%;
background-color: black;
margin-top: -5px;
margin-bottom: -5px;
`;

const MenuText = styled.div`
font-size: 22px;
cursor: pointer;
`;

const AddMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
min-height: 235px;
max-height: 235px;
min-width: 367px;
max-width: 400px;
border: 1px solid black;
border-radius: 10px;
box-shadow: 0px -2px 5px #565656;
padding-top: 20px;
padding-bottom: 20px;
margin-bottom: -10px;
position: relative;
background-color: white;
margin-left: 15px;
`;

const CloseIcon = styled.img`
position: absolute;
top: 0;
left: 0;
margin: 10px;
cursor: pointer;

:hover {
    filter: drop-shadow(0px 0px 1px #999999);
  }
`;

const IconCont = styled.div`
z-index: 10;
position: absolute;
bottom: -10px;
margin-left: -30px;
`;


// class AddItem extends React.Component {

//     state = { showing: false };

//     render() {
//         const { showing} = this.state;
//         const [meal, setMeal] = this.state("")
//         const {handleBreakfast, handleLunch, handleDinner, handleTreat, meal} = this.props;

//         return ( <Container>
//                     <AddButton onClick={() => this.setState({ showing: !showing })}>Add Item +</AddButton>          
//                 { showing 
//                     ?    
//                     <IconCont>
//                             <AddMenu>
                         
//                                 <CloseIcon onClick={() => this.setState({ showing: !showing })} src={close} width="20px"></CloseIcon>
                
//                             <MenuText onClick={this.props.handleBreakfast} setMeal="breakfast">Breakfast</MenuText>
//                             <TextLine></TextLine>
//                             <MenuText onClick={this.props.handleLunch}  setMeal="lunch">Lunch</MenuText>
//                             <TextLine></TextLine>
//                             <MenuText onClick={this.props.handleDinner}  setMeal="dinner">Dinner</MenuText>
//                             <TextLine></TextLine>
//                             <MenuText onClick={this.props.handleTreat}>Treat</MenuText>
//                         </AddMenu>  
//                     </IconCont>
//                     : null
//                 }      
//         </Container>  
//         )
   
//     }   
// }

const AddItem = ({handleAdd}) =>{


    const [open, setOpen] = useState(true);

    const [mealname, setMealname] = useState("");

    const handleBreakfast = (event) => {
        setMealname(event.target.textContent);
        console.log("meal name 1", mealname)
    }

   const handleLunch = (event) => {
        setMealname(event.target.textContent);
        console.log("meal name 1", mealname)
    }

    const handleDinner = (event) => {
        setMealname(event.target.textContent);
        console.log("meal name 1", mealname)
    }

    const handleTreat = (event) => {
        setMealname(event.target.textContent);
        console.log("meal name 1", mealname)
    }



    return <Container>
         <AddButton onClick={() => {
                   setOpen(!open);
              }} >Add Item +</AddButton>  
         <div className={open ? "open" : null}>
            <IconCont onClick={handleAdd(mealname)}>
                <AddMenu>
                <CloseIcon onClick={() => {
                   setOpen(!open);
              }}
              src={close} width="20px">
               
              </CloseIcon>
                <MenuText onClick={event => handleBreakfast(event)}>Breakfast</MenuText>
                <TextLine></TextLine>
                <MenuText onClick={event => handleLunch(event)} >Lunch</MenuText>
                <TextLine></TextLine>
                <MenuText onClick={event => handleDinner(event)}>Dinner</MenuText>
                <TextLine></TextLine>
                <MenuText onClick={event => handleTreat(event)}>Treat</MenuText>
            </AddMenu>  
        </IconCont>    
         </div>
    
    </Container>
    
}



AddItem.defaultProps = {
        handleAdd:()=>{}
    // HandleSnack:()=>{},
    // meal: "dinner",

    }

export default AddItem;