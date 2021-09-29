import React, { useEffect, useState } from 'react';
import Cart from '../cartCalclulation/Cart';
import Programer from '../Programer/Programer';
const Programers = () => {
    const [programers, setProgramers] = useState([]);

    const [selectedDeveloper, setSelectedDeveloper] = useState([]);

    useEffect(() => {
        fetch('../developer.json')
            .then(res => res.json())
            .then(data => setProgramers(data))
    }, []);


    //for add  to cart button

    const AddToDeveloper = (developer) => {
        const existMember = selectedDeveloper.find(singleDev => singleDev.name === developer.name);
        if (!existMember) {
            const newMembers = [...selectedDeveloper, developer];
            setSelectedDeveloper(newMembers);
        }
        else {
            alert("This Member already added!");
        }
    }

    let totalCost = 0;
    for (const dev of selectedDeveloper) {
        totalCost=totalCost +parseInt(dev.salary);
        console.log(totalCost);
    }





    return (
        <div>
            <div className="row">
                <div className="col-md-9 ">
                    {/* prodict load korbo */}
                    <div className='product-container row'>
                        {
                            programers.map(programer => <Programer
                                key={programer.id}
                                programer={programer}
                                AddToDeveloper={AddToDeveloper}
                               ></Programer>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                <div className="col-12 selected-developer">
                <div className="total">
                    <h5>Added Developer:{selectedDeveloper.length}</h5>
                    <h5>Total Cost:{totalCost}$</h5>
        
                </div>
                {
                    selectedDeveloper.map(selectedDev =><Cart
                        key={selectedDev.key}
                        selectedDev={selectedDev}
                    ></Cart>)
                  
                    }

            </div>
                </div>
            </div>
        </div>
    );
};

export default Programers;
