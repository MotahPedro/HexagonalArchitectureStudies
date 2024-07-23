import { terminal } from "terminal-kit";
import TerminalUtil from "@/app/util/TerminalUtil";
import Carro from "./Carro";

export default function corrida(carro: Carro){

    Array.from({length:10}).forEach(() => {
        carro.acelerar()
        terminal.red(`\nVelocidade: ${carro.velocidadeAtual}`)
    })

    Array.from({ length: 10 }).forEach(() => {
      carro.frear()
      terminal.red(`\nVelocidade: ${carro.velocidadeAtual}`)
    })

    // teste
    Array.from({ length: 10 }).forEach(() => {
      carro.acelerar()
      TerminalUtil.outputVelocidade("Velocidade: ", carro.velocidadeAtual)
    })

    Array.from({ length: 10 }).forEach(() => {
      carro.frear()
      TerminalUtil.outputVelocidade(
        "Velocidade: ",
        carro.velocidadeAtual
      )
    })
}