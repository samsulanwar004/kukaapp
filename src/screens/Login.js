import React from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Button,
  ActivityIndicator
} from 'react-native';

import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Label,
  Left,
  Body,
  Icon,
  Title
} from 'native-base';

import {storageSet} from '../storage/localStorage';
import {login} from '../api/user';

const ACCESS_TOKEN = 'access_token';

class Login extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      email: "",
      password: "",
      error: "",
      isLoading: false,
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Login',
    headerLeft: (
      <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.goBack(null)}>
        <Icon name="arrow-back"/>
      </TouchableOpacity>
    )
  });

  signIn = async () => {
    this.setState({isLoading: true})

    try {
      let res = await login(this.state.email, this.state.password);
      console.log(res)
      if (res.status == 'ok') {
          //Handle success
        let accessToken = res.data.token;
        console.log(accessToken);
        //On success we will store the access_token in the AsyncStorage
        this.storeToken(accessToken);
        this.redirect('Profile');
      } else {
          //Handle error
          let error = res.message;
          throw error;
      }
    } catch(error) {
        this.setState({error: error});
        console.log("error " + error);
        this.setState({isLoading: false});
    }
  }

  redirect(routeName, accessToken){
    this.props.navigation.push(routeName);
  }

  storeToken(responseData){
    storageSet(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={ (text)=> this.setState({email: text}) }/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={ (text)=> this.setState({password: text}) } secureTextEntry={true} />
            </Item>
            <Button title="Sign In" onPress={this.signIn} />
          </Form>
          <Text>
            {this.state.error}
          </Text>
          <ActivityIndicator
             animating={true}
             style = {{ opacity : this.state.isLoading ? 1 : 0 }}
             size="large" color="#0000ff"
          />
        </Content>
      </Container>
    );
  }
}

export default Login;