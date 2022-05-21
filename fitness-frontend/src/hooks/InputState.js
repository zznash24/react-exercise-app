import React, { useState } from "react";

const initialSearchTerms = {
    searchTerm: "",
    searchBy: ""
};

export default input => {
    const [values, setValues] = useState(initialSearchTerms);

    const searchByHolder = values.searchBy;
    const searchTermHolder = values.searchTerm.replace(/\s\s+/g, '%20').toLowerCase();

    const handleChangeFunc = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, searchByHolder, searchTermHolder, handleChangeFunc];
}