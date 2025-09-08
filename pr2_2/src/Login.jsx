import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    function handleLogin(){
        const isAuth = true;

    if(isAuth){
        navigate("/dashboard");
    }
    else{
        alert("Ошибка");
    }
}
    return(
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>Войдите для продолжения</h2>
            <button onClick = {handleLogin}>Войти!!!</button>
        </div>
        
    );
}

export default Login;