import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TouchableOpacity,
  Button,
  ActivityIndicator
} from 'react-native';
import { DrawerActions, NavigationActions } from 'react-navigation';
import styles from '../styles/index';
import {
  Container, 
  Content, 
  Header, 
  Icon,
  Body,
  Thumbnail,
  List,
  ListItem
} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {storageGet, storageClear} from '../storage/localStorage';
import {getUser} from '../api/user';

const ACCESS_TOKEN = 'access_token';

class Drawer extends React.Component {

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
        this.setState({isLoading: false})
      } catch(error) {
          this.setState({error: error});
          console.log("error " + error);
      }
    }
  }

  getSubProfile = () => {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <ActivityIndicator
             size="large" color="#0000ff"
            />
          </View>
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Thumbnail large source={{uri: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-1/p200x200/26230952_10208336267684712_5275571021909823368_n.jpg?_nc_cat=110&oh=464f6ad777c34b9f10a95dfa4165e848&oe=5C59F5A5'}} />
          </View>
          <View style={{marginLeft: 20}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} >
              <Text>{this.state.name}</Text>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  getProfile = () => {
    if (this.state.token) {
      return (
        <View style={{flex: 1}}>
          {this.getSubProfile()}
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Button title="Sign in" onPress={() => this.props.navigation.navigate('Login')} />
        </View>
      )
    }
  }

  render () {
    let menu = [
      'Beranda', 
      'Kategori', 
      'Transaksi', 
      'Pesanan', 
      'Pembayaran',
      'Ulasan',
      'Diskusi Produk',
      'Bantuan',
      'Hubungi Kami',
      'Pengaturan',
      'Keluar'
    ];
    return (
      <Container>
        <Header style={{backgroundColor: 'white', height: 30}}>
          <View style={{flex: 1,flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
                <Ionicon name="ios-close" size={30} />
            </TouchableOpacity>
          </View>
        </Header>
        <Header style={{backgroundColor: 'white', height: 120}}>
          {this.getProfile()}
          <Text>
            {this.state.error}
          </Text>
        </Header>
        <Content>
          <List dataArray={menu}
            renderRow={(item) =>
              <ListItem>
                <TouchableOpacity>
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicon name="ios-home" size={30} />
                    <Text style={{marginLeft: 20}}>{item}</Text>
                  </View>
                </TouchableOpacity>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

export default Drawer;
