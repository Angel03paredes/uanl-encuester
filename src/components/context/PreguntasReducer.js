export default function TaskReducer(state, action){

    switch(action.type){
        case "ADD_PREGUNTA":{
            return {preguntas:[...state.preguntas,action.payload]}
        }
       
        default : return state;
    }
    
}