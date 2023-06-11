import IProjeto from "./IProjeto";

export default interface ITarefa {
    duracaoEmSegundoas: number,
    descricao: string,
    projeto: IProjeto
}