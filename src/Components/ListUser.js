import React , {useState,useEffect} from 'react'
import Card from './Card';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import {setUsersList} from "../store/userListSlice";
const ListUser = ({login}) => {
    //on l'enlev et on va ammener la liste du store . 

// const [users, setUsers] = useState([{}]) 
 const dispatch = useDispatch();
 //uici en userselector on lui donne la slice qu'il a besoin ,mais dans notre cas on aune seule slice 
 //donc tt la store 
 const {list}=useSelector(state=>state.users)
 //ici la liste est la valeur donc on map 3leha 
// Fetch Data
  useEffect(()=>{
      if(login) {
    const fetchData=()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     //meghir dispatch il ne sais pas ken tb3a el store ou nn 
     .then(res=>dispatch(setUsersList(res.data)))
     .catch(err=>console.log(err))
    }
    fetchData()}
   },[])
   

    return (
        <div>
            
            { list.map(el=> <Card user={el}/>)} 
            <h1>test</h1>
        </div>
    )
}

export default ListUser
