import { Pressable, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics'; // for adding haptic feedback on devices

export default function Button({ title, onPress, disabled }) {

    // Handle button press with haptic feedback
    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.light);
        onPress();
    };

    return (
        <Pressable style={styles.button} onPress={handlePress} disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});