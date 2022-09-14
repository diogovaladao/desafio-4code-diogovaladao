import { Api } from "..";
import { Environment } from "../../environment";

export interface IListagemVoo {
    voo: string;
    origem: string;
    destino: string;
    data_saida: string;
    saida: string;
    chegada: string;
    valor: number;

}
export interface IDetalhegemVoo {
    voo: string;
    origem: string;
    destino: string;
    data_saida: string;
    saida: string;
    chegada: string;
    valor: number;
}

type TVooComTotalCount = {
    data: IListagemVoo[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TVooComTotalCount | Error> => {
    try {
        const urlRelativa = `/voo?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            }
        }

        return new Error('Erro ao listar os registros.')
        
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }
};


const getById = async (): Promise<any> => { };

export const VooService = {

};
