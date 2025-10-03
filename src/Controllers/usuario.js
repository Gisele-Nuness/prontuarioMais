// controllers/paciente.js
import { api } from "../../src/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

// pega a origin do baseURL do axios (ex.: http://localhost:8000)
const getOrigin = () => {
  const base = api?.defaults?.baseURL || "";
  if (!base) return "";
  try {
    return new URL(base).origin;
  } catch {
    return base.replace(/\/api\/?$/, "").replace(/\/$/, "");
  }
};

// monta URL pública para arquivo salvo em storage/app/public
const storageUrl = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path; // já é URL completa
  return `${getOrigin()}/storage/${path}`.replace(/([^:]\/)\/+/g, "$1");
};

/**
 * Busca o perfil do paciente.
 * Se pacienteIdParam não vier, usa @pacienteId do AsyncStorage.
 */
export async function buscarConta(pacienteIdParam) {
  const stored = await AsyncStorage.getItem("@pacienteId");
  const pacienteId = pacienteIdParam ?? stored;
  if (!pacienteId) throw new Error("Sessão expirada. Faça login novamente.");

  const { data } = await api.get(`/pacientes/${pacienteId}`);

  return {
    id: data?.idPaciente,
    nome: data?.nomePaciente || "",
    dataNasc: data?.dataNascPaciente || "",
    cpf: data?.cpfPaciente || "",
    cns: data?.cartaoSusPaciente || "",
    telefone: data?.telefonePaciente || "",
    genero: data?.generoPaciente || "",
    cep: data?.cepPaciente || "",
    logradouro: data?.logradouroPaciente || "",
    numero: data?.numLogradouroPaciente || "",
    bairro: data?.bairroPaciente || "",
    cidade: data?.cidadePaciente || "",
    estado: data?.estadoPaciente || "",
    uf: data?.ufPaciente || "",
    email: data?.emailPaciente || "",
    imagem: storageUrl(data?.fotoPaciente || ""), // <- simples e direto
  };
}

/**
 * Exclui a conta do paciente.
 */
export async function excluirConta(pacienteIdParam) {
  const stored = await AsyncStorage.getItem("@pacienteId");
  const pacienteId = pacienteIdParam ?? stored;
  if (!pacienteId) throw new Error("Sessão expirada. Faça login novamente.");

  const resp = await api.delete(`/pacientes/${pacienteId}`);
  await AsyncStorage.multiRemove(["@pacienteId", "@pacienteNome", "@authToken"]);

  return {
    ok: true,
    status: resp?.status ?? 204,
    message: "Paciente deletado com sucesso.",
  };
}
