import { View, Image, Pressable, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Footer({ setModalSUSVisivel }) {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <Pressable
        style={styles.footerItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../../../assets/home.png")}
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>Início</Text>
      </Pressable>
      <Pressable
        style={styles.footerItem}
        onPress={() => setModalSUSVisivel(true)}
      >
        <Image
          source={require("../../../assets/coracao-home.png")}
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>Cartão SUS</Text>
      </Pressable>
      <Pressable
        style={styles.footerItem}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          source={require("../../../assets/icon-perfil.png")}
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>Perfil</Text>
      </Pressable>
    </View>
  );
}
