import React from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

class Category extends React.Component {
  render() {
    return (
      <View style={{width:this.props.width / 4 - 10, height:this.props.width / 4 - 10}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image style={{flex: 1,width: 60, height: 60, resizeMode: 'contain'}}
          source={this.props.imageUri} />
          <Text style={{fontSize: 12, color: '#5a5a5a'}}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Category;