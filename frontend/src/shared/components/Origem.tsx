import { Autocomplete, TextField } from "@mui/material";
import { AeroportosService } from "../services/voos/AeroportosService";


export const Origem: React.FC = () => {

    AeroportosService.getAll().then((result) => {
        if (result instanceof Error) {
            alert(result.message);
        } else {
            console.log(result)
        }
    });
    

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