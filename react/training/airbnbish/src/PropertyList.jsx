import "./PropertyList.css";
import Property from "./Property";

function PropertyList({ data }) {
    return (
        <div className="container">
            {data.map((p) => (
                <Property 
                key={p.id} 
                name={p.name}
                rating={p.rating}
                price={p.price} />
            ))}
        </div>        
    );
}

export default PropertyList;