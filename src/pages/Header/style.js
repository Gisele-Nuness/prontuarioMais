 import { StyleSheet } from "react-native";
 
 export default StyleSheet.create({
 
 header: {
    height: 80,
    width: "100%",
    backgroundColor: "#1600a4ff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },

  containerPerfil: {
    width: 100,
    alignItems: "center",
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
    width: 62,
    height: 62,
    borderRadius: 100,
  },

  icons: {
    width: 20,
    height: 20,
  },
});