import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    overflow: "hidden",
  },

  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#1600a4ff",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 5,
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
  },

  iconPerfil: {
    width: 40,
    height: 40
  },

  icons: {
    width: 20,
    height: 20
  },

  main: {
    height: 600,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buscar: {
    width: 350,
    height: 50,
    backgroundColor: "#1600a446",
    borderRadius: 30,
    marginBottom: 50,
    position: 'absolute',
    top: 20
  },

  iconBuscar: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 25,
    left: -80
  },

  cards: {
    width: '100%'
  },

  historico: {
    width: 160,
    height: 100,
    backgroundColor: "#1600a446",
    borderRadius: 20 
  },

  iconCards: {
    width: 50,
    height: 50
  }
});
