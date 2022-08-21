import React from 'react'
import { userAdmin } from '../../redux/reducer/userSlice';

function userCard({email, dateBirth, first_name, last_name})

const dispatch = useDispatch();

{
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Name: {first_name} {last_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Email: {email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Date Birth: {dateBirth}
        </Typography>
      </CardContent>
      </Card>
  )
}


export default userCard
