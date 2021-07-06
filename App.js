import React from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  useFonts as usePoppins,
  Poppins_400Regular
} from '@expo-google-fonts/poppins';
import {
  useFonts as useRaleway,
  Raleway_700Bold
} from '@expo-google-fonts/raleway';
import {theme} from 'styles/theme';
import Navigation from 'navigation/Navigation';
import {NewsContextProvider} from 'services/news/News.context';
import {EventContextProvider} from 'services/events/Event.context';
import {MyEventContextProvider} from 'services/events/MyEvent.context';
import {AuthContextProvider} from 'services/auth/Login.context';
import {AboutContextProvider} from 'services/about/About.context';
import {AlertContextProvider} from 'services/utils/Alert.context';
import {LoaderContextProvider} from 'services/utils/Loader.context';
import Alert from 'components/Alert.component';
import Loader from 'components/Loader.component';
import StatusBar from 'components/StatusBar.component';

export default function App() {
  const [poppinsLoaded] = usePoppins({Poppins_400Regular});
  const [ralewayLoaded] = useRaleway({Raleway_700Bold});
  if (!poppinsLoaded || !ralewayLoaded) {
    return <Text>Couldn't load the fonts</Text>;
  }
  return (
    <ThemeProvider theme={theme}>
      <LoaderContextProvider>
        <AlertContextProvider>
          <NewsContextProvider>
            <AuthContextProvider>
              <EventContextProvider>
                <MyEventContextProvider>
                  <AboutContextProvider>
                    <Loader />
                    <Alert />
                    <StatusBar
                      backgroundColor="black"
                      barStyle="light-content"
                    />
                    <SafeAreaProvider>
                      <Navigation />
                    </SafeAreaProvider>
                  </AboutContextProvider>
                </MyEventContextProvider>
              </EventContextProvider>
            </AuthContextProvider>
          </NewsContextProvider>
        </AlertContextProvider>
      </LoaderContextProvider>
    </ThemeProvider>
  );
}
