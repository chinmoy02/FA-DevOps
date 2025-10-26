import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Nice to See You Again!"
      description1="Crafting Skills: Today's Triumphs, Tomorrow's Triumphs, and Beyond!"
      description2="Invest in Your Future: Education that Lasts."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
