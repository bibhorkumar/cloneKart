import logo from './logo.svg';
import './App.css';
import { AppBar, Icon, SvgIcon, TextField, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography>CloneKart</Typography>
          <TextField id='search-bar' variant='outlined' size='small'></TextField>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
