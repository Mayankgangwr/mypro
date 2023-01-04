import React , {useEffect, useState} from 'react';
import axios from "axios";
import './menu.css';
import {useNavigate,  useParams} from 'react-router-dom';
const Rectro = ({FoodCard, cart, AddCart,show , contoinue}) => {
  const [input, setInput] = useState("");
  const [MenuData, setMenuData] = useState([]);
  const parameter = useParams();
  const navigate = useNavigate();
console.log(parameter.restroid);

  useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get(`https://sattasafari.com/restro/read.php?restro_id=${parameter.restroid}`).then(function(response) {
            console.log(response.data);
            setMenuData(response.data);
        });
    }
    const Filtered = (e) => {
      const value = e.target.value;
      setInput(value);
  }
  const sdata = MenuData.filter(item => 
    {
      if(input!=='')
      {
        return item.category === input;
      }else{
        return item.category !== input;
      }
    });
  
  return (
    <>

<section className="main">
  <div className="container-fluid">
    <h1 className="text-center mt-3" style={{fontFamily: 'Aclonica', textShadow: '1.2px 2px 3px #6c6767',
    color: '#d82643'}}>OUR MENU</h1>
    <div className="row">
    <div className='col-6 my-1 mx-0 py-1'>
    <select className='form-control' name='cat' onChange={Filtered}>
    <option value="">Select Cat</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Fastfood">FastFood</option>
        <option value="Dinner">Dinner</option>
        <option value="Dinks">Dinks</option>
    </select>
    </div>
    <div className='col-6 py-1 mx-0 my-1'>
        <input type="text" className='form-control'  name="name"  onChange={Filtered} placeholder="Search Food"/>
    </div>
    {sdata.map((props) => (
        <FoodCard 
         id={props.id} 
         title={props.title}
         price={props.price}
         mrp={props.mrp}
         img={props.img}
         AddCart={AddCart}
         />
      ))}          
    </div>
   </div>
</section>
<nav key='1' className={`navbar ${show} navbar-expand fixed-bottom bg-dark`}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mt-1">
        <li className="nav-item">
          <h5 className="text-light" href="#">Item {cart.reduce((total, item) => {
        return total + parseInt(item.qty);
      }, 0)} </h5>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mt-1">
        <li className="nav-item">
          <button onClick={() =>
             {
              contoinue(parameter.restroid,parameter.tableno);
              navigate(`/${parameter.restroid}/${parameter.tableno}/cart`);
             }
             } className="text-light" >Continue <i className="fas fa-long-arrow-alt-up"></i></button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
);
};
export default Rectro;
