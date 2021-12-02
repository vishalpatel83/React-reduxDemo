export const petIncrement=(number)=>{
    return{
        type:'PET_INCRESED',
        payload:number
    }
  }
  export const petDecrement=(number)=>{
    return{
         type:"PET_DECREASED",
         payload:number
    }
  }
  export const PetfavouriteIncrement=(number)=>{
      return{
          type:"PET_FAVOURITE_INCRESED",
          payload:number
      }
  }
  export const petfavouriteDecrement=(number)=>{
      return{
          type:"PET_FAVOURITE_DECREASED",
          payload:number
      }
  }