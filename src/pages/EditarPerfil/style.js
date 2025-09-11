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
    height: 120,
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    padding: 5,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#1600a4ff",
  },

  imagem: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  imgPerfil: {
    width: 92,
    height: 92,
  },

  imgGaleria: {
    width: 25,
    height: 25,
  },

  imgLapis: {
    width: 15,
    height: 15,
    position: "absolute",
    right: 10,
    bottom: 10,
  },

  main: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
    color: "#1600a4ff",
    textAlign: "center",
  },

  logo: {
    width: 220,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    top: 50,
  },

  containerInputs: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 30,
    marginTop: 30,
  },

  label: {
    alignSelf: "flex-start",
    marginLeft: 2,
    marginBottom: -25,
    color: "#7b7b7bff",
    fontSize: 14,
    fontWeight: "bold",
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
    marginTop: 30,
    marginBottom: 60,
  },

  btn: {
    width: 200,
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

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});
