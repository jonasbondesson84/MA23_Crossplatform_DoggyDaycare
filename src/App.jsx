import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Catalog from './components/Catalog'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SelectedDog from './components/SelectedDog'

function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [dogCatalog, setDogCatalog] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');    const [selectedOptions, setSelectedOptions] = useState([]);
  const [filterSex,setFilterSex] = useState([]);
  const [filterBreed,setFilterBreed] = useState([]);
  const [filterAge,setFilterAge] = useState([]);
  const [filterPresent, setFilterPresent] = useState([]);
  const [filterOptions, setFilterOptions] = useState(null);

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
      
      <Navbar />
      <div className="content">
        <Routes>
          
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
      </div>
    </div>
    </>
  )
}

export default App
