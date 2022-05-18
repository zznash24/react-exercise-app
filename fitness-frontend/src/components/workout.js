import Listresults from "./listResults";
import Loading from "./Loading";
import SearchForm from "./SearchForm";
import useInputState from "../hooks/useInputState";
import useSearch from "../hooks/useSearch";
import DataPagination from './DataPagination';

function workoutApp() {
  const [values, searchByHolder, searchTermHolder, handleChangeFunc] = useInputState();
  const [result, searchTags, show, loading, handleSubmitFunc, setLoading] = useSearch();
  const [page, setPage] = React.useState(1);
  let pagination;

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = result.slice(indexOfFirstItem, indexOfLastItem);
  const resultList = (show) ? <Listresults data={currentResults} searchTags={searchTags} numResults={result.length} /> : null; 


   if (!show) {
      pagination = null;
    } else if (result.length === 0) {
      pagination = null;
    } else {
      pagination = <DataPagination itemsPerPage={itemsPerPage} totalItems={result.length} page={page} setPage={setPage} />
    }
  

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
    </div>
  )
}

export default workoutApp;