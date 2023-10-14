import { RegisterForm as RegisterFormProps, RegisterResponse } from "../../types"
import { RegisterForm } from "../../components"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const onSubmit = async (data: RegisterFormProps) => {
        const fetching = await fetch('https://mock-api.arikmpt.com/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const response: RegisterResponse = await fetching.json()
        console.log(response);
        //if(response) {
            //localStorage.setItem('name', response.name)
            //localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY5NTg3MTQ1OSwiZXhwIjoxNjk1ODkzMDU5fQ.H2l_xxXJwrxJJt6ubGBXt-6wBkxMr63GgMiv4PMh79o')
            //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNzFlNjY5LTM4ZGYtNGRkNy04NDYwLTc4ODc2ZmM0NTNjOSIsImlhdCI6MTY5NTQyMjY5NywiZXhwIjoxNjk1NDQ0Mjk3fQ.pzYKTHSg0zTLfMHQmyVXGp1bvDC3l-a4Aj8ERbxhR30'
            //window.location.replace('/')
            if (fetching.ok) {
                navigate("/");
              } else {
                console.error("Registration failed");
              }
            }
       // }
   // }

    return (
        <RegisterForm onSubmit={onSubmit}/>
    )
}

export default Register