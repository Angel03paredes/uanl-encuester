import React,{createContext,useReducer} from "react";
import PreguntasReducer from './PreguntasReducer'

const initialState = {preguntas:[],encuesta:{name:"",description:""}}
const PreguntasContext = createContext(initialState)

export default PreguntasContext;

export const PreguntasProvider = ({children})=>{

    const [statePregunta,dispatch] = useReducer(PreguntasReducer,initialState)

    const addPregunta = (pregunta)=>{
        dispatch({type:"ADD_PREGUNTA",payload:pregunta})
    }

    const addEncuesta = (encuesta)=>{
        dispatch({type:"ADD_ENCUESTA",payload:encuesta})
    }

    const nuevo = (preguntas)=>{
        dispatch({type:"NUEVO",payload:"si"})
    }

    const addTexto = (preguntas)=>{
        dispatch({type:"ADD_TEXTO",payload:preguntas})
    }
    return (
        <PreguntasContext.Provider value={{...statePregunta,addPregunta,addEncuesta,nuevo,addTexto}}>
            {children}
        </PreguntasContext.Provider>
    )
}