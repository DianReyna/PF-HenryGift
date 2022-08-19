import React, { useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { qrInformation } from "../../redux/actions/qrActions";
import { useSelector, useDispatch } from "react-redux";
const QRCode = () => {

  const dispatch = useDispatch()
  const { information } = useSelector((state) => state.qr);
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries([...searchParams])

  useEffect(()=>{
    dispatch(qrInformation(query.user,query.product))
  },[dispatch])
  return (
    <>
      <h1>QRCode</h1>
     {Object.keys(information).length>0 && <div><p>User: {information.user}</p>
      <p>Provider Name: {information.providerName}</p>
      <p>Product Name: {information.productName}</p>
      <p>Active: {information.redeemed?"No":"Yes"}</p></div>}
    </>
    
  )
}

export default QRCode