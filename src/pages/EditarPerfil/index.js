import { Text, View, Image, Pressable, Button, ScrollView } from "react-native";
import styles from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import Footer from "../Footer";

export default function EditarPerfil() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [imagem, setImagem] = useState(null);

  const route = useRoute();
  const dadosUsuario = route.params?.dadosUsuario ?? {};

  React.useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await AsyncStorage.getItem("dadosUsuario");
        if (dados) {
          const usuario = JSON.parse(dados);
          setNome(usuario.nome || "");
          setCpf(usuario.cpf || "");
          setSenha(usuario.senha || "");
          setEmail(usuario.email || "");
          setDataNasc(usuario.dataNasc || "");
          setImagem(usuario.imagem || null);
        } else {
          setNome(dadosUsuario.nome || "");
          setCpf(dadosUsuario.cpf || "");
          setSenha(dadosUsuario.senha || "");
          setEmail(dadosUsuario.email || "");
          setDataNasc(dadosUsuario.dataNasc || "");
          setImagem(dadosUsuario.imagem || null); 
        }
      } catch (e) {}
    };
    carregarDados();
  }, []);

  const solicitarPermissoes = async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    const galeria = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (camera.status !== "granted" || galeria.status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "é necessário permitir acesso á camera e galeria."
      );
      return false;
    }

    return true;
  };

  const tirarFoto = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  const escolherDaGaleria = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

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
    if (!isValidDateBR(dataNasc)) {
      setModalMessage(
        "Data inválida. Use o formato DD/MM/AAAA e uma data válida."
      );
      setModal(true);
      return;
    }
    const dadosIniciais = { nome, cpf, senha, email, dataNasc, imagem };
    await AsyncStorage.setItem("dadosUsuario", JSON.stringify(dadosIniciais));
    setModalMessage("Dados atualizados com sucesso!");
    setModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => escolherDaGaleria()}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.imagem} />
          ) : (
            <Image
              source={require("../../../assets/galeria.png")}
              style={styles.imgPerfil}
            />
          )}
        </Pressable>
      </View>

      <View style={styles.main}>
        <Pressable
          style={styles.btnVoltar}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.txtBtnVoltar}>Voltar</Text>
        </Pressable>

        <View style={styles.containerInputs}>
          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              placeholder={nome}
              value={nome}
              onChangeText={setNome}
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              style={styles.input}
              placeholder={cpf}
              value={cpf}
              editable={false}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Sua data de nascimento</Text>
            <TextInput
              style={styles.input}
              placeholder={dataNasc}
              value={dataNasc}
              editable={false}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Sua senha</Text>
            <TextInput
              style={styles.input}
              placeholder={senha}
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />

            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={email}
              value={email}
              onChangeText={setEmail}
            />

            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>
        </View>

        <View style={styles.containerBtn}>
          <Pressable style={styles.btn} onPress={salvarDados}>
            <Text style={styles.txtBtn}>Salvar</Text>
          </Pressable>
        </View>
      </View>

      <Footer />

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
