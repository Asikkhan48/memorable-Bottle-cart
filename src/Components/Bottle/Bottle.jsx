import PropTypes from "prop-types"
import "./botle.css"

const Bottle = ({bottle, handleBottletoCart}) => {

  const {name, id, img, price} = bottle;
    return (
        <div className="bottle">
            
                <h1>Bottle: {name}</h1>
                <img src={img} alt="" />
                <p>ID: {id}</p>
                <p>Price: {price}</p>
                <button onClick={()=> handleBottletoCart(bottle)}>Purchage</button>
            
        </div>
    );
};
Bottle.propTypes ={
  bottle: PropTypes.object.isRequired,
  handleBottletoCart: PropTypes.func.isRequired

}
export default Bottle;