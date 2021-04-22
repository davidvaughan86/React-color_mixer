import React from 'react'


export default function ColorPicker(props) {
    const [color, setColor]=React.useState(255)
    return(
        <>
            {props.label} <input type ="range" min="0" max="255" value={color} 
                    onChange={(event) => {
                    console.log(event.target.value);
                    setColor(event.target.value)
                    props.setColor(event.target.value);
            }}
            />
            {color}
        </>


    )
}
