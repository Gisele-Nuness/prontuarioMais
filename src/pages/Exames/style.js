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

  main: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: "stretch",
  },

  searchWrapper: {
    width: "100%",
    height: 50,
    backgroundColor: "#1600a446",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 16,
    marginTop: 10,
  },

  buscar: {
    flex: 1,
    height: 50,
    color: "#2A2A2A",
    fontSize: 16,
  },

  iconBuscar: {
    width: 40,
    height: 40,
    marginRight: 8,
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
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    minHeight: 70,
    borderWidth: 1,
    borderColor: "rgba(22, 0, 164, 0.08)",
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 7 },
    elevation: 2,
  },

  textos: {
    gap: 4,
  },


  titleText: {
    color: "#1600a4ff",
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: 16,
    left: 5
  },

  titleLegend: {
    color: "#0B1A34",
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: 16,
  },

  legendText: {
    color: "#6B7A90",
    fontSize: 13,
    opacity: 1,
  },

});
