import { ColorValue, GestureResponderEvent, Text, TextStyle, TouchableNativeFeedback, View } from 'react-native'
import useStyle from '../../hooks/commons/use-style'

type props = {
  onPress?: (e: GestureResponderEvent) => void
  backgroundColor?: ColorValue
  color?: ColorValue
  children?: string
  fontWeight?: TextStyle['fontWeight']
}

const CustomButton = ({ onPress = () => {}, backgroundColor = '', color = '#fff', children, fontWeight }: props) => {
  const { styles, getStyles } = useStyle({
    buttonWrapper: { padding: 8, backgroundColor, borderRadius: 2 },
    text: { color, fontWeight: fontWeight || '500' },
  })

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('rgba(75, 75, 75, 0.15)', false)}
      touchSoundDisabled
      onPress={onPress}
    >
      <View {...getStyles.buttonWrapper}>
        {!children && children}
        {typeof children === 'string' && <Text {...getStyles.text}>{children}</Text>}
      </View>
    </TouchableNativeFeedback>
  )
}

export default CustomButton
