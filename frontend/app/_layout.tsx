import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return <Stack> <Stack.Screen name="Landing" options={{
    headerShown: false,
  }}/></Stack>;
}
