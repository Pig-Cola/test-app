import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react'
import Toast from 'react-native-root-toast'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useIsLoad from '@/hooks/commons/is-load'
import Main from '@/screens/main'
import Sub from '@/screens/sub'
import { RootSiblingParent } from 'react-native-root-siblings';


SplashScreen.preventAutoHideAsync().catch(() => {})
const Stack = createNativeStackNavigator()

export default function App() {
  const load = useIsLoad()
  const [isLoaded, setLoad] = useState(false)

  useEffect(() => {
    if (load) return
    const fn = () => {
      SplashScreen.hideAsync()
      setTimeout(() => Toast.show('토스트 메세지 하단 테스트 중 입니다.', { position: -50, animation: true, duration: 2000 }), 500)
      setTimeout(() => Toast.show('토스트 메세지 중하단 테스트 중 입니다.', { position: -200, animation: true, duration: 2000 }), 750)
      setTimeout(() => Toast.show('토스트 메세지 중단 테스트 중 입니다.', { position: 0, animation: true, duration: 2000 }), 1000)
      setTimeout(() => Toast.show('토스트 메세지 중상단 테스트 중 입니다.', { position: 200, animation: true, duration: 2000 }), 1250)
      setTimeout(() => Toast.show('토스트 메세지 상단 테스트 중 입니다.', { position: 50, animation: true, duration: 2000 }), 1500)
      setTimeout(setLoad, 1500, true)
    }

    setTimeout(fn, 1000)
  }, [load])

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="api"
            component={Sub}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  )
}
