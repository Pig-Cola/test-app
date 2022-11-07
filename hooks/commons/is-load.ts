import { useEffect, useState } from 'react'

export default function useIsLoad() {
  const [isLoad, setLoad] = useState( false )
  useEffect( () => {
    setLoad( true )
  }, [] )
  return isLoad
}
