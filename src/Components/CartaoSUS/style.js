import { StyleSheet } from "react-native";

export default StyleSheet.create({
 
modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.93)",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  modalCard: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#1600a4ff",
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 54,
  },

  modalHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  modalHeaderBtn: {
    color: "#ffffff",
    fontWeight: "800",
    letterSpacing: 0.4,
    fontSize: 12,
    padding: 20
  },

  modalImageWrap: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },

  susImage: {
    width: "100%",
    height: 240,
    borderRadius: 12,
  },

  dadosCarteirinha: {
    position: "absolute",
    top: 135,
    left: 70,
    gap: 6,
  },

  txtCarteirinha: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 12,
  }
});