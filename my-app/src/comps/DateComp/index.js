import React, {Component} from 'react';
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
        console.log("Count P", this.state.countP)
        this.setState((prevState, { count }) => ({
         countP: prevState.countP - 1
       }));

        this.setState((prevState, {count}) => ({
            currentDate: moment().add(this.state.countP -1, "days").format("DD/MM/YYYY")
        }));
      };

      

    render() {
      const {handleBack, handleForward} = this.props
      return <Container>
        <div onClick={handleBack}>
          <LArrow onClick={this.goBack}>⪡</LArrow>
        </div>
        <Date>{this.state.currentDate}</Date>
        <div onClick={handleForward}>
          <RArrow onClick={this.goForward}>⪢</RArrow>
        </div> 
      </Container>
    }
  }
  
  DateComp.defaultProps = {
      handleBack:()=>{},
      handleForward:()=>{},
  }

  export default DateComp;