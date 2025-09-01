import { StyleSheet } from "react-native";

const PRIMARY = "#1600a4ff";
const PRIMARY_SOFT = "#1600a446"; // fundo translúcido

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
    alignItems: "center",
  },


  searchWrapper: {
    width: "100%",
    height: 50,
    backgroundColor: PRIMARY_SOFT,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 70,
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
    marginBottom: 50,
  },

  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  historico: {
    flex: 1,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: PRIMARY_SOFT,
    borderRadius: 20,
    paddingHorizontal: 14,
  },

  textos: {
    gap: 4,
  },

  legendText: {
    color: "#1600A4",
    fontSize: 16,
    opacity: 0.8,
  },

  titleText: {
    color: "#1600A4",
    fontWeight: "700",
    letterSpacing: 0.3,
    fontSize: 18,

  },

  img: {
    alignItems: "center",
    justifyContent: "center",
  },

  iconCards: {
    width: 40,
    height: 40,
  },

  banner: {
    width: "100%",
    height: 160,
    borderRadius: 18,
    overflow: "hidden",
    marginTop: 12,
    marginBottom: 50,
    backgroundColor: PRIMARY,
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },

  cardsBottom: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 12,
    marginTop: 4,
  },

  cardSmall: {
    width: "45%",
    height: 90,
    backgroundColor: PRIMARY_SOFT,
    borderRadius: 20,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

    legendText2: {
    color: "#1600A4",
    fontSize: 14,
    opacity: 0.8,
  },

  titleText2: {
    color: "#1600A4",
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: 16,

  },

  iconCardSmall: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 5,
    right: 12,
  },

 
});
