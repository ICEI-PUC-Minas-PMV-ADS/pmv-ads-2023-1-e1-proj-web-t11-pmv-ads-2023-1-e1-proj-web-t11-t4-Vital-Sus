export async function obterJSON(dados) {
    try {
      const response = await fetch(dados);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }
      const dadosJSON = await response.json()
      return dadosJSON
    } catch (error) {
      console.error("Erro na requisição: ", error)
      return null
    }
  }