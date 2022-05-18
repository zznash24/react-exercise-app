import React, { useState } from 'react';
import Listresults from "./listResults";
import Loading from "./Loading";
import DataPagination from './DataPagination';
import SearchForm from "./SearchForm";
import Header from "./Header";
import Footer from "./Footer";
import useInputState from "../hooks/useInputState";
import useSearch from "../hooks/useSearch";
import '../styles/WorkoutApp.css';

function WorkoutApp() {
  const [values, searchByHolder, searchTermHolder, handleChangeFunc] = useInputState();
  const [result, searchTags, show, loading, handleSubmitFunc, setLoading] = useSearch();
  const [itemsPerPage] = useState(10); //Sets number of items that can appear on each page. 
  const [page, setPage] = React.useState(1);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = result.slice(indexOfFirstItem, indexOfLastItem);
  const currentFavs = favs.slice(indexOfFirstItem, indexOfLastItem);
  let pagination;

  if (!favsMode) { //If site isn't set to favsMode, display normal result paginator.
    if (!show) {
      pagination = null;
    } else if (result.length === 0) {
      pagination = null;
    } else {
      pagination = <DataPagination itemsPerPage={itemsPerPage} totalItems={result.length} page={page} setPage={setPage} />
    }
  } else if (favsMode) { //Display favsMode paginator.
    if (favs.length === 0) {
      pagination = null;
    } else {
      pagination = <DataPagination itemsPerPage={itemsPerPage} totalItems={favs.length} page={page} setPage={setPage} />
    }
  }

  const resultList = (show) ? <ResultList data={currentResults} searchTags={searchTags} numResults={result.length} save={saveFunc} remove={removeFunc} /> : null; //In case the search is somehow submitted without entering a search term, the result list will not be rendered preventing an error. 

  return (
    <div>
      <div className='WorkoutApp-wrapper'>
        <div>
            <SearchForm
              handleChange={handleChangeFunc}
              handleSubmit={handleSubmitFunc}
              setLoading={setLoading}
              searchByHolder={searchByHolder}
              searchTermHolder={searchTermHolder}
              values={values}
            />
            {(loading) ? <Loading /> : <div>{resultList}</div>}
          </div>
      </div>
      {pagination}
      <Footer />
    </div>
  )
}

export default WorkoutApp;