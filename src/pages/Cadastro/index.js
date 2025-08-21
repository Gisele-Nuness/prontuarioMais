import { Text, View, Image, Pressable, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import { Modal } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const maskDateBR = (value) => {
    const v = value.replace(/\D/g, "").slice(0, 8);
    const dia = v.slice(0, 2);
    const mes = v.slice(2, 4);
    const ano = v.slice(4, 8);
    return [dia, mes, ano].filter(Boolean).join("/");
  };

  const isValidDateBR = (s) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(s)) return false;
    const [dd, mm, yyyy] = s.split("/").map(Number);
    const d = new Date(yyyy, mm - 1, dd);

    if (
      d.getFullYear() !== yyyy ||
      d.getMonth() !== mm - 1 ||
      d.getDate() !== dd
    )
      return false;

    const hoje = new Date();
    if (d > hoje) return false;
    const limite = new Date(
      hoje.getFullYear() - 120,
      hoje.getMonth(),
      hoje.getDate()
    );
    if (d < limite) return false;

    return true;
  };

  const salvarDados = async () => {
    if (!nome || !cpf || !senha || !email || !dataNasc) {
      setModalMessage("Por favor, preencha todos os campos.");
      setModal(true);
      return;
    }

    if (!isValidDateBR(dataNasc)) {
      setModalMessage(
        "Data inválida. Use o formato DD/MM/AAAA e uma data válida."
      );
      setModal(true);
      return;
    }

    const dadosIniciais = { nome, cpf, senha, email, dataNasc };
    navigation.navigate("Cadastro2", { dadosIniciais });
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

        <Text style={styles.txt1}>Faça seu cadastro:</Text>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            placeholder="Seu nome completo"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
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

          <TextInput
            style={styles.input}
            placeholder="Seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Sua data de nascimento"
            value={dataNasc}
            onChangeText={(text) => setDataNasc(maskDateBR(text))}
          />
        </View>

        <View style={styles.containerBtn}>
          <Pressable style={styles.btn} onPress={salvarDados}>
            <Text style={styles.txtBtn}>Próximo</Text>
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
