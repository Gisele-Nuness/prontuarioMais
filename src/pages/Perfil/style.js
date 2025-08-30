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
    width: 52,
    height: 52,
  },

  icons: {
    width: 20,
    height: 20,
  },

  main: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: "stretch",
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
    minHeight: 70,
    borderWidth: 1,
    borderColor: "rgba(22, 0, 164, 0.08)",
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 7 },
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

  footer: {
    height: 64,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#E9E9E9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },

  footerItem: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 6,
  },

  footerIcon: {
    width: 26,
    height: 26,
  },

  footerText: {
    fontSize: 12,
    color: "#1600A4",
    marginTop: 2,
  },
});
