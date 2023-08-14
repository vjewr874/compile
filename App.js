import { View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: 'https://play.bon789.net' }} />
      </View>
    </>
  );
}