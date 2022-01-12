

const data = { name:'sundar', address:'patna' }

export const MyReducers = ( state = data, action) => {
    switch(action.type) {
       case 'A':
          return { ...state, name:action.payload } 

       case 'B':
          return { ...state, name:action.payload } 

        default:
          return state;
    }
   
}