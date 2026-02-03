import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");

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
        Smart FC Login
      </Text>

      <TextInput
        placeholder="Enter phone number"
        placeholderTextColor="#777"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
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
        onPress={() => router.push("/otp")}
        style={{
          backgroundColor: "#16a34a",
          padding: 16,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          Send OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
}
