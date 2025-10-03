import {
  Text,
  View,
  Image,
  Pressable,
  Button,
  ScrollView,
  TextInput,
  Modal,
  ActivityIndicator,
} from "react-native";
import styles from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import axios from "axios";
import { api } from "../../services/api";
import ModalPadrao from "../../Components/Modal";

export default function Cadastro2() {
  const navigation = useNavigation();
  const route = useRoute();

  const pacienteId = route.params?.pacienteId;

  const [step, setStep] = useState(1);

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [uf, setUf] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const urlViaCep = `https://viacep.com.br/ws/${cep}/json/`;

  const buscarEndereco = async () => {
    const cepLimpo = (cep || "").replace(/\D/g, "");
    if (cepLimpo.length === 8) {
      try {
        const { data } = await axios.get(urlViaCep);
        if (data?.erro) return abrirModal("CEP não encontrado.");
        setLogradouro(data.logradouro || "");
        setBairro(data.bairro || "");
        setCidade(data.localidade || "");
        setEstado(data.estado || "");
        setUf(data.uf || "");
      } catch {
        setModal(true);
        setModalMessage("Erro ao buscar dados do CEP.");
      }
    }
  };

  const validarEndereco = () => {
    if (
      !cep ||
      !logradouro ||
      !numero ||
      !bairro ||
      !cidade ||
      !estado ||
      !uf
    ) {
      setModal(true);
      setModalMessage("Preencha todos os campos.");
      return false;
    }
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
      setModal(true);
      setModalMessage("CEP deve ter 8 dígitos.");
      return false;
    }
    return true;
  };

  const validarCredenciais = () => {
    if (!email || !senha || !confirmaSenha) {
      setModal(true);
      setModalMessage("Preencha todos os campos.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setModal(true);
      setModalMessage("Digite um e-mail válido.");
      return false;
    }
    if (senha.length < 6) {
      setModal(true);
      setModalMessage("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }
    if (senha !== confirmaSenha) {
      setModal(true);
      setModalMessage("As senhas não conferem.");
      return false;
    }
    return true;
  };

  const handleProximo = () => {
    if (!validarEndereco()) return;
    setStep(2);
  };

  const salvarDados = async () => {
    if (!pacienteId) {
      setModal(true);
      setModalMessage("Paciente não identificado. Volte e refaça a busca.");
      return;
    }
    if (!validarCredenciais()) return;

    const payload = {
      cepPaciente: cep,
      logradouroPaciente: logradouro,
      numLogradouroPaciente: numero,
      bairroPaciente: bairro,
      cidadePaciente: cidade,
      estadoPaciente: estado,
      ufPaciente: uf,
      emailPaciente: email,
      senhaPaciente: senha,
    };

    try {
      setLoading(true);
      await api.put(`/pacientes/${pacienteId}`, payload);
      setModal(true);
      setModalMessage("Cadastro criado com sucesso! Faça login.");
      navigation.navigate("Login");
    } catch (e) {
      setModal(true);
      setModalMessage("Erro ao salvar no servidor. Tente novamente.");
    } finally {
      setLoading(false);
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
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.txtBtnVoltar}>Voltar</Text>
        </Pressable>

        <Image
          source={require("../../../assets/azul-logo.png")}
          style={styles.logo}
        />

        <ScrollView
          contentContainerStyle={styles.containerInputs}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.txt1}>
            {step === 1 ? "Cadastre seu endereço:" : "Crie suas credenciais:"}
          </Text>
          {step === 1 ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="CEP (8 dígitos)"
                value={cep}
                onChangeText={setCep}
                onBlur={buscarEndereco}
                keyboardType="numeric"
                maxLength={9}
              />
              <TextInput
                style={styles.input}
                placeholder="Logradouro"
                value={logradouro}
                onChangeText={setLogradouro}
              />
              <TextInput
                style={styles.input}
                placeholder="Número"
                value={numero}
                onChangeText={setNumero}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Bairro"
                value={bairro}
                onChangeText={setBairro}
              />
              <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={cidade}
                onChangeText={setCidade}
              />

              <TextInput
                style={styles.input}
                placeholder="Estado"
                value={estado}
                onChangeText={setEstado}
              />

              <TextInput
                style={styles.input}
                placeholder="UF"
                value={uf}
                onChangeText={setUf}
              />
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                placeholder="Confirme sua senha"
                secureTextEntry
              />
            </>
          )}
        </ScrollView>

        <View style={styles.containerBtn}>
          {step === 1 ? (
            <Pressable style={styles.btn} onPress={handleProximo}>
              <Text style={styles.txtBtn}>Próximo</Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.btn}
              onPress={salvarDados}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.txtBtn}>Cadastrar</Text>
              )}
            </Pressable>
          )}
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
