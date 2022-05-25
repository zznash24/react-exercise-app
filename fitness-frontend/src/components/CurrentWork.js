import Result from "./Result";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CurrWorkList({ data, remove }) {

  const CurrWorkList = data.slice(0).reverse().map((value) =>
    <Result
      data={value}
      key={value.id}
      remove={remove}
    />
  );

  return (
    <Box>
      <Typography>
        {data.length}
      </Typography>
      <ul>
        {CurrWorkList}
      </ul>
    </Box>
  )
}

export default CurrWorkList;