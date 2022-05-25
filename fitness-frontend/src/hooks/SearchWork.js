import React, { useState } from "react";
const axios = require('axios').default;

const initialSearchTags = {
    searchedTerm: "",
    searchedBy: ""
};

export default search => {
    const [result, setResult] = useState([]);
    const [searchTags, setSearchTags] = useState(initialSearchTags);
    const [show, setShow] = useState(false);
    
    const handleSubmitFunc = (valuesParam, searchType, searchParam) => { 

        setShow(true)

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/${searchType}/${searchParam}`,
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': '5e8b9cb1f0msh09ab79c40301ed3p1d798djsnca9c961a0b9f'
            }
        };

        if (valuesParam.searchTerm !== ""){
            return axios.request(options).then(function (response) {
                setResult(response.data); 
                setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy });
                
            }).catch(function (error){
                setResult([]);  
                setSearchTags({ searchedTerm: valuesParam.searchTerm, searchedBy: valuesParam.searchBy });
                console.error(error);
                
            });
        } else {
            setResult([]);
        }
    }
 
    return [result, searchTags, show, handleSubmitFunc];
}
