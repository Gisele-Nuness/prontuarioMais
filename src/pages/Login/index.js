import { Text, View, Image, Pressable, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const recuperarDados = async () => {
    try {
      const usuarioSalvo = await AsyncStorage.getItem("dadosUsuario");
      const dados = usuarioSalvo ? JSON.parse(usuarioSalvo) : null;

      if (dados && dados.cpf === cpf && dados.senha === senha) {
        await AsyncStorage.setItem(
          "recuperarDados",
          JSON.stringify({ email, senha })
        );

        setModalMessage("Login realizado com sucesso!");
        setModal(true);
        navigation.navigate("Splash2");
      } else {
        setModalMessage("Credenciais inválidas");
        setModal(true);
      }
    } catch (e) {
      setModalMessage("Erro ao realizar login");
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
          <Pressable style={styles.btn} onPress={recuperarDados}>
            <Text style={styles.txtBtn}>Entrar</Text>
          </Pressable>

          <Pressable style={styles.btnEsqueci}>
            <Text style={styles.txtBtnEsqueci}>Esqueci a senha</Text>
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
