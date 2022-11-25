import React, {useState, useEffect}from "react";

const CountButton = () => {

    const [count, setCount] = useState(0);


    const handleClick = () => {
        //alert("clicked");
        setCount(count + 1);
    }


    return (
        <div>
            <button onClick={handleClick}> Count Button </button>
            <div> {count} </div>
        </div>
    );
}

export default CountButton;
