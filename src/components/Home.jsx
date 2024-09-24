import logo from '../assets/logo.webp'

const Home = ({dogCatalog}) => {
    return ( 
        <div>
            {dogCatalog && <div className='home center-content'>
                <p id='title'>Welcome to Doggy Daycare</p>
                <p >Dogs registered: {dogCatalog.length} </p>
                <p>Dogs currently present: {dogCatalog.filter(dog => dog.present).length}</p>
                </div>
            }
        </div>
     );
}
 
export default Home;