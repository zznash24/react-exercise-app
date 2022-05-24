import React, { useState } from "react";

export default toggle => {
    const [cWorkMode, setcWorkMode] = useState(false);
    return [cWorkMode, setcWorkMode];
}