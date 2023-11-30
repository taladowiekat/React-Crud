import React from 'react'

function Input({id,title,type,handelData,name,e,value}) {
  return (
    <div className='mb-3'>
    <label htmlFor={id} className='form-label'>{title}</label>
    <input type={type} name={name} className='form-control'id={id} onChange={handelData} value={value}/>
    {e[name]&& <p className='text-danger'>{e[name]}</p>}
    </div>
  )
}

export default Input