import React from "react";

function Form(props){
    return (
        <form classNmae="form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password"/>
            {props.isRegistered === false &&  
            (<input type="password" placeholder="confirm password"/>)}
            <button type="submit">
                {props.isRegistered ? "Login" : "Register"}
                

            </button>

        </form>

    );
}

export default Form ;



