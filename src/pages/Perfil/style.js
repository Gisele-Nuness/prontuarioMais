import { StyleSheet } from "react-native";

export default function makeStyles(t) {
  const isDark = t.name === "dark";

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.colors.background,
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      overflow: "hidden",
    },

    main: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 16,
      paddingTop: 20,
      alignItems: "stretch",
    },

    cards: {
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
      minHeight: 70,
      borderWidth: 1,
      borderColor: t.colors.border,
      shadowColor: "#000",
      shadowOpacity: 0.10,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 7 },
      elevation: 4,
    },

    textos: {
      gap: 4,
    },

    titleText: {
      color: t.colors.primary,
      fontWeight: "700",
      letterSpacing: 0.2,
      fontSize: 16,
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

    cardIcon: {
      width: 40,
      height: 40,
      tintColor: t.colors.primary,
    },

    themeBtn: {
      width: 90,
      height: 36,
      borderRadius: 18,
      alignSelf: "center",
      paddingHorizontal: 12,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: isDark ? t.colors.primary : t.colors.primary,
    },

    sunIcon: {
      width: 30,
      height: 30,
      opacity: isDark ? 0.0 : 1,
    },

    moonIcon: {
      width: 30,
      height: 30,
      opacity: isDark ? 1 : 0.0,
    },
  });
}
