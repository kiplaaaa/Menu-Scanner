import { Tabs } from "expo-router";

function MainNavigation(){
    return(
      <Tabs>
        <Tabs.Screen name="SignUp" options={{ title:'Sigu Up' }}/>
        <Tabs.Screen name="login" options={{ title: 'Log In'}}/>       
      </Tabs>
    )
}
export default MainNavigation;