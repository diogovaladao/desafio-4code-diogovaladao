import { Box } from "@mui/material";
import React from 'react';

import { Origem, Destino } from "../../shared/components";

export const Dashboard: React.FC = () => {
    return (
        <Box height="100%" display="flex" flexDirection="row" gap={1}>
            <Origem />
            <Destino />
        </Box>
    );
};