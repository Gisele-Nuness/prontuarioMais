// style.js
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

    searchWrapper: {
      width: "100%",
      height: 50,
      backgroundColor: t.colors.primarySoft,
      borderRadius: 30,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 14,
      marginBottom: 16,
      marginTop: 10,
    },

    buscar: {
      flex: 1,
      height: 50,
      color: t.colors.text,
      fontSize: 16,
    },

    iconBuscar: {
      width: 40,
      height: 40,
      marginRight: 8,
      tintColor: isDark ? t.colors.text : t.colors.primary,
    },

    cards: {
      flex: 1,
      width: "100%",
      marginBottom: 16,
    },

    cardsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 12,
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
      shadowOpacity: 0.10,
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
      fontSize: 13,
      opacity: 1,
    },
  });
}
