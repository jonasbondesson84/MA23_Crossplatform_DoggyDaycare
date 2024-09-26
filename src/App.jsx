import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Catalog from './components/Catalog'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SelectedDog from './components/SelectedDog'
import NavbarMobile from './components/NavbarMobile'
import {AnimatePresence} from 'framer-motion'


function App() {
  const location= useLocation();
  const [selectedDog, setSelectedDog] = useState(null);
  const [dogCatalog, setDogCatalog] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');    const [selectedOptions, setSelectedOptions] = useState([]);
  const [filterSex,setFilterSex] = useState([]);
  const [filterBreed,setFilterBreed] = useState([]);
  const [filterAge,setFilterAge] = useState([]);
  const [filterPresent, setFilterPresent] = useState([]);
  const [filterOptions, setFilterOptions] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false)
  

  useEffect(() => {
    const url = 'https://api.jsonbin.io/v3/b/66eab6b4e41b4d34e4328578';
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => { 
        let dogs = data.record.record;
        dogs.map((s, i)=> s.id = i+1); 
        setDogCatalog(dogs);
        const breeds = [...new Set(dogs.map(dog => dog.breed))]
            .sort()
        const ages = [...new Set(dogs.map(dog => dog.age))]
            .sort(function(a, b){return a - b})
        const sex = [...new Set(dogs.map(dog => dog.sex))]
            .sort()
        const pres = [...new Set(dogs.map(dog => dog.present))]
            .sort()
        setFilterOptions({sex: sex ,age: ages, breed: breeds, present: pres})
        
    })
}, [])

  return (
    <>
    
    <div className="app">
      
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <NavbarMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="content center-content">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            
            <Route path='/' element={<Home 
                                    dogCatalog={dogCatalog}
                                    />} />
            <Route path='/catalog' element={<Catalog 
                                    dogCatalog={dogCatalog} 
                                    filterOptions={filterOptions}
                                    filterAge={filterAge}
                                    setFilterAge={setFilterAge}
                                    filterBreed={filterBreed}
                                    setFilterBreed={setFilterBreed}
                                    filterPresent={filterPresent}
                                    setFilterPresent={setFilterPresent}
                                    filterSex={filterSex}
                                    setFilterSex={setFilterSex}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    
                                    />} />
            <Route path='/catalog/:selecteddog' element={<SelectedDog 
                                    dogCatalog={dogCatalog} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
    </>
  )
}

export default App
