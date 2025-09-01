import { View, Image, Pressable } from "react-native";
import styles from "./style";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.containerPerfil}>
        <Image
          source={require("../../../assets/usuario-de-perfil.png")}
          style={styles.iconPerfil}
        />
      </View>

      <View style={styles.containerIcons}>
        <Image
          source={require("../../../assets/notificacao.png")}
          style={styles.icons}
        />
        <Image
          source={require("../../../assets/ponto-de-interrogacao.png")}
          style={styles.icons}
        />
      </View>
    </View>
  );
}
