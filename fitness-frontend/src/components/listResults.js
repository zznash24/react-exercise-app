import Result from "./Result";
import Box from '@mui/material/Box';

function Listresults({ data }) {
    const resultList = data.map((value) =>
        <Result
            data={value}
            key={value.id}
           />
    );
    return (
        <Box>
            <ul>
                {resultList}
            </ul>
        </Box>
    )
}

export default Listresults;