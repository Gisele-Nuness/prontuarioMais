import { Text, View, Image, Pressable, Button } from "react-native";
import styles from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import axios from "axios";
import { Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const route = useRoute();
  const dadosIniciais = route.params?.dadosIniciais ?? {};

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const buscarEndereco = async () => {
    if (cep.length === 8) {
      try {
        const response = await axios.get(url);
        setLogradouro(response.data.logradouro || "");
        setBairro(response.data.bairro || "");
        setCidade(response.data.localidade || "");
      } catch (error) {
        setModalMessage("Erro ao buscar dados do CEP");
        setModal(true);
      }
    }
  };

  const salvarDados = async () => {
    if (!cep || !logradouro || !numero || !bairro || !cidade) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const dadosUsuario = {
      ...dadosIniciais,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
    };

    try {
      await AsyncStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
      setLoading(false);
      setModalMessage("Cadastro realizado com sucesso! Faça Login");
      setModal(true);
      navigation.navigate("Login");
    } catch (e) {
      setModalMessage("Erro ao salvar os dados no AsyncStorage");
      setModal(true);
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

        <Text style={styles.txt1}>Complete seu cadastro:</Text>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            placeholder="CEP"
            value={cep}
            onChangeText={setCep}
            onBlur={buscarEndereco}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Logradouro"
            value={logradouro}
            onChangeText={(text) => setLogradouro(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Número"
            value={numero}
            onChangeText={(text) => setNumero(text)}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Bairro"
            value={bairro}
            onChangeText={(text) => setBairro(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Cidade"
            value={cidade}
            onChangeText={(text) => setCidade(text)}
          />
        </View>

        <View style={styles.containerBtn}>
          <Pressable style={styles.btn} onPress={salvarDados}>
            <Text style={styles.txtBtn}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>

      <Modal
        visible={modal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button
              title="Fechar"
              color="#1600a4ff"
              onPress={() => setModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
