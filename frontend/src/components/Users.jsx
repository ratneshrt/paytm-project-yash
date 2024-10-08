import { useState } from "react"
import { Button } from "./Button";


export const Users=()=>{
    //Replace the backend call

    const [users,setUsers]=useState([{
        firstName:"Yash",
        lastName:"Tyagi",
        _id:1
    }]);

    return <>
    <div className="font-bold mt-6 text-lg">
        Users
    </div>
    <div className="my-2">
        <input type="text" placeholder ="Search Users.." className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
    <div>
        {users.map(user=>{<li><User user={user}/></li>})}
    </div>
    </>
}

function User({user}){
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button label={"Send Money"}/>
        </div>
    </div>
}