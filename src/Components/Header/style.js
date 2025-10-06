import { StyleSheet } from "react-native";

export default function makeStyles(t) {
  const isDark = t.name === "dark";

  return StyleSheet.create({
    header: {
      height: 80,
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
      paddingVertical: 60,
    },

    containerPerfil: {
      width: 200,
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      marginLeft: 10,
      gap: 10
    },

    nome: {
      
      color: isDark ? t.colors.text : t.colors.background,
      fontSize: 16,
      fontWeight: "bold",
      width: 120,
      textTransform: "capitalize", 
    },

    containerIcons: {
      width: 100,
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      justifyContent: "flex-end",
      right: 25,
    },

    iconPerfil: {
      width: 80,
      height: 80,
      borderRadius: 100,
    },

    icons: {
      width: 20,
      height: 20,
      tintColor: isDark ? t.colors.text : t.colors.background,
    },
  });
}
