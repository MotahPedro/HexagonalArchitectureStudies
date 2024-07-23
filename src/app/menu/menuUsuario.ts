import polimorfismo from "../fundamentos/polimorfismo"
import TerminalUtil from "../util/TerminalUtil"

export default async function menuUsuario() {
  TerminalUtil.titulo("Usuario")

  const [indice] = await TerminalUtil.menu([
    "1. Registrar Usuário",
    "Voltar",
  ])

  switch (indice) {
    case 0:
      await polimorfismo()
      break
    default:
      return
  }

  await menuUsuario()
}
