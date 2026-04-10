import { useState } from "react";
const DerivedState =() =>{

     const[users , setUsers]=useState([
        {name:"Alice" ,age:25},
        {name:"Ali" ,age:12},
        {name:"Atif" ,age:25},
        {name:"Arooj" ,age:24},

     ])
     console.log(users);
     const userCount = users.length;
     const averageAge=users.reduce((accum, curElem) =>accum + curElem.age,0 /userCount)
    return(
        <div>
            <h1>Usera list</h1>
            <ul>
            {users.map((curElem, index) =>{
                return (
                    <li>
                        {curElem.name} - {curElem.age} year old
                    </li>
                )
            })

            }
            </ul>
            <p>Total Users:{userCount}</p>
            <p>Average Age:{averageAge}</p>

        </div>

    )
}
export default DerivedState