import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { incrementNumber, decRementNumber } from './actions/incAndDec'

function App() {
  const myState = useSelector((state) => state.reducerNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>Incerement & Decrement Counter</h1>
      <h4>using React and Redux</h4>
      <Button onClick={() => dispatch(decRementNumber())} style={{ marginRight: 5, padding: 15 }} variant="contained"> - </Button>
      <TextField style={{ width: 80 }} type='nomber' value={myState} />
      <Button onClick={() => dispatch(incrementNumber())} style={{ marginLeft: 5, padding: 15 }} variant="contained"> + </Button>
    </div>
  );
}

export default App;
