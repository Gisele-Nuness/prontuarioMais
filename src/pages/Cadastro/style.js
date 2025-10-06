import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    height: 60,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#1600a4ff",
  },

  containerHora: {
    width: 100,
    alignItems: "center",
  },

  containerIcons: {
    width: 100,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  hora: {
    color: "#fff",
    fontWeight: "bold",
  },

  icons: {
    width: 20,
    height: 20,
  },

  main: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },

  btnVoltar: {
    width: 100,
    height: 30,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    left: 10,
  },

  txtBtnVoltar: {
    fontSize: 12,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  logo: {
    width: 220,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
  },

  txt: {
    width: "100%",
    color: "#1600a4ff",
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "flex-start",
    left: 45,
    
  },

  txt1: {
    width: "100%",
    color: "#7b7b7bff",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "flex-start",
    left: 45,
   top: 40,
  },

  containerInputs: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 45,
    marginTop: 50,
  },

  input: {
    width: 300,
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#abaaaaff",
    color: "#abaaaaff",
    fontSize: 16,
  },

  containerBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 50,
    marginBottom: 50
   
  },

  btn: {
    width: 300,
    height: 50,
    backgroundColor: "#1600a4ff",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  txtBtn: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
  },


});
