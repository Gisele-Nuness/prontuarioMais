import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1600a4ff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    overflow: "hidden",
  },

  header: {
    height: 30,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    textAlign: "center",
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
    justifyContent: "center",

  },

  btnVoltar: {
    width: 100,
    height: 30,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 30,
    left: 10,
  },

  txtBtnVoltar: {
    fontSize: 12,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  logo: {
    width: 230,
    height: 230,
  },

    txt1: {
    color: "#abaaaaff",
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
  },


  containerInputs: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 50,
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
    marginTop: 60,
    marginBottom: 100,
  },

  btn: {
    width: 300,
    height: 40,
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

  btnEsqueci: {
    width: 300,
    height: 40,
    borderRadius: 20,
    borderColor: "#1600a4ff",
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  txtBtnEsqueci: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1600a4ff",
  },
});
