import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import AddItem from '../../comps/AddItem';
import Indicator from '../../comps/indicator';
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

const MainPage = () => {


    const [completed, setCompeted] = useState(50);
    const [food, setFood] = useState([]); //for getting food array 
    const [sortFoodLeast, setSortFoodLeast] = useState(true); //for filter food by least complete
    const [sortFoodMost, setSortFoodMost] = useState(true); //for filtering food by most complete
    const [sorted, setSorted] = useState(true);
    const [selectedId, setSelected] = useState("");
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
        var resp = food //this will be a get request once we hve the API end points
        var filtered = resp.filter((o, i) => {
            return o.date.includes(currentDate);
        })
        setFood(filtered)
        console.log("get food", filtered)
        console.log("current date on click forward is", currentDate)
    };



    const dateBack = () => { //this moves current date back by one, will be used with filtering by date
        setNum(
           num - 1
        )
        console.log("current number", num)
        setCurrentDate(
            moment().add(num - 1, "days").format("DD/MM/YYYY")
        )
        var resp = food //this will be a get request once we hve the API end points
        var filtered = resp.filter((o, i) => {
            return o.date.includes(currentDate);
        })
        setFood(filtered)
        console.log("get food", filtered)
        console.log("current date on click back is", currentDate)
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

    const filterMost = () => { //this filters by meal of most completetion 
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

    useEffect(() => { //this loads the food from the array on page load. 
        GetFood();
        // dateForward();
        // dateBack();
    }, []);

    const filterByDate = () => {
        // console.log("all food", meals)
        console.log(currentDate)
        setCurrentDate(currentDate)
        // var resp = meals
        // var filtered = resp.includes((o, i) => {
        //     return o.date.includes(currentDate);
        // })
        // console.log("filtered food", filtered)
    }

    const AddMeal = (mealname) => {
        console.log(mealname);
        var resp = axios.post("https://murphy-db.herokuapp.com/api/meals", 
        {
            content: mealname,
          
          });
        console.log("created", resp);
    }

    const handleMore = () => {
        console.log("completed", completed)
        // console.log(perc)
        //  var resp = meals//this will modify db input, grab meal id an update accordingly
        //  resp.perc(+ 25)
        if(selectedId === null){
            return false;
        }
        // console.log(selectedId, "function id")
        var resp =  axios.patch(`https://murphy-db.herokuapp.com/api/meals/${selectedId}`, {
            "completed": 50
        });
        GetFood();

        alert("more")
    }

    const handleLess = () => {
        //  var resp = meals //this will modify db input, grab meal id an update accordingly
        //   resp.perc(- 25)
        //  console.log(id);
        alert("less")
    }

    const clickDelete = () => {
        // alert("delete");
        if(selectedId === null){
            return false;
        }
        // console.log(selectedId, "function id")
        var resp =  axios.delete(`https://murphy-db.herokuapp.com/api/meals/${selectedId}`)
        GetFood();
    }


    return <Container>
        <div className="title" onClick={filterByDate}>Feeding Schedule</div>
        {/* {currentDate} */}
        <div className="dateComp"><DateComp handleBack={dateBack} handleForward={dateForward} /></div>
        <div className="filterComp"><FilterComp filterbyMost={filterMost} filterbyLeast={filterLeast} fsizeT="20px" /></div>
        <div className="food">
            {food.map(o => {
                return <Indicator handleDelete={clickDelete} onClick={(id) => {
                    console.log("id", o.id) //grabbing id for now
                    setSelected(o.id);
                }} clickLess={handleLess} clickMore={handleMore}
                    mealname={o.content} perc={o.perc}>
                </Indicator>
            })}
        </div>
        <div className="addComp">
            <AddItem handleAddB={AddMeal} handleAddL={AddMeal} handleAddD={AddMeal} />
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
