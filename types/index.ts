import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { FC } from 'react'

type ScreenProps = {
  Main?: {}
  api?: {}
}

export type ScreenComponent<T extends keyof ScreenProps> = FC<NativeStackScreenProps<ScreenProps, T>>
