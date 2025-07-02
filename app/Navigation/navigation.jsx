import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from "../modules/login";
import SignUp from "../modules/SignUp";

    const stack = createNativeStackNavigator();
 //   const Tab = createBottomTabNavigator();

function MainNavigation(){
    return(
        <stack.Navigator>
            <stack.Screen name="LogIn" component={LogIn} />
            <stack.Screen name="SignUp" component={SignUp} />
        </stack.Navigator>
    )
}
export default MainNavigation;