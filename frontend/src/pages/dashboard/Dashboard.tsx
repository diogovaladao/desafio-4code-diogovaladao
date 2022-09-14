import { Box } from "@mui/material";

import { DataSaida, Origem, Destino } from "../../Components";

export const Dashboard: React.FC = () => {
    return (
        <Box height="100%" display="flex" flexDirection="row" gap={1}>
            <Origem />
            <Destino />
            <DataSaida/>
        </Box>
    );
};