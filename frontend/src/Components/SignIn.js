import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const fun1 = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  function Addusertodb(e) {
    e.preventDefault();
    if (input.password !== "" || input.email !== "") {
      fetch("http://localhost:3035/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(input),
      })
        .then(() => {
          toast("User added successfully");
          navigate("/login");
          
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }
  }

  return (
    <div className="signInDiv">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="formLabels">Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={fun1}
            value={input.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="formLabels">Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={fun1}
            value={input.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="formLabels">Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={fun1}
            value={input.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={Addusertodb}>
          Sign Up
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

export default SignIn;
