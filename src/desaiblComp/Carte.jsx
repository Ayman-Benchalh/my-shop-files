// import { useEffect, useState } from "react";
// import { MdAttachMoney } from "react-icons/md";
// import { FcCancel  } from "react-icons/fc";
// import Navbar from "./Navbar";




function Carte({product,searchvule}) {
  // const [dataCate,setdataCate]=useState([])
  // const [cartedata,setcartedata]=useState([])

  //  useEffect(()=>{
  //    if(product.length>0){
  //     setdataCate(product)
  //    }
  //  },[product])
  //   const prodtuis=()=>{
  //       if(searchvule!=""){
  //           const deta5=dataCate.filter((exdt)=>{
  //           return exdt.title.toLowerCase().includes(searchvule,0)|| 
  //           exdt.category.toLowerCase().startsWith(searchvule)})

  //           if(deta5.length>0){
  //             return  deta5.map((element,key)=>{
  //                 return <div className="carte" id="carte" key={key} onClick={()=>{setcartedata(cartedata =>[...cartedata,element.id])}}>
  //                       <img src={element.image} alt='img'/>
  //                       <h1>{element.title.slice(0,20)} ...</h1>
  //                       <p><MdAttachMoney/>{element.price}</p>
  //                       <h2>{element.category}</h2>
  //                       </div>
  //             })}
  //       }else{
  //           if(dataCate.length>0){
  //             return  dataCate.map((element,key)=>{
  //               return <div className="carte" id="carte" key={key} onClick={()=>{setcartedata(cartedata =>[...cartedata,element.id])}}>
  //               <img src={element.image} alt='img'/>
  //               <h1>{element.title.slice(0,20)} ...</h1>
  //               <p><MdAttachMoney/>{element.price}</p>
  //               <h2>{element.category}</h2>
  //               </div>
  //             })
  //             }
  //       }
    

  //   return <div className="erreur"><h1>No Product{<FcCancel/>}</h1></div>
  //   }
    
  //   useEffect(()=>{
  //     console.log(cartedata);
  //     if(cartedata.length>0){
  //       console.log(cartedata.length);
  //      <Navbar data="dddd"/>
  //     }
        
  
  //   },[cartedata])
      
    
    return ( <>
    
      {/* {prodtuis()} */}
    </>
     
   
     
  )
}

export default Carte