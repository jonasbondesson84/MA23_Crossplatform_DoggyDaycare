import { useEffect, useState } from 'react';
import Select from 'react-select'

const Filter = ({filterOptions, filterName, setSelectedOptions, filter}) => {
    const [options, setOptions] = useState([])
    
    useEffect(()=> {
         const options = [...new Set(filterOptions.map(option => ({
            value: option,
            label: String(option)
         })))]
         setOptions(options);
    }, [])
    const handleChange = (selectedOption) => {
       
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
                    placeholder={filterName}
                    menuPosition="fixed"
                    menuPortalTarget={document.body}
                    styles={{menu: provided => ({ ...provided, zIndex: 9999 })}}

            />
        </div>
     );
}
 
export default Filter;