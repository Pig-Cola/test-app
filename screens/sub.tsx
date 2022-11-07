import useIsLoad from '@/hooks/commons/is-load'
import useStyles from '@/hooks/commons/styles'
import { ScreenComponent } from '@/types'
import { FC, useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { create } from 'apisauce'
import CustomButton from '@/component/commons/custom-button'

const isDev = true

const api = create({
  baseURL: isDev ? '10.0.2.2:3000' : 'https://eacplatform.io',
})

const req2srv = {
  async getInit() {
    // if (api.headers['cookie']?.split(';').filter((cookie) => cookie.split('=')[0] === '__Host-next-auth.csrf-token').length) return

    let res = await api.get<string>('/api/test')
    console.log(res)

    // let setCookie = res.headers!['set-cookie']! as string | string[]
    // let cookie: string = ''
    // if (typeof setCookie === 'string') {
    //   cookie = setCookie
    //     .split(',')
    //     .flatMap((v) => v.split(';')[0])
    //     .join(';')
    // } else if (Array.isArray(setCookie)) {
    //   cookie = setCookie.flatMap((v) => v.split(',').flatMap((v) => v.split(';')[0])).join(';')
    // }
    // api.setHeaders({ cookie })
    return
  },
  async test() {
    await this.getInit()
    // console.log(api.headers)
    return ''
  },
}

const Sub: ScreenComponent<'api'> = ({ navigation }) => {
  const [data, setData] = useState('not init data')
  const isload = useIsLoad()

  const { getStyles, styles } = useStyles({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  useEffect(() => {
    if (isload) return
    req2srv.test().then((v) => {
      setData(v)
    })
  }, [isload])

  return (
    <ScrollView {...styles.container}>
      <CustomButton
        backgroundColor={'red'}
        onPress={() => {
          navigation.navigate('Main')
        }}
      >
        {'go back'}
      </CustomButton>
      <Text>{data}</Text>
    </ScrollView>
  )
}

export default Sub as FC
