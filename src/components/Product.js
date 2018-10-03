import React from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

import {CardItem, Body} from 'native-base';
import StarRating from 'react-native-star-rating';

class Product extends React.Component {
  render() {
    return (
      <CardItem style={{marginLeft: 5, paddingRight: -10}}>
        <Body>
          <Image style={{height: 90, width: 90}}
          source={this.props.imageUri} />
            <Text style={{color: '#5a5a5a'}}>{this.props.itemName}</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#5a5a5a'}}>
              {this.props.itemPrice}
            </Text>

            <StarRating
              disabled={true}
              maxStars={5}
              rating={this.props.rating}
              starSize={12}
              fullStarColor='orange'
              emptyStarColor='orange'
            />
        </Body>
      </CardItem>
    );
  }
}

export default Product;
