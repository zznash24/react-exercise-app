import WorkoutSearch from "./WorkoutSearch";
import Listresults from "./ListResults";
import DataPagination from './Pages';
import SearchWork from "../hooks/SearchWork";
import InputState from "../hooks/InputState";
import useToggle from '../hooks/SavWork';
import React, { useState } from 'react';
import useLocalStorageState from "../hooks/LocalStor";

function WorkoutApp() {
  const [values, searchByHolder, searchTermHolder, handleChangeFunc] = InputState();
  const [result, searchTags, show, handleSubmitFunc] = SearchWork();
  const [cWork, saveFunc] = useLocalStorageState();
  const [cWorkMode, setcWorkMode] = useToggle();
  const [itemsPerPage] = useState(5);
  const [page, setPage] = React.useState(1);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = result ? result.slice(indexOfFirstItem, indexOfLastItem) : [];
  const CurrWork = cWork.slice(indexOfFirstItem, indexOfLastItem);
  let pagination;

  
  if (!cWorkMode) {
    if (!show) {
      pagination = null;
    } else if (result.length === 0) {
      pagination = null;
    } else {
      pagination = <DataPagination itemsPerPage={itemsPerPage} totalItems={result.length} page={page} setPage={setPage} />
    }
  } else if (cWorkMode) { 
    if (cWork.length === 0) {
      pagination = null;
    } else {
      pagination = <DataPagination itemsPerPage={itemsPerPage} totalItems={cWork.length} page={page} setPage={setPage} />
    }
  }

// const CurrWorkList = <CurrWorkList data={CurrWork} save={saveFunc} />
const resultList = (show) ? <Listresults data={currentResults} searchTags={searchTags} numResults={result.length} /> : null;

  return (
    <div>
      <div cWorkMode={cWorkMode} setcWorkMode={setcWorkMode} page={page} setPage={setPage} />
      <div className='WorkoutApp'>
      
        <div>
            <WorkoutSearch
              handleChange={handleChangeFunc}
              handleSubmit={handleSubmitFunc}
              searchByHolder={searchByHolder}
              searchTermHolder={searchTermHolder}
              values={values}
            />
            <div>{resultList}</div>
          </div>
      
      </div>
      {pagination}
    </div>
  )
}

export default WorkoutApp;