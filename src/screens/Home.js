import React from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import {
  Icon, 
  Container, 
  Content, 
  Thumbnail, 
  Header, 
  Left, 
  Right, 
  Body
} from 'native-base';

import Ionicon from 'react-native-vector-icons/Ionicons';

import Swiper from 'react-native-swiper';

import Category from '../components/Category';
import Product from '../components/Product';
import ProductCard from '../components/ProductCard';
import MerchandiseCard from '../components/MerchandiseCard';

import {storageGet} from '../storage/localStorage';

const {height, width} = Dimensions.get('window');

const ACCESS_TOKEN = 'access_token';

class Home extends React.Component {

  _getProfile = async () => {
    const token = await storageGet(ACCESS_TOKEN);
    this.props.navigation.navigate(token ? 'Profile' : 'Login');
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu"  />
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity onPress={() => this._getProfile()}>
              <Ionicon name="ios-notifications" size={30} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Swiper
            autoplay={true}
            style={{height:150}}
          >
            <View style={{flex: 1}}>
              <Image style={{flex: 1, height: null, width: null, resizeMode: 'stretch'}}
                source={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} />
            </View>
            <View style={{flex: 1}}>
              <Image style={{flex: 1, height: null, width: null, resizeMode: 'stretch'}}
                source={{uri:'https://kuka.co.id/asset/slide_photo/Banner_Web_Kuka_2_kemerdekaan.jpg'}} />
            </View>
            <View style={{flex: 1}}>
              <Image style={{flex: 1, height: null, width: null, resizeMode: 'stretch'}}
                source={{uri:'https://kuka.co.id/asset/slide_photo/4_b.jpg'}} />
            </View>
          </Swiper>
          <View style={{paddingHorizontal: 10, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap',
          justifyContent: 'space-between', marginBottom: 10}}>
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
            <Category 
              imageUri={{uri:'http://dev-3.rukuka.com/asset/company_photo/icon/fashion.png'}} 
              width={width} 
              name="Fashion"
            />
          </View>
          <View>
            <Text style={styles.segmentName}>Produk Lokal Terbaik</Text>
            <View style={{marginTop: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.segmentName}>Produk Lokal Pilihan</Text>
            <View style={{marginTop: 10}}>
              <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                <ProductCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
                <ProductCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
                <ProductCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.segmentName}>Official Merhandise</Text>
            <View style={{marginTop: 10}}>
              <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                <MerchandiseCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
                <MerchandiseCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
                <MerchandiseCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.segmentName}>Kuliner Lokal Berfaedah</Text>
            <View style={{marginTop: 10}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
                <Product 
                  itemName="Dompet"
                  itemPrice="Rp. 165.000"
                  imageUri={{uri:'http://dev-3.rukuka.com/asset/product_photo/thumb/Dompet_Kartu_Kulit_Asli_Sapi_Pull_Up_Warna_tan_2_thumb.jpg'}}
                  rating={3}
                />
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.segmentName}>Kuliner Lokal Pilihan</Text>
            <View style={{marginTop: 10}}>
              <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                <ProductCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
                <ProductCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
                <ProductCard imageUri={{uri:'http://dev-3.rukuka.com/asset/slide_photo/banner_wajah_baru.jpg'}} name="Sosial" />
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 70, 
    borderBottomColor: '#757575'
  },
  segmentName: {
    marginLeft: 20,
  }
});

export default Home;