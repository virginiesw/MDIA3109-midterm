import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import AddItem from '../../comps/AddItem';
import Indicator from '../../comps/indicator';
import TreatIndicator from '../../comps/TreatIndicator';
import DateComp from '../../comps/DateComp';
import FilterComp from '../../comps/FilterComp';
import axios from 'axios';


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


.color {
    outline: 2px solid yellow;
}

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

// Trying to add an outline to div when clicked
// var addclass = 'color';
// var $cols = $('.highlight').click(function(e) {
//     $cols.removeClass(addclass);
//     $(this).addClass(addclass);
// });

const MainPage = () => {


    const [complete, setCompleted] = useState(null);
    const [amount, setAmount] = useState(null);
    const [food, setFood] = useState([]); //for getting food array 
    const [snacks, setSnacks] = useState([]); //for getting food array 
    const [sortFoodLeast, setSortFoodLeast] = useState(true); //for filter food by least complete
    const [sortFoodMost, setSortFoodMost] = useState(true); //for filtering food by most complete
    const [sorted, setSorted] = useState(true);

    const [selectedId, setSelected] = useState(null)
    const [selectedTreats, setSelectedTreats] = useState(null)
    const [currentDate, setCurrentDate] = useState(moment().format("DD/MM/YYYY")); //for filtering by date
    const [num, setNum] = useState(0) //used in junction with currentDate


    const dateForward = () => { //this moves the date forward one, will be used with filtering by date

        // setNum(
        //     num + 1
        // )
        // console.log("current number", num)
        // setCurrentDate(
        //     moment().add(num + 1, "days").format("DD/MM/YYYY")
        // )
        // var resp = food //this will be a get request once we hve the API end points
        // var filtered = resp.filter((o, i) => {
        //     return o.date.includes(currentDate);
        // })
        // setFood(filtered)
        // console.log("get food", filtered)
        // console.log("current date on click forward is", currentDate)
    };



    const dateBack = () => { //this moves current date back by one, will be used with filtering by date
        // setNum(
        //     num - 1
        // )
        // console.log("current number", num)
        // setCurrentDate(
        //     moment().add(num - 1, "days").format("DD/MM/YYYY")
        // )
        // var resp = food //this will be a get request once we hve the API end points
        // var filtered = resp.filter((o, i) => {
        //     return o.date.includes(currentDate);
        // })
        // setFood(filtered)
        // console.log("get food", filtered)
        // console.log("current date on click back is", currentDate)
        // food.resp.includes((o, i) => {
        //         return o.date.includes(currentDate);
        //     })
        //     console.log("date filtered back", copy)
        const copy = food
        if (setCurrentDate) {
            copy.sort(SortByDateBack)
        }
        console.log("date filtered back", copy)
        // console.log("date filtered back", copy)
        setCurrentDate(!currentDate)
        setFood(copy)
        
    };


    const filterLeast = () => { //this filters by meal of least perc 
        const copy = food
        if (sortFoodLeast) {
            copy.sort(sortLeastComplete)
        }
        console.log("food filtered least", copy)
        setSortFoodMost(!sortFoodMost)
        setFood(copy)
    }

    const filterMost = () => { //this filters by meal of most completion 
        const copy = food
        if (sortFoodMost) {
            copy.sort(sortMostComplete)
        }
        console.log("food filtered most", copy)
        setSortFoodMost(!sortFoodMost)
        setFood(copy)
    }

    const GetFood = async () => { //this gets food from array
        // var resp = meals //this will be a get request once we hve the API end points
        var resp = await axios.get("https://murphy-db.herokuapp.com/api/meals");
        console.log("food dabase", resp.data.meals)
        setFood(resp.data.meals)
        // setFood(resp)

    }
    //  const GetFood = async () => { //this gets food from array
    //     // var resp = meals //this will be a get request once we hve the API end points
    //     var resp = await axios.get("https://murphy-db.herokuapp.com/api/meals");
    //     console.log("food dabase", resp.data.meals)
    //     setFood(resp.data.meals)
    //     // setFood(resp)

    // }

    useEffect(() => { //this loads the food from the array on page load. 
        GetFood();
        GetTreats();
        // dateForward();
        dateBack();
    }, []);

    const filterByDate = () => {
        const copy = food
        // console.log("all food", copy)
        // console.log(currentDate)
        // setCurrentDate(currentDate)
        // // var resp = meals
        // var filtered = copy.includes((o) => {
        //     return o.date.includes(currentDate);
        // })
        // console.log("filtered food", filtered)
    }


    const AddMeal = async () => {
        // console.log("mealname", mealname)

        var resp = await axios.post("https://murphy-db.herokuapp.com/api/meals", {
            content: "Dinner",
            completed: 50
        });
        GetFood();
    };

    const handleMore = async () => {
     
        var resp = await axios.patch(`https://murphy-db.herokuapp.com/api/meals/${selectedId}`, {
            completed: complete + 25
        });
        setCompleted(complete + 25);
        GetFood();
        // setFood();
        // console.log(resp)
    }

    const handleLess = async () => {
        var resp = await axios.patch(`https://murphy-db.herokuapp.com/api/meals/${selectedId}`, {
            completed: complete - 25
        });
        GetFood();
        setCompleted(complete - 25);
        // console.log(resp)
    }

    const clickDelete = () => {
        // alert("delete");
        if (selectedId === null) {
            return false;
        }
        // console.log(selectedId, "function id")
        var resp = axios.delete(`https://murphy-db.herokuapp.com/api/meals/${selectedId}`)
        GetFood();
    }


    // Treats Functions

    const GetTreats = async () => { 
        var resp = await axios.get("https://murphytreatdb.herokuapp.com/api/treats");
        console.log("treats database", resp.data.treats)
        setSnacks(resp.data.treats)
    }

    const treatsMore = async () => {
        // setSelectedTreats();

        var resp = await axios.patch(`https://murphytreatdb.herokuapp.com/api/treats/${selectedTreats}`, {
            amount: +1
        });
        setAmount(amount +1);
        GetTreats();
    }



    const treatsLess = async () => {
      
        var resp = await axios.patch(`https://murphytreatdb.herokuapp.com/api/treats/${selectedTreats}`, {
            amount: -1
        });
        setAmount(amount -1);
        GetTreats();
    }

    return <Container>
        <div className="title" onClick={filterByDate}>Feeding Schedule</div>
        {/* {currentDate} */}
        <div className="dateComp"><DateComp handleBack={dateBack} handleForward={dateForward} /></div>
        <div className="filterComp"><FilterComp filterbyMost={filterMost} filterbyLeast={filterLeast} fsizeT="20px" /></div>
        <div className="food">
            {food.map(o => {
                return <Indicator className="highlight" handleDelete={clickDelete} onClick={() => {
                    setSelected(o.id);
                    setCompleted(o.completed);
                }} clickLess={handleLess} clickMore={handleMore}
                    mealname={o.content} perc={o.completed}>
                </Indicator>
            })}
            {snacks.map(o => {
                return <TreatIndicator className="highlight" onClick={() => {
                    setSelectedTreats(o.id);
                    setAmount(o.amount);
                }}
                 clickTreatsLess={treatsLess} clickTreatsMore={treatsMore}
                    amount={o.amount}>
                </TreatIndicator>
            })}
        </div>
        <div className="addComp">
            <AddItem handleAdd={AddMeal} />
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
    return b.completed - a.completed
}
function sortLeastComplete(a, b) {
    // if (a.perc > b.perc){
    //     return -1
    // } else if (a.perc < b.perc){
    //     return 1
    // } else {
    //     return 0
    // }
    return a.completed - b.completed
}
function SortByDateBack(a,b){
    return a.date > b.date ? -1 : b.date > a.date ? 1 : 0;
        // }
        // return a.meals - b.meals
  }