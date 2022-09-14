import { Autocomplete, TextField } from "@mui/material";
import React from 'react';


export const Origem: React.FC = () => {

    const voos = [
        { label: 'Brasília' },
        { label: 'Vitória' },
        { label: 'Maceió' },
        { label: 'Belém' },
        { label: 'Florianópolis' },
        { label: 'São Paulo - CHG' },
        { label: 'Aracajú' },
        { label: 'Goiânia' },
    ]

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={voos}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Origem" />}
        />


    );
};