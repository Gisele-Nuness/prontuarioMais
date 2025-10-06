import { Text, View, Image, Pressable, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, ScrollView, TextInput } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import ModalPadrao from "../../Components/Modal";
import { api } from "../../services/api";

export default function Cadastro() {
  const navigation = useNavigation();

  const [cns, setCns] = useState("");
  const [cpf, setCpf] = useState("");

  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const soNumeros = (v) => (v || "").replace(/\D/g, "");

  const procurarCadastro = async () => {
    Keyboard.dismiss();

    const cpfLimpo = soNumeros(cpf);
    const cnsLimpo = soNumeros(cns);

    if (!cpfLimpo && !cnsLimpo) {
      setModal(true);
      setModalMessage("Informe ao menos CPF ou Carteirinha do SUS (CNS).");
      return;
    }
    if (cpfLimpo && cpfLimpo.length !== 11) {
      setModal(true);
      setModalMessage("CPF deve ter 11 dígitos.");
      return;
    }
    if (cnsLimpo && cnsLimpo.length > 20) {
      setModal(true);
      setModalMessage("O Cartão SUS (CNS) deve ter no máximo 20 caracteres.");
      return;
    }

    try {
      setModal(false);
      setModalMessage("");

      let page = 1;
      const perPage = 50;
      let encontrado = null;

      while (true) {
        const resp = await api.get("/pacientes", {
          params: { page, per_page: perPage },
        });

        const payload = resp?.data;
        const lista = payload?.data ?? [];

        encontrado =
          lista.find(
            (p) =>
              (cpfLimpo && soNumeros(p.cpfPaciente) === cpfLimpo) ||
              (cnsLimpo && soNumeros(p.cartaoSusPaciente) === cnsLimpo)
          ) || null;

        if (encontrado) break;

        const current = payload?.current_page ?? page;
        const last = payload?.last_page ?? page;
        if (current >= last) break;

        page = current + 1;
      }

      if (!encontrado) {
        setModalMessage("Paciente não encontrado.");
        setModal(true);
        return;
      }

      const cep = encontrado.cepPaciente;
      const precisaCompletar = !cep || String(cep).trim() === "";

      if (precisaCompletar) {
        setModalMessage("Paciente encontrado, complete seu cadastro.");
        setModal(true);
        navigation.navigate("Cadastro2", {
          pacienteId: encontrado.idPaciente,
          paciente: encontrado,
        });
      } else {
        setModalMessage("Paciente já cadastrado, faça login com sua senha.");
        setModal(true);
        navigation.navigate("Login", {
          cpf: cpfLimpo || null,
          cns: cnsLimpo || null,
        });
      }
    } catch (e) {
      console.error(e);
      setModal(true);
      setModalMessage("Erro ao buscar paciente. Tente novamente.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.navigate("BemVindo");
                }}
              >
                <Text style={styles.txtBtnVoltar}>Voltar</Text>
              </Pressable>

              <Image
                source={require("../../../assets/azul-logo.png")}
                style={styles.logo}
              />

              <Text style={styles.txt}>Primeira vez por aqui?</Text>

              <Text style={styles.txt1}>Informe seu CPF e Carteirinha do SUS</Text>
              <Text style={styles.txt1}>para buscarmos seu cadastro:</Text>

              <View style={styles.containerInputs}>
                <TextInput
                  style={styles.input}
                  placeholder="CPF"
                  value={cpf}
                  onChangeText={setCpf}
                  keyboardType="numeric"
                  returnKeyType="done"
                  onSubmitEditing={Keyboard.dismiss}
                  
                />

                <TextInput
                  style={styles.input}
                  placeholder="Número da Carteirinha do SUS"
                  value={cns}
                  onChangeText={setCns}
                  keyboardType="numeric"
                  returnKeyType="done"
                  onSubmitEditing={Keyboard.dismiss}
                 
                />
              </View>

              <View style={styles.containerBtn}>
                <Pressable
                  style={styles.btn}
                  onPress={procurarCadastro}
                >
                  <Text style={styles.txtBtn}>Próximo</Text>
                </Pressable>
              </View>
            </View>

            <ModalPadrao
              visible={modal}
              onClose={() => setModal(false)}
              modalMessage={modalMessage}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
