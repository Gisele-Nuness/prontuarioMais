import { Text, View, Image, Pressable, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalPadrao from "../../Components/Modal";
import { api } from "../../services/api";

export default function Login() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

const soNumeros = (v) => (v || "").replace(/\D/g, "");

const entrar = async () => {
  const cpfLimpo = soNumeros(cpf);
  
  if (!cpfLimpo || !senha) {
    setModal(true);
    setModalMessage("Informe CPF e senha.");
    return;
  }

  if (cpfLimpo.length !== 11) {
    setModal(true);
    setModalMessage("CPF deve ter 11 dígitos.");
    return;
  }

  if (senha.length < 6) {
    setModal(true);
    setModalMessage("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  try {
    const resp = await api.post("/pacientes/login", {
      cpfPaciente: cpfLimpo,
      senhaPaciente: senha,
    });

    const { token, paciente } = resp?.data ?? {};
    if (token && paciente) {
      await AsyncStorage.multiSet([
        ["@authToken", token],
        ["@pacienteId", String(paciente.idPaciente)],
        ["@pacienteNome", paciente.nomePaciente ?? ""],
        ["@pacienteCpf", cpfLimpo],
      ]);

      setModalMessage("Login realizado com sucesso!");
      setModal(true);
      navigation.navigate("Splash2");
    } else {
      setModal(true);
      setModalMessage("Credenciais inválidas.");
    }
  } catch (e) {
    if (e?.response?.status === 401) {
      setModal(true);
      setModalMessage("Credenciais inválidas.");
      return;
    }
    setModal(true);
    setModalMessage("Erro ao realizar login. Tente novamente.");
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerHora}>
          <Text style={styles.hora}>14:44</Text>
        </View>

        <View style={styles.containerIcons}>
          <Image
            source={require("../../../assets/sinal-de-rede.png")}
            style={styles.icons}
          />

          <Image
            source={require("../../../assets/sinal-wifi.png")}
            style={styles.icons}
          />

          <Image
            source={require("../../../assets/barra-de-bateria.png")}
            style={styles.icons}
          />
        </View>
      </View>

      <View style={styles.main}>
        <Pressable
          style={styles.btnVoltar}
          onPress={() => navigation.navigate("BemVindo")}
        >
          <Text style={styles.txtBtnVoltar}>Voltar</Text>
        </Pressable>

        <Image
          source={require("../../../assets/azul-logo.png")}
          style={styles.logo}
        />

        <Text style={styles.txt1}>Informe seu CPF e senha para entrar:</Text>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
        </View>

        <View style={styles.containerBtn}>
          <Pressable style={styles.btn} onPress={entrar}>
            <Text style={styles.txtBtn}>Entrar</Text>
          </Pressable>

          <Pressable style={styles.btnEsqueci}>
            <Text style={styles.txtBtnEsqueci}>Esqueci a senha</Text>
          </Pressable>
        </View>
      </View>

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={modalMessage}
      />

    </View>
  );
}
