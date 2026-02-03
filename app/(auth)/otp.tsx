import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function OtpScreen() {
  const [otp, setOtp] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#000",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 26, marginBottom: 16 }}>
        Enter OTP
      </Text>

      <TextInput
        placeholder="123456"
        placeholderTextColor="#777"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
        style={{
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 8,
          padding: 14,
          color: "#fff",
          marginBottom: 16,
        }}
      />

      <TouchableOpacity
        onPress={() => router.replace("/(tabs)")}
        style={{
          backgroundColor: "#2563eb",
          padding: 16,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          Verify OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
}
