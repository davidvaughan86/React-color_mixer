import React from 'react'


export default function ColorPicker(props) {
    return(
        <>
            {props.label} <input type ="range" mix="0" max="255" value={props.color} 
                    onChange={(event) => {
                    console.log(event.target.value);
                    props.setColor(event.target.value);
            }}
            />
            {props.color}
        </>


    )
}
