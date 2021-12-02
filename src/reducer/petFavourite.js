const petFavourite=(state=5,action)=>{
    switch(action.type){
      case 'PET_FAVOURITE_INCRESED':
         return state+action.payload;
      case 'PET_FAVOURITE_DECREASED':
        return state-action.payload;
        default :
        return state;
    }
 } 
 export default petFavourite;