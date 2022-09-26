import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useDebounce } from "../hooks";
import { AeroportosService } from "../services/voos/AeroportosService";

type listaVoos = {
    label: string;
}

export const Destino: React.FC = () => {
    
    const [opcoes, setOpcoes] = useState<listaVoos[]>([]);
    const [busca, setBusca] = useState('');
    const [selectedName, setSelectedName] = useState<string | undefined>(undefined);
    const { debounce } = useDebounce();

    useEffect(() => {
        debounce(() => {
            AeroportosService.getAll(1, busca).then((result) => {
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result);
                    setOpcoes(result.data.map(voos => ({ label: voos.cidade })))
                }
            });
        });
    }, [debounce, busca]);

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={opcoes}
            sx={{ width: 300 }}
            onInputChange={(_, newValue) => setBusca(newValue)}
            onChange={(_, newValue) => { setSelectedName(newValue?.label); setBusca('') }}
            renderInput={(params) => <TextField {...params} label="Destino" />}
        />
    );
};