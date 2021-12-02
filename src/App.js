import { petDecrement, petIncrement} from './actions';
import {useSelector,useDispatch} from 'react-redux';
function App() {
  const dispatch = useDispatch()
  const petCounter = useSelector((state) => state.petCounter);
  const petFavourite = useSelector((state) => state.petFavourite);
  return (
    <div className="App">
       <h1>welcome to react-redux crash coursh </h1>
       <button onClick={()=>dispatch(petIncrement(2))}> add Pet</button>
       <button onClick={()=>dispatch(petDecrement(4))}>remove pet</button>
       <p>petcounter:{petCounter}</p>
       <p>the favourite pet is:{petFavourite}</p>
    </div>
  );
}

export default App;
