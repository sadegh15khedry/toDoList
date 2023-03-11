import { render } from "@testing-library/react"
import './App.css';
import React from 'react';


export default function Section (){
        const itemCounter = 0; 
        const items = ["item 1","item 2","item 3","item 4","item 5"] 
        
        return (
            if(itemCounter % 3 == 0){
                items.map((item) => <SectionItem text={item} startOfLine={1} /> ) 
            }
            else if (itemCounter % 3 == 2){
                items.map((item) => <SectionItem text={item} startOfLine={1} /> )
            }
            itemCounter++;

        );

}

function SectionItem(props){

    return (
        <div className="col-sm-3">
            {props.text}
        </div>
    );
    
}