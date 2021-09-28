import React, { useEffect, useState } from 'react';
import Cart from '../cartCalclulation/Cart';
import Programer from '../Programer/Programer';
const Programers = () => {
    const [programers, setProgramers] = useState([]);

    const { cart, setCart } = useState([]);

    const handleAddHireMe = (add) => {
        console.log(add);
        const newAdd = [...cart, add]
        console.log(newAdd);
        setCart(newAdd)

    }
    useEffect(() => {
        fetch('../developer.json')
            .then(res => res.json())
            .then(data => setProgramers(data))
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-md-9 ">
                    {/* prodict load korbo */}
                    <div className='product-container row'>
                        {
                            programers.map(programer => <Programer
                                programer={programer}
                                handleAddHireMe={handleAddHireMe}
                            >

                            </Programer>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                    {/* ekhaner cart element  */}

                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Programers;