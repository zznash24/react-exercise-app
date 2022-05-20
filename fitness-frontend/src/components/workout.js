import WorkoutSearch from "./WorkoutSearch";
import Listresults from "./ListResults";


function WorkoutApp() {
 
  const resultList = (show) ? <Listresults data={currentResults} searchTags={searchTags} numResults={result.length} /> : null;

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