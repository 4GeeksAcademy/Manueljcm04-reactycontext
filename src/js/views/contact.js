import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import useNavigate from "react-router";

const Contact = () => {
    const [user, setUser] = useState ("");
    const {actions, store} = useContext(Context);
    const { navigate } = useNavigate ();

    useEffect(() => {
        actions.getUsers();
    },[])


    const onCreateUser = async () => {
        await actions.onCreateUser(user);
        setUser("");
        navigate("/todo/${user}")
    }
    if (!(store.users && store.users.users)) return null;

    return (

        <div>
        <h1> Contactos </h1>
        <input placeholder="Añadir Usuario" value={user} onChange={(e) => setUser(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onCreateUser()}>
        </input>
        <ul>
            {
                store.users.users.map{item =>
                <li key={item.id}>
                    {item.name}
                 </li>
            }
        </ul>
        </div>
    )
}



export default Contact;