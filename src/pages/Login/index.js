import { Text, View, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";

export default function Login() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

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
        <Pressable style={styles.btnVoltar} onPress={() => navigation.navigate("BemVindo")}>
          <Text style={styles.txtBtnVoltar}>Voltar</Text>
        </Pressable>

        <Image
          source={require("../../../assets/azul-logo.png")}
          style={styles.logo}
        />

        <Text style={styles.txt1}>
          Informe seu CPF e senha para entrar:
        </Text>

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
          <Pressable style={styles.btn}>
            <Text style={styles.txtBtn}>Entrar</Text>
          </Pressable>

          <Pressable style={styles.btnEsqueci}>
            <Text style={styles.txtBtnEsqueci}>Esqueci a senha</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
