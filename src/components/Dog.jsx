import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dog = ({dog, setSelectedDog}) => {
    const navigate = useNavigate()
    const [isTapped, setIsTapped] = useState(false);
    return ( 
        
        <motion.div 
            className={`dog ${dog.present ? 'box-shadow-green' : 'box-shadow-red'} padding-20 margin-20 box-shadow-light border-default`}
            onTap={() => {setIsTapped(true);
                setTimeout(() => {
                    setIsTapped(false);
                    navigate(`/catalog/${dog.id}`);
                }, 700);
            }
            } 
            animate={isTapped ? {
                rotateX: 360,
            } : {}}
            transition={{
                duration: 0.1, 
            }}
            whileHover={{opacity:1, scale: 1.1}}
        >
            <p id="dog-name">{dog.name}</p>
            <motion.img src={dog.img} alt="" id="dog-img" />
        </motion.div>
     );
}
 
export default Dog;
<div className="dog">

</div>