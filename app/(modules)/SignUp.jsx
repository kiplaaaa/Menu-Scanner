import React from "react";
import { View,Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function SignUp(){
    const [ Username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    const handleSignUp = () =>{
        if(!Username || !email || !password){
            setError('Fill in All Fields')
            return;
        }
        
        setError('SignUp Successful')
    }

    return(
        <View style = {styles.container}>
            <Text>Sign Up</Text>
            <View>
                {error ? <Text>{error}</Text> : null }
                <Text>Username:</Text>
                <TextInput placeholder="Username" value = {Username} onChangeText={ (text)=> setUsername(text) } />

                <Text>Email:</Text>
                <TextInput placeholder="Email" value = {email} onChangeText={ (text)=> setEmail(text) } />

                <Text>Password:</Text>
                <TextInput placeholder="Password" value = {password} onChangeText={ (text)=> setPassword(text)} secureTextEntry={true } />

                <Button title="Submit" onPress = {handleSignUp}/>

            </View>
        </View>
    )
}
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})