import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {FormLabel,FormInput,Button} from 'react-native-elements';
import Axios from 'axios';

const ROOT_URL ='https://us-central1-one-time-password-42f16.cloudfunctions.net'

class SignUpForm extends Component{

    state={phone:''};
    
    handleSubmit= async()=>{
        try{
        await Axios.post(`${ROOT_URL}/createUser`,{phone:this.state.phone});
        }catch(err){
            console.log(err)
        }
        await Axios.post(`${ROOT_URL}/requestOneTimePassword`,{phone:this.state.phone});
    }


    render(){
        
        return(
            <View>
                <View style={{marginBottom:10}}>
                <FormLabel>Enter Phone Number</FormLabel>
                <FormInput
                    value={this.state.phone}
                    onChangeText= {phone=>this.setState({phone})}
                />
                </View>
                <Button onPress={this.handleSubmit} title="Submit"/>
            </View>
        );
    }
}
export default SignUpForm;