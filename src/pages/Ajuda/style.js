import { StyleSheet } from "react-native";

export default function makeStyles(t) {
  const isDark = t.name === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.colors.background,
      alignItems: "stretch",
      justifyContent: "flex-start",
      flexDirection: "column",
    },

    main: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 16,
      paddingTop: 20,
      alignItems: "stretch",
    },

    containerTitulo: {
      width: "100%",
      flex: 1,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 10,
    },

    titulo: {
      fontSize: 25,
      color: t.colors.primary,
      fontWeight: "bold",
      letterSpacing: 2,
    },

    iconInterrogacao: {
      width: 50,
      height: 50,
      tintColor: t.colors.primary,
    },

    containerSubTitulo: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },

    subTitulo: {
      fontSize: 20,
      fontWeight: 600,
      color: t.colors.primary,
      alignItems: "center",
      borderBottomWidth: 2,
      borderColor: t.colors.primary,
    },

    historico: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: t.colors.surface,
      borderRadius: 18,
      paddingHorizontal: 14,
      paddingVertical: 12,
      minHeight: 70,
      borderWidth: 1,
      borderColor: t.colors.border,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 7 },
      elevation: 2,
    },

    textos: {
      gap: 4,
    },

    titleText: {
      color: t.colors.primary,
      fontWeight: "700",
      letterSpacing: 0.2,
      fontSize: 18,
      left: 5,
    },

    titleLegend: {
      color: t.colors.text,
      fontWeight: "700",
      letterSpacing: 0.2,
      fontSize: 16,
    },

    legendText: {
      color: t.colors.mutedText,
      fontSize: 15,
      opacity: 1,
      maxWidth: 300,
      marginTop: 5,
    },

    iconTriangulo: {
      width: 18,
      height: 18,
      tintColor: t.colors.primary,
      marginRight: 10,
      transform: [{ rotate: "0deg" }],
      transition: "transform 0.2s ease-in-out", // apenas efeito visual em web
    },
  });
}
