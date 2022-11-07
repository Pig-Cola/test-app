import { ScreenComponent } from '@/types'
import React, { useState, useEffect, FC } from 'react'
import { Text, View } from 'react-native'
import CustomButton from '@/component/commons/custom-button'
import useStyles from '@/hooks/commons/styles'

const Main: ScreenComponent<'Main'> = ({ navigation, route }) => {
  const [toggle, doToggle] = useState(true)
  const { styles, getStyles } = useStyles({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: toggle ? '#fff' : 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: toggle ? '#000' : 'red',
    },
  })
  const [count, setCount] = useState(0)
  const [timer1, setTimer1] = useState<null | number>(null)

  useEffect(() => {
    let _timer: number | NodeJS.Timer
    let _timer1: number | NodeJS.Timer

    let fn1 = () => {
      if (!toggle) return
      setCount((s) => s + 1)
    }

    let fn2 = () => {
      if (!toggle) {
        _timer1 = setTimeout(fn2, 10)
        return
      }

      setTimer1(Date.now())
      _timer1 = setTimeout(fn2, 10)
    }

    _timer = setInterval(fn1, 500)
    _timer1 = setTimeout(fn2, 10)

    return () => {
      if (_timer) clearInterval(_timer)
      if (_timer1) clearInterval(_timer1)
    }
  }, [toggle])

  return (
    <View
      {...getStyles.container}
      style={[styles.container, { position: 'relative' }]}
    >
      {timer1 && <Text {...getStyles.text}>{`${timer1}       `}</Text>}
      <CustomButton
        backgroundColor="red"
        color={'#fff'}
        onPress={() => {
          doToggle((s) => !s)
        }}
      >
        {`${count}`}
      </CustomButton>
      <CustomButton
      {...styles.text}
        onPress={() => {
          navigation.navigate('api')
        }}
      >{`go to api`}</CustomButton>
    </View>
  )
}

export default Main as FC
