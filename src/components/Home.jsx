import logo from '../assets/logo.webp'
import {motion} from 'framer-motion'


const Home = ({dogCatalog}) => {
    return ( 
        <motion.div
            initial = {{opacity:0 }}
            animate= {{ opacity: 1}}
            exit={{opacity:0}}
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