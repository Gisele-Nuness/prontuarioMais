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
  StyleSheet, // ADICIONADO
} from "react-native";
import makeStyles from "./style";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../../Components/Footer";
import CartaoSUS from "../../Components/CartaoSUS";
import { ModalEscolhaFoto } from "../../Controllers/foto";
import { api } from "../../services/api";
import { buscarConta } from "../../Controllers/usuario";
import { Picker } from "@react-native-picker/picker";
import Data from "../../Controllers/data";

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
  const [abrirEscolhaFoto, setAbrirEscolhaFoto] = useState(false);

  // ADICIONADO: Estado para controlar o modal do gênero
  const [generoModalVisivel, setGeneroModalVisivel] = useState(false);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cns, setCns] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");

  const [senha, setSenha] = useState({
    novaSenha: "",
    confirmaSenha: "",
  });

  const abrirModal = (msg) => {
    setModalMessage(msg);
    setModal(true);
  };

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarConta(routePacienteId);
        setNome(dados.nome);
        setCpf(dados.cpf);
        setCns(dados.cns);
        setTelefone(dados.telefone);
        setEmail(dados.email);
        setDataNasc(Data.formatarDataBR(dados.dataNasc));
        setGenero(dados.genero);
        setImagem(dados.imagem);
      } catch (e) {
        abrirModal(e.message || "Não foi possível carregar seu perfil.");
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [routePacienteId]);

  const salvarDados = async () => {
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      abrirModal("Digite um e-mail válido.");
      return;
    }
    if (senha.novaSenha) {
      if (senha.novaSenha.length < 6) {
        abrirModal("A nova senha deve ter pelo menos 6 caracteres.");
        return;
      }
      if (senha.novaSenha !== senha.confirmaSenha) {
        abrirModal("As senhas não coincidem.");
        return;
      }
    }

    try {
      setSalvando(true);
      const storedId = await AsyncStorage.getItem("@pacienteId");
      const pacienteId = routePacienteId ?? storedId;
      if (!pacienteId) {
        abrirModal("Sessão expirada. Faça login novamente.");
        return;
      }

      const payload = new FormData();

      if (imagem && !/^https?:\/\//i.test(imagem)) {
        try {
          if (Platform.OS === "web" && imagem.startsWith("blob:")) {
            const resp = await fetch(imagem);
            const blob = await resp.blob();
            const ext = (blob.type && blob.type.split("/")[1]) || "jpg";
            const file = new File([blob], `foto.${ext}`, {
              type: blob.type || "image/jpeg",
            });
            payload.append("fotoPaciente", file);
          } else if (Platform.OS !== "web" && !/^https?:\/\//i.test(imagem)) {
            const uri =
              Platform.OS === "ios" ? imagem.replace("file://", "") : imagem;
            payload.append("fotoPaciente", {
              uri,
              type: "image/jpeg",
              name: "foto.jpg",
            });
          }
        } catch (err) {
          console.warn("Falha ao preparar a imagem:", err);
        }
      }

      payload.append("nomePaciente", nome ?? "");
      payload.append("telefonePaciente", telefone ?? "");
      payload.append("emailPaciente", email ?? "");
      payload.append("generoPaciente", genero ?? "");

      if (senha.novaSenha) {
        payload.append("senhaPaciente", senha.novaSenha);
      }

      payload.append("_method", "PUT");

      await api.post(`/pacientes/${pacienteId}`, payload);
      abrirModal("Perfil atualizado com sucesso!");
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        (e?.response?.data?.errors &&
          Object.values(e.response.data.errors).flat().join("\n")) ||
        e?.response?.data?.error ||
        "Não foi possível atualizar seu perfil.";
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
        <Text style={{ marginTop: 8 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => setAbrirEscolhaFoto(true)}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.imagem} />
          ) : (
            <Image
              source={require("../../../assets/editar-perfil.png")}
              style={styles.imgPerfil}
            />
          )}
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.containerInputs}>
        <Pressable
          style={styles.btnVoltar}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={styles.txtBtnVoltar}>Voltar</Text>
        </Pressable>

        <Text style={styles.titulo}>Editar Perfil</Text>

        <View style={{ gap: 20 }}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />
          <Image
            source={require("../../../assets/ferramenta-lapis.png")}
            style={styles.imgLapis}
          />
        </View>

        <View style={{ gap: 20 }}>
          <Text style={styles.label}>CPF</Text>
          <TextInput style={styles.input} value={cpf} editable={false} />
        </View>

        <View style={{ gap: 20 }}>
          <Text style={styles.label}>CNS</Text>
          <TextInput style={styles.input} value={cns} editable={false} />
        </View>

        <View style={{ gap: 20 }}>
          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            value={Data.maskDateBR(dataNasc)}
            editable={false}
          />
        </View>

        <View style={{ gap: 25 }}>
          <Text style={styles.label}>Gênero</Text>
          <Pressable
            style={styles.input}
            onPress={() => setGeneroModalVisivel(true)}
          >
            <Text style={styles.pickerText}>
              {genero || "Selecione o gênero"}
            </Text>
          </Pressable>
        </View>

        <View style={{ gap: 20 }}>
          <Text style={styles.label}>Nova Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Nova senha (opcional)"
            secureTextEntry
            value={senha.novaSenha}
            onChangeText={(v) => setSenha((s) => ({ ...s, novaSenha: v }))}
          />
          <Image
            source={require("../../../assets/ferramenta-lapis.png")}
            style={styles.imgLapis}
          />
        </View>

        <View style={{ gap: 20 }}>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            secureTextEntry
            value={senha.confirmaSenha}
            onChangeText={(v) => setSenha((s) => ({ ...s, confirmaSenha: v }))}
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
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Image
            source={require("../../../assets/ferramenta-lapis.png")}
            style={styles.imgLapis}
          />
        </View>

        <View style={{ gap: 20 }}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
          <Image
            source={require("../../../assets/ferramenta-lapis.png")}
            style={styles.imgLapis}
          />
        </View>
      </ScrollView>

      <View style={styles.containerBtn}>
        <Pressable style={styles.btn} onPress={salvarDados} disabled={salvando}>
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

      <Modal
        transparent={true}
        visible={generoModalVisivel}
        animationType="slide"
        onRequestClose={() => setGeneroModalVisivel(false)}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setGeneroModalVisivel(false)}
        >
          <View style={styles.pickerContent}>

            {Platform.OS === "web" ? (
              <View>
                <Text style={styles.webPickerTitle}>
                  Selecione o gênero
                </Text>
                {["Feminino", "Masculino", "Não binário", "Outro"].map(
                  (item) => (
                    <Pressable
                      key={item}
                      style={[
                        styles.webPickerOption,
                        genero === item && styles.webPickerOptionSelected,
                      ]}
                      onPress={() => {
                        setGenero(item);
                        setGeneroModalVisivel(false);
                      }}
                    >
                      <Text style={styles.webPickerOptionText}>
                        {item}
                      </Text>
                    </Pressable>
                  )
                )}
              </View>
            ) : (
      
              <>
                <Picker
                  selectedValue={genero}
                  onValueChange={(itemValue) => {
                    if (itemValue) {
                      setGenero(itemValue);
                    }
                  }}
                  style={{ color: "#000" }}
                >
                  <Picker.Item
                    label="Selecione o gênero"
                    value=""
                    color="#000000"
                  />
                  <Picker.Item
                    label="Feminino"
                    value="Feminino"
                    color="#000000"
                  />
                  <Picker.Item
                    label="Masculino"
                    value="Masculino"
                    color="#000000"
                  />
                  <Picker.Item
                    label="Não binário"
                    value="Não binário"
                    color="#000000"
                  />
                  <Picker.Item label="Outro" value="Outro" color="#000000" />
                </Picker>
                <Button
                  title="Confirmar"
                  onPress={() => setGeneroModalVisivel(false)}
                />
              </>
            )}
          </View>
        </Pressable>
      </Modal>

      <CartaoSUS
        visivel={modalSUSVisivel}
        aoFechar={() => setModalSUSVisivel(false)}
        frenteSrc={require("../../../assets/cartao-frente.png")}
        versoSrc={require("../../../assets/cartao-verso.png")}
      />

      <ModalEscolhaFoto
        visivel={abrirEscolhaFoto}
        aoFechar={() => setAbrirEscolhaFoto(false)}
        setImagem={setImagem}
        setAbrirEscolhaFoto={setAbrirEscolhaFoto}
      />
    </View>
  );
}
