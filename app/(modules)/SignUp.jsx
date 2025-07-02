import React from "react";
import { View,Text, TextInput, Button } from "react-native";
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
        <View>
            <Text>Sign Up</Text>
            <View>
                {error ? <Text>{error}</Text> : null }
                <Text>Username:</Text>
                <TextInput placeholder="Username" value = {Username} onChange={ (text)=> setUsername(text) } />

                <Text>Email:</Text>
                <TextInput placeholder="Email" value = {email} onChange={ (text)=> setEmail(text) } />

                <Text>Password:</Text>
                <TextInput placeholder="Password" value = {password} onChange={ (text)=> setPassword(text)} SecureTextEntry={true } />

                <Button title="Submit" onPress = {handleSignUp}/>

            </View>
        </View>
    )
}
export default SignUp;