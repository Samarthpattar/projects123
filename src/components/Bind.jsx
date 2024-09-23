
import React from "react";
function greeting(text , name, wish){
    console.log(`${text} ${name} ${wish} ${this.name}`);
}



const person={
    name:"jhon"
}


const addingText=greeting.bind(person,"very", "good");

addingText("morning")
addingText("evening")

export defualt Bind
//greeting.call(person, ["hi this is ", "jhon"], "lcg");