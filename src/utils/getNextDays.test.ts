import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
    it("shold be return the next fixe days", () => {
        const nextDays = getNextDays();
        expect(nextDays.length).toBe(5);
    });
})



// 1º param: Sempre colocar algo relacionado ao que você espera que a aplicação faça.
// 2º param: Função que vai executar o teste

//expect: O que você esta esperando que a função traga.
//describe: Serve para agrupar metodos de teste. 