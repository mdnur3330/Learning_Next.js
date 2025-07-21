import React from 'react';

const ServisesDetails = ({params}) => {
      const data = [
    {id: 1, name:"nur alom",age: 45, location: "bahechor"},
    {id: 2,name:"nur alom",age: 345, location: "bahechor"},
    {id: 3,name:"nur alom",age: 335, location: "bahechor"},
    {id: 4,name:"nur alom",age: 325, location: "bahechor"},
    {id: 5,name:"nur alom",age: 375, location: "bahechor"},
    {id: 6,name:"nur alom",age: 365, location: "bahechor"},
   ]
    const id = params.id
    const singleData = data.find((d)=> d.id == id)
    return (
        <div>
            id: {id}
         <p>name: {singleData.name}</p>
          <p>age: {singleData.age}</p>
        </div>
    );
};

export default ServisesDetails;