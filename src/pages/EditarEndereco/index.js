// src/Screens/EditarPerfil/index.jsx
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  Button,
  ScrollView,
  TextInput,
  Modal,
  Platform,
  ActivityIndicator,
} from "react-native";
import makeStyles from "./style";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../../Components/Footer";
import CartaoSUS from "../../Components/CartaoSUS";
import { api } from "../../services/api";
import { buscarConta } from "../../Controllers/usuario";
import { Picker } from "@react-native-picker/picker";
import Data from "../../Controllers/data";
import Header from "../../Components/Header";

export default function EditarPerfil() {
  const navigation = useNavigation();
  const route = useRoute();
  const styles = useThemedStyles(makeStyles);

  const routePacienteId = route.params?.pacienteId;

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);

  const [dados, setDados] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    uf: "",
  });

  const abrirModal = (msg) => {
    setModalMessage(msg);
    setModal(true);
  };

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarConta(routePacienteId);
        setDados(dados);
      } catch (e) {
        abrirModal(e.message || "Não foi possível carregar seu perfil.");
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [routePacienteId]);

  const buscarEndereco = async () => {
    const cepLimpo = (dados.cep || "").replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;

    try {
      const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
      const response = await axios.get(url);
      if (response.data?.erro) {
        abrirModal({ visivel: true, texto: "CEP não encontrado." });
        return;
      }
      setDados((prev) => ({
        ...prev,
        logradouro: response.data.logradouro || "",
        bairro: response.data.bairro || "",
        cidade: response.data.localidade || "",
        estado: response.data.estado || "",
        uf: response.data.uf || "",
      }));
    } catch (error) {
      abrirModal({ visivel: true, texto: "Erro ao buscar dados do CEP." });
    }
  };

  const salvarDados = async () => {
    try {
      setSalvando(true);
      const storedId = await AsyncStorage.getItem("@pacienteId");
      const pacienteId = routePacienteId ?? storedId;
      if (!pacienteId) {
        abrirModal("Sessão expirada. Faça login novamente.");
        return;
      }

      const payload = new FormData();
      payload.append("cepPaciente", dados.cep);
      payload.append("logradouroPaciente", dados.logradouro);
      payload.append("numLogradouroPaciente", dados.numero);
      payload.append("bairroPaciente", dados.bairro);
      payload.append("cidadePaciente", dados.cidade);
      payload.append("estadoPaciente", dados.estado);
      payload.append("ufPaciente", dados.uf);

      payload.append("_method", "PUT");

      await api.post(`/pacientes/${pacienteId}`, payload);
      abrirModal("Endereço atualizado com sucesso!");
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        (e?.response?.data?.errors &&
          Object.values(e.response.data.errors).flat().join("\n")) ||
        e?.response?.data?.error ||
        "Não foi possível atualizar seu endereço.";
      abrirModal(msg);
    } finally {
      setSalvando(false);
    }
  };

  if (carregando) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator />
        <Text style={styles.carregando}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.main}>
        <Pressable
          style={styles.btnVoltar}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.txtBtnVoltar}>Voltar</Text>
        </Pressable>

        <Text style={styles.titulo}>Editar Endereço</Text>

        <ScrollView contentContainerStyle={styles.containerInputs}>
          <View style={{ gap: 20 }}>
            <Text style={styles.label}>CEP</Text>
            <TextInput
              style={styles.input}
              value={dados.cep || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, cep: txt }))}
              onBlur={buscarEndereco}
              placeholder="CEP"
              keyboardType="numeric"
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Logradouro</Text>
            <TextInput
              style={styles.input}
              value={dados.logradouro || ""}
              onChangeText={(txt) =>
                setDados((p) => ({ ...p, logradouro: txt }))
              }
              placeholder="Logradouro"
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Número</Text>
            <TextInput
              style={styles.input}
              value={dados.numero || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, numero: txt }))}
              placeholder="Número"
              keyboardType="number-pad"
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Bairro</Text>
            <TextInput
              style={styles.input}
              value={dados.bairro || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, bairro: txt }))}
              placeholder="Bairro"
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              value={dados.cidade || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, cidade: txt }))}
              placeholder="Cidade"
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>Estado</Text>
            <TextInput
              style={styles.input}
              value={dados.estado || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, estado: txt }))}
              placeholder="Estado"
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.label}>UF</Text>
            <TextInput
              style={styles.input}
              value={dados.uf || ""}
              onChangeText={(txt) => setDados((p) => ({ ...p, uf: txt }))}
              placeholder="UF"
            />
            <Image
              source={require("../../../assets/ferramenta-lapis.png")}
              style={styles.imgLapis}
            />
          </View>
        </ScrollView>
          </View>

        <View style={styles.containerBtn}>
          <Pressable
            style={styles.btn}
            onPress={salvarDados}
            disabled={salvando}
          >
            <Text style={styles.txtBtn}>
              {salvando ? "Salvando..." : "Salvar"}
            </Text>
          </Pressable>
        </View>
    

      <Footer
        setModalSUSVisivel={setModalSUSVisivel}
        susSelected={modalSUSVisivel}
      />

      <Modal
        visible={modal}
        animationType="fade"
        transparent
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

      <CartaoSUS
        visivel={modalSUSVisivel}
        aoFechar={() => setModalSUSVisivel(false)}
        frenteSrc={require("../../../assets/cartao-frente.png")}
        versoSrc={require("../../../assets/cartao-verso.jpg")}
      />
    </View>
  );
}
