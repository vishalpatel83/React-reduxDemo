const petCounter=(state=0,action)=>{
    switch(action.type){
      case 'PET_INCRESED':
         return state+action.payload;
      case 'PET_DECREASED':
        return state-action.payload;
        default :
        return state;
    }
 } 
 export default petCounter;