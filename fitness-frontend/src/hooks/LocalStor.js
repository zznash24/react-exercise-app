import React, { useState } from "react";

export default save => {
    const [cWork, setcWork] = useState(JSON.parse(localStorage.getItem("currExercises")) || []);

    const saveFunc = (value) => { 
        let cWorkHolder = [cWork, value] 
        setcWork(cWorkHolder)
        window.localStorage.setItem('currExercises', JSON.stringify(cWorkHolder));
    }
    
    return [cWork, saveFunc];

}