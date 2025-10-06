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
  });
}