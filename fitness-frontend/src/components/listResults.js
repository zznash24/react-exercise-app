import Result from "./Result";
import Box from '@mui/material/Box';

function Listresults({ data, save }) {
    const resultList = data.map((value) =>
        <Result
            data={value}
            key={value.id}
            save={save}
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