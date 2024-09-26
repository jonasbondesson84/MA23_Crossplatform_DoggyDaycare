import logo from '../assets/logo.webp'
import {motion} from 'framer-motion'

const Home = ({dogCatalog}) => {
    return ( 
        <motion.div
            initial = {{width: 0, opacity:0 }}
            animate= {{width: "100%", opacity: 1}}
            exit={{x: window.innerWidth, opacity:0}}
        >
            {dogCatalog && <div className='home center-content'>
                <p id='title'>Welcome to Doggy Daycare</p>
                <p >Dogs registered: {dogCatalog.length} </p>
                <p>Dogs currently present: {dogCatalog.filter(dog => dog.present).length}</p>
                </div>
            }
        </motion.div>
     );
}
 
export default Home;