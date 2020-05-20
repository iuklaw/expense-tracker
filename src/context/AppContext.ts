import {createContext} from 'react'
import { InitState, InitStateFunctions } from './types'


const AppContext = createContext<InitState & InitStateFunctions>({} as InitState & InitStateFunctions)

export default AppContext