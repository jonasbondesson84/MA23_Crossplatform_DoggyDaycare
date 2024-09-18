import { useLocation } from "react-router-dom";

const SelectedDog = () => {
    const location = useLocation();
    const dog = location.state;
    console.log(location);
    console.log(dog)
    return ( 
        <div className="selected-dog">
            {/* {dog.name} */}
        </div>
     );
}
 
export default SelectedDog
