import './cart.css'

const Cart = ({selectedActors}) => {
    
    return (
        <div className=''>
            
            <h1>Selected</h1>
            <h3>Total Selected: {selectedActors.length}</h3>

            <ol>
                {
                    selectedActors.map((actor) => (
                        <li>name: {actor.name} <br />
                        price: {actor.salary}
                        </li>
                    ))
                }
            </ol>

        </div>
    );
};

export default Cart;