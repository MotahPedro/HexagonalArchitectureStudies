import TerminalUtil from "../util/TerminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import Ferrari from "@/core/fundamentos/Ferrari";
import Carro from "@/core/fundamentos/Carro";
import corrida from "@/core/fundamentos/Corrida";
import { terminal } from "terminal-kit";
import Civic from "@/core/fundamentos/Civic"

export default async function dip() {
    TerminalUtil.titulo('DIP')

    const [tipo] = await TerminalUtil.selecao("Tipo de carro?", [
        "Fusca", "Ferrari"
    ])

    let carro: Carro
    switch(tipo){
        case 0: new Fusca
            carro = new Fusca()
            break
        case 1: new Civic()
        default:
            carro = new Ferrari
            break
    }


    corrida(carro, terminal.green)
    await TerminalUtil.esperarEnter()
}