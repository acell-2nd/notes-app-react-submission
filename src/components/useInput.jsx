import React from "react";
import { useState } from "react";
function useInput (defaultValue = ''){
    const [value, setValue] = useState(defaultValue);
    const inputChangeHandler = (e) => setValue(e.target.value ?? e.target.innerHTML);

    return [value, inputChangeHandler];
}

export default useInput