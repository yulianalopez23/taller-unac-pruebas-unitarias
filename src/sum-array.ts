export function sum(arr: number[]): number {
    let result: number = 0;
    for (let i = 0; i < arr.length; ++i) {
        result += arr[i];
    }
    return result;
}

//Codigo fuente tomado de https://www.analyticslane.com/2020/12/02/estructurar-el-proyecto-typescript-y-pruebas-unitarias-3o-parte-creacion-de-una-libreria-typescript/