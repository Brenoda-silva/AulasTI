import {
  listEquipamentos,
  getEquipamento,
  createEquipamento,
  updateEquipamento,
  removeEquipamento
} from "./equipamentosService.js";

async function testar() {

  try {

    // LISTAR
    const lista = await listEquipamentos();
    console.log("Lista:", lista);

    // BUSCAR
    const equipamento = await getEquipamento(1);
    console.log("Equipamento:", equipamento);

    // CRIAR
    const novo = await createEquipamento({
      nome: "Notebook Dell",
      patrimonio: "12345",
      status: "ativo"
    });
    console.log("Criado:", novo);

    // ATUALIZAR
    const atualizado = await updateEquipamento(1, {
      nome: "Notebook Dell i7"
    });
    console.log("Atualizado:", atualizado);

    // REMOVER
    const removido = await removeEquipamento(1);
    console.log("Removido:", removido);

  } catch (error) {
    console.error("Erro no teste:", error.response?.data || error.message);
  }
}

testar();