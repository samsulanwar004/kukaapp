import React from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

class ProductCard extends React.Component {
  render() {
    return (
      <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, 
        borderColor: '#dddddd', marginBottom: 20}}>
        <View style={{flex: 2}}>
          <Image source={this.props.imageUri}
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default ProductCard;