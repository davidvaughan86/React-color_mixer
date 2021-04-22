import React from 'react'


export default function FakeDiv(props) {
    return(
    <div
        style={props.style}
        className={props.className}
    >
        {props.children}
        
    </div>
    );
}