import React from 'react'
import { Provider } from 'react-redux'
import {useSelector} from "react-redux"
import appStore from './appStore'
const Body = () => {
    // const showButton = useSelector((store)=>store.button.showButton)
  return (
   <Provider store={appStore}>
     <div>
        <button>Here is the  button</button>
    </div>
   </Provider>
  )
}

export default Body