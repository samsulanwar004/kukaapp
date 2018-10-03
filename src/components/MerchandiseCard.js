import React from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

class MerchandiseCard extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
          <Image source={this.props.imageUri}
          style={{width: 80, height: 80, resizeMode: 'center'}}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 100, 
    width: 100, 
    marginLeft: 20, 
    borderWidth: 1, 
    borderColor: '#dddddd', 
    marginBottom: 20
  }
});

export default MerchandiseCard;