import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const Manager = () => {
  const[form, setform] = useState({site: "", username: "", password: ""});
  const [passwordArray, setPasswordArray] = useState([])
  
  const getPasswords = async () =>{
let req = await fetch(`${backendUrl}/`)
    let passwords = await req.json()
    console.log(passwords)
    setPasswordArray(passwords)
    
  }

  useEffect(() => {
    getPasswords()
    
  }, [])

  const copyText = (text)=>{
    toast('🦄 Your Text is Copied :)', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    navigator.clipboard.writeText(text)
  }
  

  const savePassword= async() => {
    if(form.site.length > 5 && form.username.length > 4 && form.password.length > 4){
    
    await fetch(`${backendUrl}/`, {method: "DELETE", headers: {"Content-type": "application/json"},
    body: JSON.stringify({id: form.id})})

    console.log(form)
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
    await fetch(`${backendUrl}/`, {method: "POST", headers: {"Content-type": "application/json"},
    body: JSON.stringify({ ...form, id: uuidv4( )})})
    //localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
    //console.log([...passwordArray, form])
    setform({site: "", username: "", password: ""})

    toast('⭐ You just saved a new Pasword :)', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    navigator.clipboard.writeText()
}else{
  toast('😲 Password entries empty or too Short', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    navigator.clipboard.writeText()
}
  }
  const deletePassword= async(id) => {
    console.log("Deleted password of id: ", id)
    let conf = confirm("Really want to delete this password!!!")
    if(conf){
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
    let res = await fetch(`${backendUrl}/`, {method: "DELETE", headers: {"Content-type": "application/json"},
    body: JSON.stringify({id})})
    //localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    //console.log([...passwordArray, form])
    }
    toast('👌 Password deleted :)', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
    navigator.clipboard.writeText(id)
    
  }
  const editPassword= (id) => {
    console.log("editing password of id: ", id)
    
    setform({...passwordArray.filter(i=>i.id===id)[0], id: id})
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
  }

  const handleChange= (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
  
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

  <div className="-z-10 w-full px-5 py-24 [background:radial-gradient(125%_225%_at_50%_10%,#000_40%,#63e_100%)] fixed inset-0 h-full min-h-screen"></div>


  <div className=" p-3 md:w-2/3 mx-auto md:mycontainer min-h-[80.2vh]">
    
    <h1 className='text-4xl text font-bold text-center'>
      <span className='text-white'>Pass</span>
          <span className='text-purple-500'>Buddy
            <lord-icon
    src="https://cdn.lordicon.com/kpfqbkcv.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#8930e8"
    >
</lord-icon>
          </span>
          </h1>
    <p className='text-purple-300 text-xl text-center '>Holding passwords that matter</p>

  <div className="text-white flex flex-col p-4 gap-7 items-center">
    <input value={form.site} onChange={handleChange} placeholder="Enter Website's URL" className='bg-slate rounded-full border-3 border-purple-800 w-full text-white p-4 py-1' type="text" name="site" id="site" />
    <div className="flex flex-col md:flex-row w-full justify-between gap-7">
      <input value={form.username} onChange={handleChange} placeholder="Your UserName Here!" className='bg-white rounded-full border-2 border-purple-800 w-full text-purple-950 p-4 py-1'type="text" name="username" id="username"/>

        <input value= {form.password} onChange={handleChange} placeholder="Add your PassWord :)" className='bg-white rounded-full border-2 border-purple-800 w-full text-purple-950 p-4 py-1'type="password" name="password" id="password"/>
      
      
    </div>

    <button onClick={savePassword} className='flex justify-center items-center gap-2  rounded-full px-7 py-2 w-fit hover:bg-purple-400 border-3 border-white'>
       <lord-icon
    src="https://cdn.lordicon.com/rihvnffu.json"
    trigger="hover"
    colors="primary:#ffffff"
    >
</lord-icon>
      Add Password</button>
    </div>
    <div className="passwords">
      <h2 className="flex font-bold text-2xl py-4 text-white">Stored Passwords
        <lord-icon
    src="https://cdn.lordicon.com/gqfozvrp.json"
    trigger="hover"
    colors="primary:#ffffff"
    >
</lord-icon>
      </h2>
      {passwordArray.length === 0 && <div className='text-white justify-center align-center'>No passwords stored, Add one now!</div>}
      {passwordArray.length != 0 && <table className="text-white w-full gap-2 px-10 py-4 rounded-3xl overflow-hidden border-3 border-purple-600 table-auto mb-10">
  <thead className="bg-purple-600 text-white">
    <tr>
      <th className="py-2">Site's URL</th>
      <th className="py-2">Username</th>
      <th className="py-2">Password</th>
      <th className="py-2">Make Changes</th>
    </tr>
  </thead>
  <tbody className='bg-purple-100 text-purple-950'>
    {passwordArray.map((item, index)=>{
      return <tr key={index}>
      <td className=" py-1 text-center">
        <div className='flex item-center justify-center'>
        <a href={item.site} target='_blank'>{item.site}</a>
        <div className="size-7 cursor-pointer" onClick={()=>{copyText(item.site)}}>
      <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#8930e8"
    style={{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
    >
</lord-icon>
      </div>
      </div>
      
      </td>
      <td className="py-1 text-center">
        <div className='flex item-center justify-center'>
        <span>{item.username}</span>
        <div className="size-7 cursor-pointer" onClick={()=>{copyText(item.username)}}>
      <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#8930e8"
    style={{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
    >
</lord-icon>
      </div>
      </div>
      </td>

      <td className="py-1 text-center">
        <div className='flex item-center justify-center'>
        <span>{"*".repeat(item.password.length)}</span>
        <div className="size-7 cursor-pointer" onClick={()=>{copyText(item.password)}}>
      <lord-icon
    src="https://cdn.lordicon.com/aupkjxuw.json"
    trigger="hover"
    colors="primary:#8930e8"
    style={{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
    >
</lord-icon>
      </div>
      </div>
      </td>
      <td className="py-1 text-center">
        <span className="cursor-pointer mx-1" onClick={()=>{editPassword(item.id)}}>
          <lord-icon 
    src="https://cdn.lordicon.com/qawxkplz.json"
    trigger="hover"
    colors="primary:#8930e8"
    style={{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
    >
</lord-icon></span>
        <span className="cursor-pointer mx-1" onClick={()=>{deletePassword(item.id)}}><lord-icon 
    src="https://cdn.lordicon.com/xyfswyxf.json"
    trigger="hover"
    colors="primary:#8930e8"
    style={{"width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px"}}
    >
</lord-icon></span>
      </td>
    </tr>
    })}
  </tbody>
</table>}
    </div>
  </div>
  
    </>
  )
}

export default Manager

