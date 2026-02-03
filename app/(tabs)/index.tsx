import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MENU } from "../data/menu";

export default function MenuScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF7E6" }}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          padding: 16,
          color: "#3E2723",
        }}
      >
        🍽 Smart FC Menu
      </Text>

      {MENU.map((section) => (
        <View key={section.category} style={{ paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginVertical: 12,
              color: "#E65100",
            }}
          >
            {section.category}
          </Text>

          {section.items.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: "#FFE0B2",
                padding: 14,
                borderRadius: 12,
                marginBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#3E2723",
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "#5D4037" }}>
                  ₹{item.price}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#E65100",
                  paddingVertical: 6,
                  paddingHorizontal: 14,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "600" }}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
