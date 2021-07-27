import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Pedro", 10000, 38680830810);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Yasmin", 5000, 34403107877);
gerente.cadastrarSenha("123")
const cliente = new Cliente("Sidnei", 27740133809, "103069")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstalogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstalogado = SistemaAutenticacao.login(cliente, "103069");
console.log(gerenteEstaLogado, diretorEstalogado, clienteEstalogado);