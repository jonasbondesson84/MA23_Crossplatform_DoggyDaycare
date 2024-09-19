import { useEffect, useState } from "react";
import Dog from "./Dog";
import filterLogo from '../assets/filter_list.svg';
import Filter from "./Filter";


const Catalog = ({setDogCatalog, dogCatalog, setSelectedDog}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [filterSex,setFilterSex] = useState([])
    const [filterBreed,setFilterBreed] = useState([])
    const [filterAge,setFilterAge] = useState([])
    const [filterOptions, setFilterOptions] = useState(null)

   

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
            setFilterOptions({sex: sex ,age: ages, breed: breeds})
        })
    }, [])
    return ( 
        <div className="catalog">
            Catalog
            <div className="filter">
                <input type="text" className="search-field" onChange={e => setSearchTerm(e.target.value)} title="Filter by name" placeholder="Filter by name"/>
                <img src={filterLogo} alt="" className="filter-logo" onClick={() => {

                }}/>
                
                
            </div>
            <div className="active-filter">
                {filterOptions && <Filter filterOptions={filterOptions.sex} filterName='sex' setSelectedOptions={setFilterSex} filter={filterSex}/>}
                {filterOptions && <Filter filterOptions={filterOptions.breed} filterName='breed' setSelectedOptions={setFilterBreed} filter={filterBreed}/>}
                {filterOptions && <Filter filterOptions={filterOptions.age} filterName='age' setSelectedOptions={setFilterAge} filter={filterAge}/>}
            </div>
            
            <button onClick={()=> {console.log(filterOptions)}}>klick</button>
            <div className="catalog-list">
                {dogCatalog && dogCatalog
                
                    .filter((dog) => {return dog.name.toString().toLowerCase().includes(searchTerm.toLowerCase())})
                    .filter(dog => filterSex.length > 0 ? filterSex.some(filter => filter.value === dog.sex) : true)
                    .filter(dog => filterBreed.length > 0 ? filterBreed.some(filter => filter.value === dog.breed) : true)
                    .filter(dog => filterAge.length > 0 ? filterAge.some(filter => filter.value === dog.age) : true)
                    .map(dog => (
                        <div className="dog-preview" key={dog.id}>
                            <Dog dog={dog} setSelectedDog={setSelectedDog} />
                        </div>
                    ))
                }
                {!dogCatalog && <div id="loading">Loading...</div> }
            </div>
        </div>
     );
}
 
export default Catalog;