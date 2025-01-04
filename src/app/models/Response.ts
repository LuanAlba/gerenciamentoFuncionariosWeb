export interface Response<T> {
    data: T;
    mensagem: string;
    sucesso: boolean;
}