import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header/header";
import Home from "./components/header/Home/Home";

import DetailView from './components/details/DetailView';

import { DataProvider } from './context/DataContext';
import {Box} from "@mui/material" 

import {BrowserRouter, Routes,Route} from 'react-router-dom';




function App() {
  return (

    <DataProvider>
      <BrowserRouter>
        <Header />
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<DetailView/>}/>

        </Routes>

        
      </Box>

      </BrowserRouter>
      
    </DataProvider>

  );
}

export default App;


