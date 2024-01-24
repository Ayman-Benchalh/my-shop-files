
import { useEffect, useState } from "react";

function CardTotle(props) {
  const [arraydata,setarraydata]=useState([])
  console.log(props.data);
  useEffect(()=>{setarraydata(props.data)}, [props.data])
  useEffect(()=>{console.log(arraydata);}, [arraydata])

  return (
    <div>
      
      <div className="containercar">
        <h1>this a your cartd</h1>
      </div>
    </div>
  )
}

export default CardTotle
