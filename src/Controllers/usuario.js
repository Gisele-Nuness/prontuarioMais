import { api } from "../../src/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getPublicBaseURL = () => {
  const base = api?.defaults?.baseURL || "";
  if (!base) return "";
  try {
    const u = new URL(base);
    return u.origin;
  } catch (e) {
    return base.replace(/\/api\/?$/, "").replace(/\/$/, "");
  }
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

  const foto = data?.fotoPaciente || "";
  let imagem = "";
  if (foto) {
    const isHttp = /^https?:\/\//i.test(foto);
    const publicBase = getPublicBaseURL();
    imagem = isHttp ? foto : `${publicBase}/storage/${foto}`;
  }

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
    imagem,
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
  await AsyncStorage.multiRemove([
    "@pacienteId",
    "@pacienteNome",
    "@authToken",
  ]);

  return {
    ok: true,
    status: resp?.status ?? 204,
    message: "Paciente deletado com sucesso.",
  };
}
