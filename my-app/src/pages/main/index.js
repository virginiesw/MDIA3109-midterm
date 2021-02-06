import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import AddItem from '../../comps/AddItem';
import Indicator from '../../comps/indicator';
import DateComp from '../../comps/DateComp';
import FilterComp from '../../comps/FilterComp';

// const meals = require("../../mealData.json");


const Container = styled.div`
background-color: #CCD9DF;
width: 367px;
height: 620px;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
font-family: 'Roboto', sans-serif;

.filterComp {
    position: absolute;
    right: 0;
    z-index: 10;
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
 bottom: 15px;
 position: absolute;
 font-weight: bold;
}

.food {
    overflow: scroll;
    height: 440px;
    white-space: nowrap;
}

`;

const meals = [
    {
        "id": "1",
        "meal": "Breakfast",
        "treatNum": "6",
        "perc": 75,
        "date": "31/01/2021",
        "time": "6"
    },
    {
        "id": "2",
        "meal": "Lunch",
        "perc": 25,
        "treatNum": "6",
        "date": "31/01/2021",
        "time": "9"
    },
    {
        "id": "3",
        "meal": "Dinner",
        "perc": 100,
        "treatNum": "6",
        "date": "30/01/2021",
        "time": "20"
    },
    {
        "id": "4",
        "meal": "Breakfast",
        "perc": 75,
        "treatNum": "6",
        "date": "30/01/2021",
        "time": "7"
    },
    {
        "id": "5",
        "meal": "Lunch",
        "perc": 25,
        "treatNum": "6",
        "date": "01/02/2021",
        "time": "9"
    }
]


const MainPage = () => {



    const [food, setFood] = useState([]); //for getting food array 
    const [sortFoodLeast, setSortFoodLeast] = useState(true); //for filter food by least complete
    const [sortFoodMost, setSortFoodMost] = useState(true); //for filtering food by most complete
    const [sorted, setSorted] = useState(true);
    const [selectedId, setSelected] = useState(null);
    const [currentDate, setCurrentDate] = useState(moment().format("DD/MM/YYYY")); //for filtering by date
    const [num, setNum] = useState(0) //used in junction with currentDate

    const dateForward = () => { //this moves the date forward one, will be used with filtering by date
        setNum(
            num + 1
        )
        console.log("current number", num)
        setCurrentDate(
            moment().add(num + 1, "days").format("DD/MM/YYYY")
        )
        console.log(food)
    };

    const dateBack = () => { //this moves current date back by one, will be used with filtering by date
        setNum(
            num - 1
        )
        console.log("current number", num)
        setCurrentDate(
            moment().add(num - 1, "days").format("DD/MM/YYYY")
        )
    };


    const filterLeast = () => { //this filters by meal of least perc 
        const copy = food
        if (sortFoodLeast) {
            copy.sort(sortLeastComplete)
        }
        console.log("food filtered least", copy)
        // setSortFoodLeast(!sortFoodLeast)
        setSortFoodMost(!sortFoodMost)
        setFood(copy)
    }

    const filterMost = () => { //this filters by meal of most completetion 
        const copy = food
        if (sortFoodMost) {
            copy.sort(sortMostComplete)
        }
        console.log("food filtered most", copy)
        setSortFoodMost(!sortFoodMost)
        // setSortFoodLeast(!sortFoodLeast)
        setFood(copy)
    }

    const GetFood = async () => { //this gets food from array
        var resp = meals //this will be a get request once we hve the API end points
        setFood(resp)
        console.log("get food", resp)
    }

    useEffect(() => { //this loads the food from the array on page load. 
        GetFood()
    }, []);

    const filterByDate = () => {
        const copy = food
        var filtered = copy.filter((o, i) => {
            return o.date.includes(currentDate);
        })
        setFood(filtered)
        console.log("current date filtered", filtered);
    }

    const addMeal = (mealname) => {
        console.log("meal name final", mealname)

        // var resp = axios.post("website api endpoint", {meal: mealname, perc: perc, date: currentDate}) this is where we would do an axios post to the database, but for now, just pretend that its pushing to our fake db :) 
        // console.log("added item", resp);
        // setFood(resp)
    }

    const handleMore = () => {
        //  var resp = meals//this will modify db input, grab meal id an update accordingly
        //  resp.perc(+ 25)
        alert("more")
    }

    const handleLess = () => {
        //  var resp = meals //this will modify db input, grab meal id an update accordingly
        //   resp.perc(- 25)
        //  console.log(id);
        alert("less")
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
        <div className="food">
            {food.map(o => {
                return <Indicator onClick={(id) => {
                    console.log("id", id) //grabbing id for now
                    setSelected(id);
                }} clickLess={handleLess} clickMore={handleMore}
                    mealname={o.meal} perc={o.perc}>
                </Indicator>
            })}
        </div>
        <div className="addComp"
            onClick={addMeal}><AddItem handleAdd={addMeal} />
        </div>

    </Container>
}


export default MainPage;

function sortMostComplete(a, b) {
    // if (a.perc > b.perc){
    //     return 1
    // } else if (a.perc < b.perc){
    //     return -1
    // } else {
    //     return 0
    // }
    return b.perc - a.perc
}
function sortLeastComplete(a, b) {
    // if (a.perc > b.perc){
    //     return -1
    // } else if (a.perc < b.perc){
    //     return 1
    // } else {
    //     return 0
    // }
    return a.perc - b.perc
}
