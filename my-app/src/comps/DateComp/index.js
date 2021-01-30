import React, {useState, useEffect, Component} from 'react';
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

// const DateComp = () => {
    
//     var currentDate = moment().format("DD/MM/YYYY");
//     const [startdate, setStart] = useState("");
//     const [counter, setCounter] = useState(0);

//     const GoBack = () => {
        
//         const num = + 1;
//         console.log(num)
//         setCounter(num)
//         const startdate = moment().subtract(counter, "days").format("DD-MM-YYYY");
//         console.log(startdate)
//         setStart(startdate)
//     }
    
//     // var startdate = moment().subtract(1, "days").format("DD-MM-YYYY");


//     return <Container>
//         <LArrow onClick={GoBack}>⪡</LArrow>
//         <Date> {currentDate} {startdate}</Date>
//         <RArrow>⪢</RArrow>
//     </Container>
// }



// DateComp.defaultProps = {

// }
    
// export default DateComp;

class DateComp extends Component {
    state = {
      countP: 0,
      currentDate: moment().format("DD/MM/YYYY"),
    };
    goForward = () => {
      console.log("Count P", this.state.countP)
         this.setState((prevState, { count }) => ({
          countP: prevState.countP + 1
        }));
        this.setState((prevState, {count}) => ({
            currentDate: moment().add(this.state.countP +1, "days").format("DD/MM/YYYY")
        }));
      };
      goBack = () => {
        // console.log("countN", this.state.countN)
        //    this.setState((prevState, { count }) => ({
        //   countN: prevState.countN - 1
        // }));

        console.log("Count P", this.state.countP)
        this.setState((prevState, { count }) => ({
         countP: prevState.countP - 1
       }));

        this.setState((prevState, {count}) => ({
            currentDate: moment().add(this.state.countP -1, "days").format("DD/MM/YYYY")
        }));
      };

    //   handleForward = () => {

    //   };

    //   handleBack = () => {

    //   }
    render() {
        const { handleBack, handleForward } = this.state;
      return <Container>
       <LArrow onClick={handleBack} onClick={this.goBack}>⪡</LArrow>
        <Date>{this.state.currentDate}</Date>
        <RArrow onClick={handleForward} onClick={this.goForward}>⪢</RArrow>
      </Container>
    }
  }
  
  DateComp.defaultProps = {
      handleBack:()=>{},
      handleForward:()=>{},
  }

  export default DateComp;