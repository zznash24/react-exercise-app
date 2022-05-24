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
    
    const handleSubmitFunc = (valuesParam, searchByParam, searchTermParam) => { 

        setShow(true)

        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/${searchByParam}/${searchTermParam}`,
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': 'd7e64b9d96mshab31c4df752e9cep1df2dfjsncf567034bfc0'
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
 console.log(result);
    return [result, searchTags, show, handleSubmitFunc];
}
