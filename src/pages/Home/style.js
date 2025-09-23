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
      alignItems: "center",
    },

    searchWrapper: {
      width: "100%",
      height: 50,
      backgroundColor: t.colors.primarySoft,
      borderRadius: 30,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 14,
      marginBottom: 50,
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
      width: "100%",
      marginBottom: 40,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },

    historico: {
      width: "48%",
      height: 100,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: t.colors.primarySoft,
      borderRadius: 20,
      paddingHorizontal: 14,
      marginBottom: 20,
    },

    textos: {
      gap: 4,
    },

    legendText: {
      color: isDark ? t.colors.text : t.colors.primary,
      fontSize: 16,
      opacity: 0.8,
    },

    titleText: {
      color: isDark ? t.colors.text : t.colors.primary,
      fontWeight: "700",
      letterSpacing: 0.3,
      fontSize: 18,
    },

    img: {
      alignItems: "center",
      justifyContent: "center",
    },

    iconCards: {
      width: 40,
      height: 40,
      tintColor: isDark ? t.colors.text : t.colors.primary,
    },

    banner: {
      width: "100%",
      height: 200,
      borderRadius: 18,
      borderColor: t.colors.background,
      overflow: "hidden",
      marginBottom: 60,
      backgroundColor: t.colors.primary,
    },

    bannerImage: {
      width: "100%",
      height: "100%",
    },

    iconCardSmall: {
      width: 30,
      height: 30,
      position: "absolute",
      bottom: 5,
      right: 12,
    },
  });
}
