import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper} from "@mui/material";
import {Grid} from "@mui/material";
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {putUsersUpdate, getUsersById, getUsers} from "../../redux/actions/userActions";

export default function BoxUser({userId}) {

    const dispatch = useDispatch();  
    const [currentUser, setCurrentUser] = useState({});

    const[shopping, setSopping] = useState(false);

    
    const itemsUser = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getUsers()); 
        dispatch(detailBox(userId))
          }, [dispatch,userId])

    
        let userBox = itemsUser.users.filter((u) => u.shopping === userId);
        userInfo = userInfo[0];
        setCurrentUser(userInfo);
        setSopping(userInfo.shopping)
         
    }

    let shoppingUser = setSopping(userInfo.shopping)
            if(userInfo.shopping){
             return shoppingUser
            } 
    

   