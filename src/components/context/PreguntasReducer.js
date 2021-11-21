export default function TaskReducer(state, action){

    switch(action.type){
        case "ADD_PREGUNTA":{
            return {preguntas:[...state.preguntas,action.payload],encuesta:state.encuesta}
        }

        case "ADD_ENCUESTA":{
            return {encuesta:action.payload,preguntas:state.preguntas}
        }

        case "NUEVO":{
            return {encuesta:{name:"",description:""},preguntas:[]}
        }

        case "ADD_TEXTO":{
            return {encuesta:state.encuesta,preguntas:action.payload}
        }
       
        default : return state;
    }
    
}