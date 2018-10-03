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
  Content,
  Icon
} from 'native-base';

import {storageGet, storageClear} from '../storage/localStorage';
import {getUser} from '../api/user';

const ACCESS_TOKEN = 'access_token';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      token: '',
      name: '',
      error: '',
      isLoading: true
    };

    this._loadAsync();
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    headerLeft: (
      <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.goBack(null)}>
        <Icon name="arrow-back"/>
      </TouchableOpacity>
    )
  });

  _signOutAsync = async () => {
    await storageClear();
    this.props.navigation.navigate('Home');
  };

  _loadAsync = async () => {
    const token = await storageGet(ACCESS_TOKEN);
    this.setState({token: token});
    if (token) {
      try {
        let res = await getUser(token);
        console.log(res)
        if (res.status == 'ok') {
            let name = res.data.name;
            this.setState({name: name});
        } else {
            //Handle error
            let error = res.message;
            throw error;
        }
        this.setState({isLoading: false});
      } catch(error) {
          this.setState({error: error});
          console.log("error " + error);
      }
    }
  }

  getProfile = () => {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator
           size="large" color="#0000ff"
        />
      )
    } else {
      return (
        <View>
          <Text>Profile {this.state.name}</Text>
          <Button title="Sign me out :)" onPress={this._signOutAsync} />
        </View>
      )
    }
  }

  render() {
    return (
      <Container>
        <Content>
          {this.getProfile()}
        </Content>
      </Container>
    );
  }
}

export default Profile;