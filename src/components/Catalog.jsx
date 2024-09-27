import { useEffect, useState } from "react";
import Dog from "./Dog";
import filterLogo from '../assets/filter_list.svg';
import Filter from "./Filter";
import {motion} from 'framer-motion'
import '../css/Catalog.css'

const Catalog = ({ dogCatalog, 
                    filterOptions,
                    filterAge,
                    setFilterAge,
                    filterBreed,
                    setFilterBreed,
                    filterPresent,
                    setFilterPresent,
                    filterSex,
                    setFilterSex,
                    searchTerm,
                    setSearchTerm
                }) => {

    return ( 
        <div className="catalog">
            <div className="filter center-content" >
                <input type="text" className="search-field" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} title="Filter by name" placeholder="Filter by name" />
            </div>
            {filterOptions && <div className="active-filter">
                <Filter filterOptions={filterOptions.breed} filterName='breed' setSelectedOptions={setFilterBreed} filter={filterBreed}/>
                <Filter filterOptions={filterOptions.age} filterName='age' setSelectedOptions={setFilterAge} filter={filterAge}/>
                <Filter filterOptions={filterOptions.sex} filterName='sex' setSelectedOptions={setFilterSex} filter={filterSex}/>
                <Filter filterOptions={filterOptions.present} filterName='present' setSelectedOptions={setFilterPresent} filter={filterPresent}/>
            </div>}
            <motion.div className="catalog-list"
                initial = {{width: 0, opacity: 0}}
                animate= {{width: "100%", opacity: 1}}
                exit={{x: window.innerWidth, opacity:0}}
                >
                {dogCatalog && dogCatalog
                    .filter((dog) => {return dog.name.toString().toLowerCase().includes(searchTerm.toLowerCase())})
                    .filter(dog => filterSex.length > 0 ? filterSex.some(filter => filter.value === dog.sex) : true)
                    .filter(dog => filterBreed.length > 0 ? filterBreed.some(filter => filter.value === dog.breed) : true)
                    .filter(dog => filterAge.length > 0 ? filterAge.some(filter => filter.value === dog.age) : true)
                    .filter(dog => filterPresent.length > 0 ? filterPresent.some(filter => filter.value === dog.present) : true)
                    .map(dog => (
                        <div className="dog-preview" key={dog.id}>
                            <Dog dog={dog}/>
                        </div>
                    ))
                }
                {!dogCatalog && <div id="loading">Loading...</div> }
            </motion.div>
        </div>
     );
}
 
export default Catalog;