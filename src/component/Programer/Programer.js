import React from 'react';
import './programer.css'
const Programer = (props) => {
  console.log(props.programer)
  const {name,img,gender,email,age,salary}=props.programer ||{};
    return (
        <div className='col-md-4 g-2'>
            <div class="card-group ">
  <div class="card cardstyle">
    <img src={img} class="image" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Name:{name}</h5>
      <p class="card-title">Age:{age}</p>
      <p class="card-title">Gender:{gender}</p>
      <p class="card-title">Email:{email}</p>
      <h5 class="card-title">Salary:${salary}</h5>
     
    </div>
    <div class="card-footer">
      <button className='bg-primary text-white'
      onClick ={()=>props.AddToDeveloper(props.programer)} >
      <span><i class="fas fa-shopping-cart"></i></span>Hire Me</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Programer;