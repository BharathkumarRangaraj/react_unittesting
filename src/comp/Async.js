import { useEffect, useState } from "react"

 const Async=()=>{
    const[posts,setpost]=useState([])
useEffect(()=>{
    fetchMoveis()
   

},[])

async function fetchMoveis(){
    const data=await fetch('https://fakestoreapi.com/products/');
    const json=await data.json();
    setpost(json)
}
if(!posts)return null;
console.log(posts);
return (
<div>
    <ul>
        {posts.map((item)=>(
            <li key={item.id}>{item.title}</li>
            ))}
    </ul>
    
</div>
)

}
export default Async;