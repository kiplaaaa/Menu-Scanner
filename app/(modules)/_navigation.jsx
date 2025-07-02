import { Tabs } from "expo-router";

function MainNavigation(){
    return(
      <Tabs>
        <Tabs.Screen name="login"/>
        <Tabs.Screen name="SignUp"/>
      </Tabs>
    )
}
export default MainNavigation;