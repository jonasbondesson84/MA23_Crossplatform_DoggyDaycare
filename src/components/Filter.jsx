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
            <Select className='select-filter'
                    options={options} 
                    closeMenuOnSelect={false} 
                    value={filter}
                    onChange={handleChange}
                    isMulti
                    placeholder={filterName}
                    menuPosition="fixed" // Gör menyn 'fixed', vilket gör att den inte påverkas av föräldraelement
                    menuPortalTarget={document.body}
                    styles={{menu: provided => ({ ...provided, zIndex: 9999 })}}

            />
        </div>
     );
}
 
export default Filter;