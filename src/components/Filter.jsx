import { useEffect, useState } from 'react';
import Select from 'react-select'

const Filter = ({filterOptions, filterName, setSelectedOptions, filter}) => {
    const [options, setOptions] = useState([])
    
    useEffect(()=> {
        console.log(filterOptions);
         const options = [...new Set(filterOptions.map(option => ({
            value: option,
            label: option
         })))]
         console.log(options);
         setOptions(options);
    }, [])
    const handleChange = (selectedOption) => {
        // console.log("selectedOptions")
        // console.log(selectedOption);
        setSelectedOptions(selectedOption);
    }

    return ( 
        <div className="filter-options">
            <Select
                    options={options} 
                    closeMenuOnSelect={false} 
                    value={filter}
                    onChange={handleChange}
                    isMulti
            />
            {/* <button onClick={() => {console.log(selectedOptions)}}>klick</button> */}
            {/* {filterOptions && filterOptions
                
                .map(filter => (
                    <div className="dog-preview" key={filter.id}>
                        <Select options={filter[filterName]} />
                        {filter[filterName]} 
                    </div>
                ))} */}
            
        </div>
     );
}
 
export default Filter;