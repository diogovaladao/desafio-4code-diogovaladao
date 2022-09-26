import { Api } from "..";
import { Environment } from "../../environment";

export interface IAeroporto {
    nome: string,
    aeroporto: string,
    cidade: string
}

type TAeroportoTotalCount = {
    data: IAeroporto[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TAeroportoTotalCount> => {
    try {
        const urlRelativa = `/aeroportos?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&cidade_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa);
        return {
            data,
            totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
        }
    } catch (error) {
        console.error(error);
        throw new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }

};


//const getById = async (): Promise<any> => { };

export const AeroportosService = {
    getAll,
};
