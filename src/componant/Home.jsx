
import { useEffect, useRef, useState } from 'react'
import { BiSearch} from 'react-icons/bi';
import { FcApproval , FcElectronics,FcCancel } from "react-icons/fc";
import { IoIosMan , IoIosWoman } from "react-icons/io";
import { IoDiamondOutline , IoClose} from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete ,MdAttachMoney } from "react-icons/md";
import { FaStar } from "react-icons/fa";




function Home() {
    const [data,setdata]=useState([])
    const [serchs,setserchs]=useState('')
    const [dataCate,setdataCate]=useState([])
    const [cartedata,setcartedata]=useState([]) 
    const [finlecarte,setfinlecarte]=useState([])
  
    const search1=useRef()
    const elenmts1 =useRef()
    const elenmts2 =useRef()
    const idelenmtdelete =useRef(0)
    const  getdatatyp= async()=>{
        const api="https://fakestoreapi.com/products";
       await fetch(api)
        .then(respo=>respo.json())
        .then(datae =>setdata(datae))

    }

    useEffect(()=>{getdatatyp()},[])

   useEffect(()=>{
     if(data.length>0){
      setdataCate(data)
     }
   },[data])

    const prodtuis=()=>{
        if(serchs!=""){
            const deta5=dataCate.filter((exdt)=>{
              return exdt.title.toLowerCase().includes(serchs,0)|| 
            exdt.category.toLowerCase().startsWith(serchs)})

            if(deta5.length>0){
              return  deta5.map((element,key)=>{
                  return <div className="carte" id="carte" key={key} onClick={()=>{setcartedata(cartedata =>[...cartedata,element.id])}}>
                        <img src={element.image} alt='img'/>
                        <h1>{element.title.slice(0,20)} ...</h1>
                        <p><MdAttachMoney/>{element.price}</p>
                        <h2>{element.category}</h2>
                        {/* <span>{element.rating.rate}</span> */}
                        </div>
              })}
        }else{
            if(dataCate.length>0){
              return  dataCate.map((element,key)=>{
                return <div className="carte" id="carte" key={key} onClick={()=>{setcartedata(cartedata =>[...cartedata,element.id])}}>
                <img src={element.image} alt='img'/>
                <h1>{element.title.slice(0,20)} ...</h1>
                <p><MdAttachMoney/>{element.price}</p>
                <h2>{element.category}</h2>
                <span>{parseInt(element.rating.rate)==1?<><FaStar/></>:parseInt(element.rating.rate)==2?<><FaStar/><FaStar/></>:parseInt(element.rating.rate)==3?<><FaStar/><FaStar/><FaStar/></>:parseInt(element.rating.rate)==4?<><FaStar/><FaStar/><FaStar/><FaStar/></>:"erre"}</span>
                </div>
              })
              }
        }
    

    return <div className="erreur"><h1>No Product{<FcCancel/>}</h1></div>
    }
 
   




  useEffect(()=>{
    const stocktruedata= cartedata.map((elenmt1)=>{ return data[--elenmt1]})
  
    setfinlecarte(stocktruedata)
  },[cartedata, data])
  useEffect(()=>{
   console.log(data);
  },[data])
  
  const opemadd=(e)=>{
    e.preventDefault();
    elenmts1.current.style.display = "block"; }
  
  const closeAdd =()=>{elenmts1.current.style.display="none"}


  const coutnerprix =()=>{
    let a=0;
  
    finlecarte.map((dd)=>{return a+=dd.price})
    return parseInt(a)

  }


  


return (<>

 
  
  <div className="containercont">
    <div className="containerNav">
        <div className="logo"><h1>Shop-my</h1></div>
        <div className="navpart">
            <ul>
              {/* <li><a href="#">Home</a> </li> */}
                 
                <li><a href="" onClick={opemadd}><FaCartShopping/> ({cartedata.length})</a></li>
            </ul>
            
        </div>
    </div>
        <div className="content">
           <div className="serachcont">
      <div className="seachparty">
         <input type="search" ref={search1} placeholder='Search'    id="search" />
        <button type="submit" onClick={()=>{setserchs(search1.current.value)}}><BiSearch/></button>
   
      </div>
       <div className="allVew"> 
       <button type="submit" onClick={()=>{setserchs('')}}> Vew All <FcApproval />
       </button></div>
        <div className="category">
          <button onClick={()=>{setserchs('mens')}}><IoIosMan /> mens clothing</button>
          <button onClick={()=>{setserchs('womens')}}><IoIosWoman /> womens clothing</button>
          <button onClick={()=>{setserchs('jewelery')}}><IoDiamondOutline /> jewelery</button>
          <button onClick={()=>{setserchs('electronics')}}><FcElectronics /> electronics</button>
          
          </div>
      </div>
   
      <div className="groupecarte">
        {prodtuis()}
      </div>
        </div>
   
      <div className="containercar" ref={elenmts1}  >
        
        <div className="contentCart" >
            
            <div className="party1">
              <h1>Your Prodcut</h1>
              <div className="contentparty">
                <table>
                  <thead>
                    <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>delete</th></tr>
                  </thead>
                  <tbody>

                  {
                  finlecarte.map((print,key)=>(<tr key={key} ref={idelenmtdelete} id={print.id}>
                    
                    <td><img src={print.image} alt="img" width={'15%'} height={'15%'}/></td>
                    <td>{print.title.slice(0,10)}...</td><td> <MdAttachMoney /> {print.price}</td> 
                    <td><p ><MdDelete /></p></td></tr>))
                    }
                    
                  </tbody>
                </table>
               
              </div>
           
                <button onClick={()=>{setfinlecarte([]);setcartedata([])}}>Delete All <MdDelete /></button>
              
              
              </div>
            <div className="bar"></div>
            <div className="party2">
              <h2>Total product : {cartedata.length}</h2>
              <p>Total prix : {coutnerprix()} $</p>
              <button> <MdAttachMoney /> Pay-now </button>
            </div>
            <span onClick={closeAdd} ref={elenmts2}><IoClose /></span>
        </div>
      </div>
   
      </div>
   
   </>
  )
}

export default Home
