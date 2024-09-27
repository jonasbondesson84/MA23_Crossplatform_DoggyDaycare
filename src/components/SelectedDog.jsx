import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import phone from '../assets/phone.svg'
import {motion} from 'framer-motion'
import '../css/SelectedDog.css'

const SelectedDog = ({dogCatalog}) => {
    
    const [dog, setDog] = useState(null);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=> {
        if(dogCatalog == null ) {
            navigate('/catalog');
        } else if ('selecteddog' in params) {
            if(params.selecteddog > 0 && params.selecteddog < dogCatalog.length) {
                const dogID = Number(params.selecteddog);
                setDog(dogCatalog[dogID-1]);
            }
        }
       
    }, [params])

    return ( 
        <article>
            <motion.div className="selected-dog padding-20 margin-20 box-shadow-heavy border-default"
            initial = {{ opacity:0 }}
            animate= {{ opacity: 1}}
            exit={{ opacity:0}}
            >
            {dog && (
                <div className="dog-info">
                <img src={dog.img} alt={dog.name} className="dog-image" />
                <div className="dog-details">
                    <p className="dog-name">{dog.name}</p>
                    <p>Age: {dog.age}</p>
                    <p>Breed: {dog.breed}</p>
                    <p>Sex: {dog.sex}</p>
                    <p>
                    Owner: {dog.owner.name} {dog.owner.lastName}{" "}
                    <a href={`tel:${dog.owner.phoneNumber}`}>
                        <img
                            src={phone}
                            alt={dog.owner.phoneNumber}
                            title={dog.owner.phoneNumber}
                            className="phone-icon"
                        />
                    </a>
                    </p>
                </div>
                </div>
            )}
            </motion.div>
        
        </article>
     );
}
 
export default SelectedDog
