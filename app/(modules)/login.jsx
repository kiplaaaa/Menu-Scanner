import React from "react";
import { View,Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function LogIn(){
    const [ Username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    const handleLogIn = () =>{
        if(!Username || !password){
            setError('Fill in All Fields')
            return;
        }
        
        setError('Log In Successful')
    }

    return(
        <View style = {styles.container} >
            <Text>Log In</Text>
            <View>
                {error ? <Text>{error}</Text> : null }
                <Text>Username:</Text>
                <TextInput placeholder="Username" value = {Username} onChange={ (text)=> setUsername(text) } />

                <Text>Password:</Text>
                <TextInput placeholder="Password" value = {password} onChange={ (text)=> setPassword(text)} SecureTextEntry={true } />

                <Button title="Submit" onPress = {handleLogIn}/>

            </View>
        </View>
    )
}
export default LogIn;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})