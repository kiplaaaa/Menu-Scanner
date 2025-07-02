import { Stack } from "expo-router";

export default function Layout(){
  return(
    <Stack>
      <Stack.Screen name="(modules)" options={{ headerShown: false }} />
    </Stack>
  )
}