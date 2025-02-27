import { Modal, Text, StyleSheet, View, Pressable } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";


type Props = {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
};

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Wähle ein Sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color="#fff" />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        height: "25%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: "white",
        fontSize: 18,
    },
})