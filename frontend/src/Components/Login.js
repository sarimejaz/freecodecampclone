import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    passWord: "",
  });

  const fun1 = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // console.log(data);

  const handleChange = (e) => {
    e.preventDefault();

    fetch("http://localhost:3035/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
        // console.log('chal gya login page',res.json())
      })
      .then((resData) => {
        console.log(resData, "resData");
        localStorage.setItem("myInfo", JSON.stringify(resData.data));

        navigate("/");
        window.location.reload();
        toast("Logged in successfully");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="LoginDiv">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="formLabels">Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={fun1}
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="formLabels">Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="passWord"
            onChange={fun1}
            value={data.passWord}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleChange}>
          Login
        </Button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Form>
    </div>
  );
}

export default Login;
