import React from 'react';

function Button (props){
    return (
        <>
        <form action={props.link}><button class="button"><span>{props.text}</span></button></form>
        </>
    )
}

export default Button;