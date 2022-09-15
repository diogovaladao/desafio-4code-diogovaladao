import { Api } from "..";

export interface IAeroporto {
    voo: string;
    origem: string;
    destino: string;
    data_saida: string;
    saida: string;
    chegada: string;
    valor: number;

}
/*export interface IDetalhegemAeroporto {
    voo: string;
    origem: string;
    destino: string;
    data_saida: string;
    saida: string;
    chegada: string;
    valor: number;
}

type TAeroportoTotalCount = {
    data: IAeroporto[];
    totalCount: number;
}*/

const getAll = async (): Promise<IAeroporto | Error> => {
    try {
        const urlRelativa = "/aeroportos";
        const { data } = await Api.get(urlRelativa);

         if (data) {
            return data;
        }

        return new Error('Erro ao listar os registros.')
        
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }
};


//const getById = async (): Promise<any> => { };

export const AeroportosService = {
    getAll,
};
