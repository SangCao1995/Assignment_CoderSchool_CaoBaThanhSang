import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg')},
  { id: 2, imgSource: require('./assets/2.jpg')},
  { id: 3, imgSource: require('./assets/3.jpg')},
  { id: 4, imgSource: require('./assets/4.jpg')},
  { id: 5, imgSource: require('./assets/5.jpg')},
  { id: 6, imgSource: require('./assets/6.jpg')},
  { id: 5, imgSource: require('./assets/5.jpg')},
  { id: 6, imgSource: require('./assets/6.jpg')}
];

const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatarImage} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            Sang Cao
          </Text>
          <Text style={styles.userJob}>
            Developer
          </Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.followButton}> 
              <Text style={styles.textFollowButton}>
                Follow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton}>
              <Ionicons name="md-send" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countLikeGroup}>
        <View style={styles.countLike}>
          <Text style={styles.numberOfCountLike}>
            210
          </Text>
          <Text style={styles.contentOfCountLike}>
            Photos
          </Text>
        </View>
        <View style={styles.countLike}>
          <Text style={styles.numberOfCountLike}>
            15k
          </Text>
          <Text style={styles.contentOfCountLike}>
            Followers
          </Text>
        </View>
        <View style={styles.countLike}>
          <Text style={styles.numberOfCountLike}>
            605
          </Text>
          <Text style={styles.contentOfCountLike}>
            Following
          </Text>
        </View>
      </View>
      <View style={styles.image}>
        <ScrollView contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.contentImage1}/>
            })}
          </View>
          <View>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.contentImage2}/>
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.25,
    flexDirection: 'row',
  },
  countLikeGroup: {
    flex: 0.15, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    flex: 0.7, 
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarImage: {
    width: 120,
    height: 120,
  },
  buttonGroup: {
    flexDirection: 'row'
  },
  userInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  userJob: {
    color: 'gray'
  }, 
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    width: 90,
    height: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sendButton: {
    width: 40,
    height: 25,
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textFollowButton: {
    color: 'white',
  }, 
  countLike: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberOfCountLike: {
    fontWeight: 'bold',
    fontSize: 20
  },
  contentOfCountLike: {
    color: 'gray'
  }, 
  contentImage1: {
    width: 160,
    height: 180,
    borderRadius: 13,
    marginTop: 8
  },
  contentImage2: {
    width: 160,
    height: 180,
    borderRadius: 13,
    marginLeft: 8,
    marginTop: 8
  }
});
