import { PetfavouriteIncrement, petfavouriteDecrement} from './actions';
import {useSelector,useDispatch} from 'react-redux';
function Newapp() {
  const dispatch = useDispatch()
//   const petfavourite = useSelector((state) => state.PetfavouriteIncrement);
  const petFavourite = useSelector((state) => state.petFavourite);
  return (
    <div className="App">
       <h1>welcome to react-redux crash coursh </h1>
       <button onClick={()=>dispatch(PetfavouriteIncrement(2))}> add Pet</button>
       <button onClick={()=>dispatch(petfavouriteDecrement(4))}>remove pet</button>
       {/* <p>petcounter:{petCounter}</p> */}
       <p>the favourite pet is:{petFavourite}</p>
    </div>
  );
}

export default Newapp;
