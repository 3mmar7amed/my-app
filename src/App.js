import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {createTheme , ThemeProvider } from '@material-ui/core'
import ProductsList from './component/ProductsList';
import SetProducts from './component/SetProducts'
import {useState , useEffect} from 'react'
import ReactNotification from 'react-notifications-component'

function App() {
    
const [Products , setProducts ] = useState([
  

])

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },

  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

    useEffect(() => {
      fetch('https://juniortest-ammar-hamed.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])





     return (
      <ThemeProvider theme={theme}>
        <ReactNotification />

        <Router >
          <Routes>
          <Route path='/' element={<ProductsList Products = {Products} />} />
          <Route path="/addproduct" element={<SetProducts />} />

        </Routes>
      
      </Router>
      </ThemeProvider>
     
    );
}


export default App;

