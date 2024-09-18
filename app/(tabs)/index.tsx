import { Image, StyleSheet, View } from 'react-native';
import {WebView} from 'react-native-webview'

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {

  const html = `
    <html>
    <head>
    <script src="https://secure.nmi.com/token/Collect.js" data-tokenization-key="5mN8N7-jhr55W-N22pxX-uAW2s9"></script>
    </head>
    <body>
        <h1>CollectJS Payment Form</h1>
        <form action="/your-page.php" method="post">
            <table>
                <tr>
                    <td>First Name</td>
                    <td><input size="30" type="text" name="fname" value="Test" /></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input size="30" type="text" name="lname" value="User" /></td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td><input size="30" type="text" name="address" value="123 Main Street"></td>
                </tr>
                <tr>
                    <td>City</td>
                    <td><input size="30" type="text" name="city" value="Beverly Hills"></td>
                </tr>
                <tr>
                    <td>State</td>
                    <td><input size="30" type="text" name="state" value="CA"></td>
                </tr>
                <tr>
                    <td>Zip</td>
                    <td><input size="30" type="text" name="zip" value="90210"></td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td><input size="30" type="text" name="country" value="US"></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input size="30" type="text" name="phone" value="5555555555"></td>
                </tr>
            </table>
            <br>
            <button id="payButton" type="button">Submit Payments</button>
            </form>
        </body>
        <script>
        window.addEventListener('load', function() {
            if (typeof window.CollectJS !== 'undefined') {
                window.alert("CollectJS is available");
            } else {
                window.alert("CollectJS is NOT available");
            }
        });
    </script>
    </html>
    `

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Collect.js Test App</ThemedText>
        <HelloWave />
      </ThemedView>
      <View>
          <WebView
              style={{ height: 1000 }}
              originWhitelist={['*']}
              source={{ html: html }}
              onMessage={() => {}}
              injectedJavaScript={``}
              javaScriptEnabled={true}
              onLoadEnd={() => {
              }}
          />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
