import "./Property.css";

function Property({ name, rating, price }) {
    return (
        <div className="property">
            <h1>{name}</h1>
            <h2>${price} a night</h2>
            <h3>{rating} ⭐️</h3>
        </div>
    );
}

export default Property;