import { useEffect, useState } from "react";
import Dog from "./Dog";

const Catalog = ({setDogCatalog, dogCatalog}) => {
    

    useEffect(() => {
        const url = 'https://api.jsonbin.io/v3/b/66eab6b4e41b4d34e4328578';
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => { 
            let dogs = data.record.record;
            dogs.map((s, i)=> s.id = i+1); 
            setDogCatalog(dogs);
        })
    }, [])
    return ( 
        <div className="catalog">
            
            Catalog
            <button onClick={()=> {console.log(dogCatalog)}}>klick</button>
            <div className="catalog-list">
                {dogCatalog && dogCatalog.map(dog => (
                    <div className="dog-preview" key={dog.id}>
                        <Dog dog={dog}/>
                    </div>
                ))}
                {!dogCatalog && <div id="loading">Loading...</div> }
            </div>
        </div>
     );
}
 
export default Catalog;