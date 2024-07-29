import Usuario from "@/core/usuario/model/Usuario"
import TerminalUtil from "../util/TerminalUtil"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"


export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuário")

  const id = await TerminalUtil.campoRequerido('Id: ','safa-sfas-fasfa')
  const nome = await TerminalUtil.campoRequerido("Nome: ", 'Ana da Silva')
  const email = await TerminalUtil.campoRequerido("Email: ", 'Ana.Silva@Empresa.com.br')
  const senha = await TerminalUtil.campoRequerido("Senha: ", '123456')

    const usuario: Usuario = { nome, email, senha}
    await new RegistrarUsuario().executar(usuario)
    await TerminalUtil.esperarEnter()

    TerminalUtil.sucesso('Usuário registrado com sucesso')
    await TerminalUtil.esperarEnter()

    try {
      await new RegistrarUsuario().executar(usuario)
    } catch (e: any) {
      TerminalUtil.erro(e.message)
    } finally {
      await TerminalUtil.esperarEnter()
    }

}
