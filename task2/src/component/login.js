import React from "react";
import { useState } from "react";
const Login =()=>{
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allEntry , setAllEntry] = useState([]);
    const submitForm =(e)=>{
        e.preventDefault();
        const newEntry = {email:email, password:password}
        setAllEntry([...allEntry,newEntry]);
        console.log("entery",allEntry)
    }
    return(
        <>
        <form action="" onSubmit ={submitForm}>
            <div>
                <label htmlfor="email">Email</label>
                <input type="text" name="email" id="email" value ={email}
                onChange={(e) => setemail(e.target.value)}
                />
            </div>

            <div>
                <label htmlfor="password">Pasword</label>
                <input type="password" name="password" id="password" value ={password}
                onChange={(e) => setpassword(e.target.value)}
                />

            </div>
        <button type="submit">Login</button>
        
        </form>
        <div>{
            allEntry.map((curElem) => {
                return(
                    <div className="showDataStyles">
                        <p>EMAIL :- {curElem.email}  </p>
                        <p> Password :- {curElem.password}  </p>
                    </div>
                )
            })
        
             }
        </div>
        </>
    );
}
export default  Login;

