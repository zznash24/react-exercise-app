import WorkoutSearch from "./WorkoutSearch";
import Listresults from "./ListResults";
import DataPagination from './Pages';
import SearchWork from "../hooks/SearchWork";
import InputState from "../hooks/InputState";
import useToggle from '../hooks/SavWork';
import React, { useState } from 'react';
import useLocalStorageState from "../hooks/LocalStor";

function WorkoutApp() {
  const [page, setPage] = React.useState(1);
  const [itemsPerPage] = useState(5);
  const [values, searchByHolder, searchTermHolder, handleChangeFunc] = InputState();
  const [result, searchTags, show, handleSubmitFunc] = SearchWork();
  const [cWorkMode, setcWorkMode] = useToggle();
  const [cWork, saveFunc] = useLocalStorageState();
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = result ? result.slice(indexOfFirstItem, indexOfLastItem) : [];
  const resultList = (show) ? <Listresults data={currentResults} searchTags={searchTags} numResults={result.length} /> : null;
  const CurrWork = cWork.slice(indexOfFirstItem, indexOfLastItem);
  const CurrWorkList = <CurrWorkList data={CurrWork} save={saveFunc} />
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


  return (
    <div>
      <div className='WorkoutApp'>
      {(cWorkMode) ? CurrWorkList :
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
      }
      </div>
      {pagination}
    </div>
  )
}

export default WorkoutApp;