import Pagination from '@mui/material/Pagination';

function DataPagination({ itemsPerPage, totalItems, page, setPage }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) { //Allows pagination.
    pageNumbers.push(i);
  }

  return (
    <Pagination
      className='Pagination'
      count={pageNumbers.length}
      page={page}
      onChange={(event, value) => {setPage(value);}}
      color="primary"
    />
  );
}

export default DataPagination;