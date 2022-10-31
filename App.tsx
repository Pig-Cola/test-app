import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import CustomButton from './component/commons/custom-button'
import useGetStyle from './hooks/commons/use-style'

export default function App() {
  const [toggle, doToggle] = useState(true)
  const { styles: style, getStyles } = useGetStyle({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: toggle ? '#fff' : 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  return (
    <>
      <View {...getStyles.container}>
        <Text onPress={() => {}}>Hello, World!</Text>
        {/* <Button title="hello" color="red" /> */}
        <CustomButton
          backgroundColor="red"
          color={'#fff'}
          onPress={() => {
            doToggle((s) => !s)
          }}
        >
          {'HELLO'}
        </CustomButton>
      </View>
      <View style={styles.a}></View>
    </>
  )
}

const styles = StyleSheet.create({
  a: {
    backgroundColor: 'red',
  },
})
