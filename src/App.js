import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { incrementNumber, decrementNumber, multiplicationNumber, divitionNumber } from './actions/actionNumber'

function App() {
  const myState = useSelector((state) => state.incAndDecReducerNumber);
  const myOtherState = useSelector((state) => state.multAndDivtnReducerNumber);
  const dispatch = useDispatch();
  return (
    <div >
      <div>
        <h1>Redux</h1>
        <h1>Incerement & Decrement Counter</h1>
        <h4>using React and Redux</h4>
        <Button onClick={() => dispatch(decrementNumber())} style={{ marginRight: 5, padding: 15 }} variant="contained"> - </Button>
        <TextField style={{ width: 80 }} type='nomber' value={myState} />
        <Button onClick={() => dispatch(incrementNumber())} style={{ marginLeft: 5, padding: 15 }} variant="contained"> + </Button>
      </div>
      <div>
        <h1>=================================</h1>
        <h1>Divition & Multiplicition</h1>
        <h4>using React and Redux</h4>
        <Button onClick={() => dispatch(divitionNumber())} style={{ marginRight: 5, padding: 15 }} variant="contained"> / </Button>

        <TextField style={{ width: 80 }} type='nomber' value={myOtherState} />

        <Button onClick={() => dispatch(multiplicationNumber(5))} style={{ marginLeft: 5, padding: 15 }} variant="contained"> * </Button>
      </div>

    </div>
  );
}

export default App;
