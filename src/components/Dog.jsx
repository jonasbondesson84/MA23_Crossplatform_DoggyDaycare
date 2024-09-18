import { Link } from "react-router-dom";

const Dog = ({dog}) => {
    return ( 
        
        <Link to={`/catalog/${dog.id}`} >
        <div className="dog">
            
            <p id="dog-name">{dog.name}</p>
            <p id="dog-sex">{dog.sex}</p>
            <img src={dog.img} alt="" id="dog-img" />
            <p>ID: {dog.id}</p>
            
        </div>
        </Link>
     );
}
 
export default Dog;
<div className="dog">

</div>