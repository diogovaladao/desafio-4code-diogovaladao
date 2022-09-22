import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { AeroportosService, IAeroporto } from "../services/voos/AeroportosService";


type listaVoos = {
    label: string;
    value: IAeroporto
}

export const Origem = () => {
    const [opcoes, setOpcoes] = useState<listaVoos[]>();
    const [busca, setBusca] = useState('');
    const [selectedName, setSelectedName] = useState<string | undefined>(undefined);



    useEffect(() => {
        AeroportosService.getAll(1, busca).then((result) => {
            console.log(result);
            setOpcoes(result.data.map((v) => ({
                label: v.cidade,
                value: v
            })))
        }).catch(e => alert(e.message));
    }, [busca]);




    /*const voos = [
        { label: 'Brasília' },
        { label: 'Vitória' },
        { label: 'Maceió' },
        { label: 'Belém' },
        { label: 'Florianópolis' },
        { label: 'São Paulo - CHG' },
        { label: 'Aracajú' },
        { label: 'Goiânia' },
    ]*/

    return (<TextField name="teste" fullWidth select>
        {opcoes?.map(({ label, value }, index) => <option key={index} value={label}>{label}</option>)}
    </TextField>);
};