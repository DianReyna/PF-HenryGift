import React, { useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { qrInformation } from "../../redux/actions/qrActions";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const QRCode = () => {

  const dispatch = useDispatch()
  const { information } = useSelector((state) => state.qr);
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries([...searchParams])

  useEffect(()=>{
    dispatch(qrInformation(query.user,query.product))
  },[dispatch])
  return (
    
      <Box sx={{ width: '100%', maxWidth: 700, mx:"auto" }}>
      <Typography variant="h1" gutterBottom>
        QRCode
      </Typography>
      {Object.keys(information).length>0 && <div>
        <Typography variant="h3" gutterBottom>
        User: {information.user}
        </Typography>
        <Typography variant="h3" gutterBottom>
        Provider Name: {information.providerName}
        </Typography>
        <Typography variant="h3" gutterBottom>
        Product Name: {information.productName}
        </Typography>
        <Typography variant="h3" gutterBottom>
        Active: {information.redeemed?"No":"Yes"}
        </Typography>
        </div>}
      </Box>
    
    
  )
}

export default QRCode