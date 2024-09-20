import { Link } from "react-router-dom";

const Dog = ({dog, setSelectedDog}) => {
    return ( 
        
        <Link to={`/catalog/${dog.id}`} >
        <div className={`dog ${dog.present ? 'present' : 'notPresent'}`} onClick={() => {
                            setSelectedDog(dog);
                        }}>
            
            <p id="dog-name">{dog.name}</p>
            
            <img src={dog.img} alt="" id="dog-img" />
            
            
        </div>
        </Link>
     );
}
 
export default Dog;
<div className="dog">

</div>