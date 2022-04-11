import React from "react";

import { View, Text, TextInput, Button } from "react-native";

export function Profile() {
  return (
    <View>
      <Text testID={"text-title"}>Perfil</Text>
      <TextInput
        testID="input-name"
        value={"Rafael"}
        placeholder="Nome"
        autoCorrect={false}
      />
      <TextInput
        testID="input-surname"
        value="Santos"
        placeholder="Sobrenome"
        autoCorrect={false}
      />
      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}
