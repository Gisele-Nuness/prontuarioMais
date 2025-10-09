import { StyleSheet } from "react-native";

export default function makeStyles(t) {
  const isDark = t.name === "dark";

  return StyleSheet.create({
    header: {
      width: "100%",
      backgroundColor: isDark ? t.colors.surface : t.colors.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: t.colors.border,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 4 },
      elevation: 2,
      paddingVertical: 20,
      paddingHorizontal: 15,
    },

    containerPerfil: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      flex: 1,
    },

    nome: {
      color: isDark ? t.colors.text : t.colors.background,
      fontSize: 16,
      fontWeight: "bold",
      flex: 1,
    },

    containerIcons: {
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      justifyContent: "flex-end",
    },

    iconPerfil: {
      width: 72,
      height: 72,
      borderRadius: 50,
    },

    icons: {
      width: 24,
      height: 24,
      tintColor: isDark ? t.colors.text : t.colors.background,
    },

    badge: {
      position: "absolute",
      top: -5,
      right: -8,
      backgroundColor: "red",
      borderRadius: 8,
      width: 16,
      height: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    badgeText: {
      color: "#fff",
      fontSize: 10,
      fontWeight: "bold",
    },
    modalFundo: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.6)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalConteudo: {
      backgroundColor: "#fff",
      borderRadius: 15,
      padding: 20,
      width: "85%",
    },
    modalTitulo: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },
    notificacaoItem: {
      borderBottomWidth: 1,
      borderColor: "#eee",
      paddingVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginBottom: 8,
    },

    comprimidoIcon: {
      width: 24,
      height: 24,
      marginBottom: 4,
    },
    btnFechar: {
      marginTop: 15,
      backgroundColor: t.colors.primary,
      padding: 10,
      borderRadius: 8,
    },
    btnFecharTexto: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
    },

    modal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.84)",
    },

    modalContainer: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      width: "80%",
      height: 200,
      alignItems: "center",
      justifyContent: "center",
    },

    modalText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: "center",
    },

    btnExcluir: {
      marginTop: 15,
      backgroundColor: "#E02416",
      padding: 10,
      borderRadius: 8,
    },
  });
}
