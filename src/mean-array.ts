import { sum } from "./sum-array";

export function mean(arr: number[]): number {
    return sum(arr) / arr.length;
}

//Codigo fuente tomado de https://www.analyticslane.com/2020/12/02/estructurar-el-proyecto-typescript-y-pruebas-unitarias-3o-parte-creacion-de-una-libreria-typescript/