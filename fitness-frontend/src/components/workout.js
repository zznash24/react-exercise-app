import WorkoutSearch from "./WorkoutSearch";
import Listresults from "./ListResults";
import DataPagination from './Pages';
import SearchWork from "../hooks/SearchWork";
import InputState from "../hooks/InputState";
import React, { useState } from 'react';

function WorkoutApp() {
  const [page, setPage] = React.useState(1);
  const [itemsPerPage] = useState(10);
  const [values, searchByHolder, searchTermHolder, handleChangeFunc] = InputState();
  const [result, searchTags, show, handleSubmitFunc] = SearchWork();
  console.log(SearchWork());
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = result ? result.slice(indexOfFirstItem, indexOfLastItem) : [];
  const resultList = (show) ? <Listresults data={currentResults} searchTags={searchTags} numResults={result.length} /> : null;
  let pagination;

  if (!show) {
    pagination = null;
  } else if (result.length === 0) {
    pagination = null;
  } else {
    pagination = <DataPagination itemsPerPage={itemsPerPage} totalItems={result.length} page={page} setPage={setPage} />
  }


  return (
    <div>
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