import React,{createContext,useReducer} from "react";
import PreguntasReducer from './PreguntasReducer'

const initialState = {preguntas:[]}
const PreguntasContext = createContext(initialState)

export default PreguntasContext;

export const PreguntasProvider = ({children})=>{

    const [statePregunta,dispatch] = useReducer(PreguntasReducer,initialState)

    const addPregunta = (pregunta)=>{
        dispatch({type:"ADD_PREGUNTA",payload:pregunta})
    }
    return (
        <PreguntasContext.Provider value={{...statePregunta,addPregunta}}>
            {children}
        </PreguntasContext.Provider>
    )
}