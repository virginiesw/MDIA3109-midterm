import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import AddItem from '../../comps/AddItem';
import Indicator from '../../comps/indicator'; 
import DateComp from '../../comps/DateComp';
import FilterComp from '../../comps/FilterComp';

const meals = require("../../mealData.json");


const Container = styled.div`
background-color: #CCD9DF;
width: 367px;
height: 594px;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
font-family: 'Roboto', sans-serif;

.filterComp {
    position: absolute;
    right: 0;
}


.title {
    font-size: 30px;
    margin-top: 10px;
    font-weight: bold;
}

.dateComp {
    margin-top: 15px;
    margin-bottom: 10px;
}


.addComp {
 margin-left: 31px;
 bottom: 10px;
 position: absolute;
 font-weight: bold;
}
`;


const MainPage = () => {


    const [food, setFood] = useState([]); //for getting food array 
    const [sortFoodLeast, setSortFoodLeast] = useState(true); //for filter food by least complete
    const [sortFoodMost, setSortFoodMost] = useState(true); //for filtering food by most complete
    const [sorted, setSorted] = useState(true);
    const [currentDate, setCurrentDate] = useState(moment().format("DD/MM/YYYY")); //for filtering by date
    const [num, setNum] = useState(0) //used in junction with currentDate

    const dateForward = () => { //this moves the date forward one, will be used with filtering by date
           setNum(
               num +1
           )
           console.log("current number", num)
           setCurrentDate(
            moment().add(num +1, "days").format("DD/MM/YYYY")
           )
        };

    const dateBack = () => { //this moves current date back by one, will be used with filtering by date
           setNum(
               num -1
           )
           console.log("current number", num)
           setCurrentDate(
            moment().add(num -1, "days").format("DD/MM/YYYY")
           )
        };


    const filterLeast = () => { //this filters by meal of least completion 
        const copy = food
        if (sortFoodLeast) {
            copy.sort(sortLeastComplete)    
        }  
        console.log("food filtered least", copy)
        setSortFoodLeast(!sortFoodLeast)
        setFood(copy)
    }

    const filterMost = () => { //this filters by meal of most completetion 
        const copy = food
        if (sortFoodMost) {
            copy.sort(sortMostComplete)    
        }  
        console.log("food filtered most", copy)
        setSortFoodMost(!sortFoodMost)
        setFood(copy)
    }

    const GetFood = async() =>{ //this gets food from array
        var resp = meals //this will be a get request once we hve the API end points
        setFood(resp) 
        console.log("get food", resp)
    }

    useEffect(()=>{ //this loads the food from the array on page load. 
        GetFood()
    }, []);

    const filterByDate = () => {
    const copy = food
         var filtered = copy.filter((o, i)=>{
        return o.date.includes(currentDate);
    })
    setFood(filtered)
    console.log("current date filtered", filtered);
    }

    // const filterByDate = () => { //this filters by meal of most completetion 
    //     const copy = food
    //     if (sortFoodDate) {
    //         copy.filter((o, i)=>{
    //             return o.date.includes(currentDate);
    //         }) 
    //     }  
    //     console.log("food sorted", copy)
    //     setSortFoodMost(!sortFoodDate)
    //     // setFood(copy)
    // }


    // const filterFoodByDate = () => {
    //     const foodSortedByDate = food;
    //     console.log("all food", foodSortedByDate)
    //     if (sortFoodDate) {
    //        var sorted = foodSortedByDate.filter((o, i)=>{
    //     return o.date.includes(currentDate);
    //     }) 
    //     console.log("sorted", sorted)
    //     }
    // setFood(foodSortedByDate);
    // setSortFoodDate(!sortFoodDate);
    // }
 

// const showFood = () =>{
//     setFood(filterDateBack)
// }



// console.log("filtering by dy", filterDateBack)


    // var foodFilter = meals.filter((o, i)=>{
    //     return o.date.includes("01/20/20") //later on include moment, pass that string into this to filter by date
    // })

    // const AlertBreakfast= () => {
    //     alert("clicked breakfast");
    // }

    // const AlertLunch= () => {
    //     alert("clicked lunch")
    // }

    // const AlertDinner= () => {
    //     alert("clicked dinner")
    // }

    // const AlertTreat= () => {
    // }


    return <Container>
       
        
    

        <div className="title" onClick={filterByDate}>Feeding Schedule</div>
        <div className="dateComp"><DateComp handleBack={dateBack} handleForward={dateForward} /></div>
        <div className="filterComp"><FilterComp filterbyMost={filterMost} filterbyLeast={filterLeast} fsizeT="20px" /></div>
        <div>
        {food.map(o=>{
        return <Indicator  
             text={o.mComplete}> 
         </Indicator>})}
 
        </div>
        
        <div className="addComp"><AddItem/></div> 
        
    </Container>
}


export default MainPage;

function sortMostComplete(a,b){
    // if (a.mComplete > b.mComplete){
    //     return 1
    // } else if (a.mComplete < b.mComplete){
    //     return -1
    // } else {
    //     return 0
    // }
    return b.mComplete - a.mComplete
}
function sortLeastComplete(a,b){
    // if (a.mComplete > b.mComplete){
    //     return -1
    // } else if (a.mComplete < b.mComplete){
    //     return 1
    // } else {
    //     return 0
    // }
    return a.mComplete - b.mComplete
}
