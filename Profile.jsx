import React,{useContext} from "react";
import {UserContext} from "../context/UserContext";
function Profile({setPage}){
    const{user}=useContext(UserContext);
    return(
        <div>
            <h1>Profile</h1>
            <h2>Welcome {user?.name}</h2>
            <button onClick={()=>setPage("dashboard")}>Dashboard</button>
        </div>
    );
}
export default Profile;