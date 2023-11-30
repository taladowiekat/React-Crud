import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Input from '../Shared/Input.jsx';
import { vaidData } from '../validation/valid.js';
function Create() {
  const navigate=useNavigate();
  //? for testing
  // const changeAge=(e)=>{
  //   e.preventDefult;
  //   //console.log(e.target.value); //بطبع الفاليو بالكونسول بس ما بعدل عليها
  //   setAge(e.target.value);
  //   // setAge(a);
  // }
    // let [user,setUser]=useState({
  //   name:'',
  //   email:'',
  //   password:''
  // })

  // const changeData = (e)=>{
  //   console.log(e.target.value);
  //   //لما اعمل هيك واعطي هاد الفنكشن لكل الداتا الفنكشن  بصير يعدل علكل الانبوتس
  // }



  // const changeData = (e)=>{
  // // e.target.name=e.target.value;
  // setUser({
  //   ...user,//هيك عشان اخليه يجبلي  كل القيم القديمة بدون ما يعمل ريفريش وهاي اسمها سبليت
  //   [e.target.name]:e.target.value
  // })
  // console.log(user)
  // // ليش عملتها هيك ؟ لانه الجزء الاول هو متغير مش ثابت والكي ما بصير يكون متغير عشان هيك بقبلها بطريقة انه في اقواس
  // }

  let [errors,setErrors] =useState({
    name:'',
    email:'',
    password:''
  })

  let [user,setUser]=useState({
    name:'',
    email:'',
    password:''
  })
  let[loader,setloader] = useState(false)
  let [errorBack , setErrorBack] = useState('');
  //نفس الفنكشن يلي قبله بطريقة احسن
const changeData=(e)=>{
  const{name,value}=e.target;//? =>destructing
  setUser({
    ...user,
    [name]:value
  })}

const sendData=async(e)=>{
  e.preventDefault();
  setloader(true);
  if(Object.keys(vaidData(user)).length>0){
    setErrors(vaidData(user))

  }else{
    try{
      const{data}=await axios.post("https://crud-users-gold.vercel.app/users/",user);//=>user=>الاوجيكت يلي رح يشتغل عليه
      // console.log(data);
      if(data.message=="success"){
        toast.success("added user successfully");
        navigate('/users/index')
        setloader(false);
      }
    }catch(error){
      setErrorBack(error.response.data.message)
      setErrorBack([]);
      setloader(false);
    }
  }
}

if(loader){
  return(
    <>
    <div className="spinner-border" role="status">
      <span className='sr-only'></span>
    </div>
    </>
)
}
  return (

<div className="container-fluid">
  <div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>
          <li>
            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-speedometer2" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
          </li>
          <li>
            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
              <i className="fs-4 bi-bootstrap" /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-grid" /> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
              </li>
              <li>
                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
            <span className="d-none d-sm-inline mx-1">loser</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
     {/* <div className="col py-3">
    //? for testing 
       <form action="">
        <label htmlFor='age'>user age</label>
        <input type="text" id='age' value={age} onChange={()=>changeAge(event)}/>
        <p>age is {age}</p>
        <button>click</button>
      </form> 
    </div> */}
    {errorBack&&<p className="text text-danger">{errorBack}</p>}
<form onSubmit={sendData}>
<Input e={errors} type={'text'} id={'username'} title={'user name'} name={'name'} handelData={changeData}/>
<Input e={errors} type={'email'} id={'email'} title={'user email'} name={'email'} handelData={changeData}/>
<Input e={errors} type={'password'} id={'userpassword'} title={'user password'} name={'password'} handelData={changeData}/>
  <div className="mb-3" >
    <input type="submit" className="form-control" value='add user'/>
  </div>
</form>

  </div>
</div>




  )
}

export default Create