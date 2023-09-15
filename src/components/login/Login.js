/* eslint-disable jsx-a11y/alt-text */
import "./Login.css";
import { useRef } from "react";
function Login(props) {
  let ref1 = useRef(null); //ref1 = {current:null}
  let ref2 = useRef(null);

  const checkLogin = () => {
    var username = ref1.current.value;
    var password = ref2.current.value;
    if (username === "Rajiv Mehta" && password === "Rajiv@123") {
      props.login(true);
    } else {
      alert("Enter Proper Credentials");
    }

    ref1.current.value = "";
    ref2.current.value = "";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        id="loginImg"
        src="https://th.bing.com/th/id/R.6dc748e73f5593957655af3bc1c4ac02?rik=EUyhLj%2bveNFFAA&riu=http%3a%2f%2fwww.tkgroupe.com%2fimages%2flogo.png&ehk=zqFRbxAStw9SehAhrOHX02foisEZiWs8c0frPbVDeS8%3d&risl=&pid=ImgRaw&r=0"
        width="800"
        height="100"
      />
      <div className="Login">
        <h2>Login Page For TK Groupe</h2>
        <div>
          <input ref={ref1} type="text" placeholder="User Name" />
        </div>

        <div>
          <input ref={ref2} type="password" placeholder="Password" />
        </div>

        <div>
          <button onClick={checkLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;