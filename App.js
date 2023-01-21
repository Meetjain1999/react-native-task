import * as React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Title, Paragraph, Divider, Button } from 'react-native-paper';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://ik.imagekit.io/iqpsgyipa/Task/Vasaladi__Song__by_Falguni_Pathak___Shail_H___New_Navratri_Song___Vinod_B___Hitz_Music.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1674278460184',
        }}
        useNativeControls={true}
        resizeMode="contain"
        isLooping={false}
        autoPlay={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.detailSection}>
        <View style={styles.buttons}>
          <Button
            mode="outlined"
            contentStyle={{height: 50, width: 170}}
            onPress={() => console.log()}
          >
            Watch Trailer
          </Button>
          <Button
            mode="contained"
            contentStyle={{height: 50, width: 170}}
            buttonColor={"#000"}
            onPress={() => video.current.playAsync()}
          >
            Watch Now
          </Button>
        </View>
        <ScrollView style={{marginTop: 15}}>
          <Title>
            Vasaladi (Song) by Falguni Pathak | Shail H | New Navratri Song | Vinod B | Hitz Music
          </Title>
          <Divider />
          <View style={styles.additionaldetailSection}>
            <Paragraph>
              Sep 14, 2022
            </Paragraph>
          </View>
          <View style={styles.additionaldetailSection}>
            <Paragraph style={styles.paraHead}>
              Singers :
            </Paragraph>
            <Paragraph>
              Falguni Pathak, Shail Hada
            </Paragraph>
          </View>
          <View style={styles.additionaldetailSection}>
            <Paragraph style={styles.paraHead}>
              Music :
            </Paragraph>
            <Paragraph>
              Shail Hada
            </Paragraph>
          </View>
          <View style={styles.additionaldetailSection}>
            <Paragraph style={styles.paraHead}>
              Lyrics :
            </Paragraph>
            <Paragraph>
               Bhojak Ashok Anjam
            </Paragraph>
          </View>
          <Divider />
          <Paragraph style={styles.paraHead}>
            Hitz Music (Team) : 
          </Paragraph>
          <Paragraph>
            Vishal Gurnani, Kamlesh Bhanushali, Juhi Parekh Mehta, Bhavesh Bhanushali, Pooja Vora, Payal Nair, Aisshwarya Shety, Neena Dawer, Siddharth Hussain, Pratik Shah, Dinesh Bajaj, Alok Srivastava, Hayat Hussain, Dhruv Patel & Rajendram Akula.
          </Paragraph>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: 300,
  },
  detailSection: {
    margin: 10,
    flex: 1
  },
  additionaldetailSection: {
    flexDirection: 'row',
  },
  paraHead: {
    fontWeight: 'bold'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
