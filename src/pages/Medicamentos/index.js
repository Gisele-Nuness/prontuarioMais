import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CartaoSUS from "../../Components/CartaoSUS";
import ModalPadrao from "../../Components/Modal";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  Modal,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import makeStyles from "./style";
import React, { useState, useEffect } from "react";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
let DateTimePicker = null;
if (Platform.OS !== "web") {
  DateTimePicker = require("@react-native-community/datetimepicker").default;

}
import { useNotifications } from "../../Context/NotificationContext";

export default function Medicamentos() {
  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);
  const [modalLembrete, setModalLembrete] = useState(false);
  const [horarios, setHorarios] = useState([]);
  const [novoHorario, setNovoHorario] = useState(new Date());
  const [dias, setDias] = useState("1");
  const [remedioSelecionado, setRemedioSelecionado] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { notificacoes, adicionarNotificacao } = useNotifications();
  const styles = useThemedStyles(makeStyles);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  }, []);

  const remedios = [
    {
      id: "1",
      nome: "Loratadina",
      dosagem: "Comprimido 10mg",
      frequencia: "1 vez ao dia",
      periodo: "30 dias",
    },
    {
      id: "2",
      nome: "Paracetamol",
      dosagem: "Comprimido 500mg",
      frequencia: "2 vezes ao dia",
      periodo: "5 dias",
    },
    {
      id: "3",
      nome: "Ibuprofeno",
      dosagem: "Comprimido 400mg",
      frequencia: "3 vezes ao dia",
      periodo: "7 dias",
    },
    {
      id: "4",
      nome: "Dipirona",
      dosagem: "40 gotas",
      frequencia: "1 vez ao dia",
      periodo: "10 dias",
    },
  ];

  const abrirModalLembrete = (remedio) => {
    setRemedioSelecionado(remedio);
    setHorarios([]);
    setDias("1");
    setModalLembrete(true);
  };

  const adicionarHorario = () => {
    setHorarios([...horarios, novoHorario]);
  };

const salvarLembrete = async () => {
  if (!remedioSelecionado || horarios.length === 0) return;

  const totalDias = parseInt(dias);

  for (let i = 0; i < totalDias; i++) {
    horarios.forEach(async (hora) => {
      const horarioNotificacao = new Date();
      horarioNotificacao.setDate(horarioNotificacao.getDate() + i);
      horarioNotificacao.setHours(hora.getHours());
      horarioNotificacao.setMinutes(hora.getMinutes());
      horarioNotificacao.setSeconds(0);

      const horaFormatada = hora.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // adiciona no contexto global
      adicionarNotificacao({
        nome: remedioSelecionado.nome,
        horario: horaFormatada,
      });

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "💊 Hora do remédio!",
          body: `${remedioSelecionado.nome} às ${horaFormatada}`,
        },
        trigger: horarioNotificacao,
      });
    });
  }

  setModalLembrete(false);
  setModal(true);
  setModalMessage("Lembretes configurados com sucesso!");
};


  const CardRemedio = ({ remedio }) => {
    return (
      <View style={styles.historico}>
        <View style={styles.containerRemedios}>
          <View style={styles.textos}>
            <Text style={styles.titleLegend}>{remedio.nome}</Text>
            <Text style={styles.legendText}>Dosagem: {remedio.dosagem}</Text>
            <Text style={styles.legendText}>
              Frequência: {remedio.frequencia}
            </Text>
            <Text style={styles.legendText}>Período: {remedio.periodo}</Text>
          </View>
          <Pressable onPress={() => abrirModalLembrete(remedio)}>
            <Image
              source={require("../../../assets/alarme.png")}
              style={styles.iconAlarme}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header notificacoes={notificacoes} />
      <View style={styles.main}>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Meus Medicamentos</Text>
          <Image
            source={require("../../../assets/medicamento.png")}
            style={styles.iconRemedio}
          />
        </View>

        <FlatList
          data={remedios}
          keyExtractor={(remedio) => remedio.id}
          renderItem={({ item }) => <CardRemedio remedio={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Footer
        setModalSUSVisivel={setModalSUSVisivel}
        susSelected={modalSUSVisivel}
      />

      <Modal visible={modalLembrete} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000000aa",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 15,
              width: "85%",
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Lembrete para {remedioSelecionado?.nome}
            </Text>

            <ScrollView>
              {horarios.map((h, idx) => (
                <Text key={idx}>
                  ⏰{" "}
                  {h.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              ))}

              {Platform.OS !== "web" && (
                <DateTimePicker
                  value={novoHorario}
                  mode="time"
                  onChange={(e, date) => setNovoHorario(date)}
                />
              )}

              <Button title="Adicionar horário" onPress={adicionarHorario} />

              <Text style={{ marginTop: 10 }}>Por quantos dias?</Text>
              <TextInput
                value={dias}
                onChangeText={setDias}
                keyboardType="numeric"
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  padding: 8,
                  marginVertical: 5,
                }}
              />

              <Button title="Salvar lembrete" onPress={salvarLembrete} />
              <Button
                title="Cancelar"
                color="red"
                onPress={() => setModalLembrete(false)}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>

      <ModalPadrao
        visible={modal}
        onClose={() => setModal(false)}
        modalMessage={modalMessage}
      />

      <CartaoSUS
        visivel={modalSUSVisivel}
        aoFechar={() => setModalSUSVisivel(false)}
        frenteSrc={require("../../../assets/cartao-frente.png")}
        versoSrc={require("../../../assets/cartao-verso.jpg")}
      />
    </View>
  );
}
