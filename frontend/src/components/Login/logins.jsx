// //Add role to this page

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./login.css"; // Ensure this file exists and contains your CSS
// import Footer from "../Footer";

// const Logins = ({ role }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "https://brawlers-017.onrender.com/api/v1/login",
//         { email, password }
//       );
//       localStorage.setItem("token", res.data.token);

//       let path = email === "admin" ? "/admin/dashboard" : "/donor/create-donation";
//       navigate(path); // Navigate to the DonorCreate page
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <>
//       <div className="main1">
//         <h1
//           style={{
//             marginLeft: "100px",
//             fontFamily: "monospace",
//             color: "#55AD9B",
//             position: "absolute",
//             top: "100px",
//             left: "380px",
//             fontWeight: "bolder",
//           }}
//         >
          
//         </h1>
//         <h1
//           style={{
//             marginLeft: "100px",
//             fontFamily: "monospace",
//             color: "#55AD9B",
//             position: "absolute",
//             top: "100px",
//             left: "380px",
//             fontWeight: "bolder",
//           }}
//         >
//           Welcome to the Login Portal
//         </h1>
//         <br />
//         <br />
//         <div className="main">
//           <div
//             style={{
//               backgroundColor: "#D8EFD1",
//               width: "50vw",
//               marginTop: "50px",
//             }}
//           >
//             <div className="left-side">
//               <h3>Quickly Donate to Your Favorite Organizations</h3>
//               <p>
//                 You can donate without filling out the donation form. Giving has
//                 never been easier!
//               </p>
//               <br />
//               <img
//                 style={{ width: "15vw", height: "20vh" }}
//                 src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2020/02/donation-crowfunding.jpg"
//                 alt=""
//               />
//               <br />
//               <br />
//               <h5>
//                 “The best way to find yourself is to lose yourself in the
//                 service of others.”
//               </h5>
//             </div>
//           </div>
//           <div className="right-side">
//             <h1>Login</h1>
//             <br />
//             <form onSubmit={handleSubmit} className="create-donation-form1">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//               />
//               <br />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//               <br />
//               <br />
//               <button className="login-btn1" type="button">
//                 Forget Password
//               </button>
//               <button className="login-btn" type="submit">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>

//         <h4
//           style={{
//             position: "absolute",
//             top: "1000px",
//             left: "330px",
//             fontWeight: "bolder",
//           }}
//         >
//           Like you, over a million people have donated to support 50 000+
//           nonprofit causes<br></br> around the world. Thank you for your help in
//           making our world a better place.
//         </h4>
//         <h4
//           style={{
//             position: "absolute",
//             top: "800px",
//             left: "330px",
//             fontWeight: "bolder",
//           }}
//         >
//           Like you, over a million people have donated to support 50 000+
//           nonprofit causes<br></br> around the world. Thank you for your help in
//           making our world a better place.
//         </h4>
//         <div style={{ marginTop: "130px" }}>
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Logins;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Ensure this file exists and contains your CSS
import Footer from "../Footer";

const Logins = ({ role }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://brawlers-017.onrender.com/api/v1/login",
        { email, password }
      );
      localStorage.setItem("token", res.data.token);

      // Navigate based on the email
      let path = email === "sagar@gmail.com" ? "/admin/dashboard" : "/donor/projects";
      navigate(path);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      <div className="main1">
        <h1
          style={{
            marginLeft: "100px",
            fontFamily: "monospace",
            color: "#55AD9B",
            position: "absolute",
            top: "100px",
            left: "380px",
            fontWeight: "bolder",
          }}
        >
          Welcome to the Login Portal
        </h1>
        <br />
        <br />
        <div className="main">
          <div
            style={{
              backgroundColor: "#D8EFD1",
              width: "50vw",
              marginTop: "50px",
            }}
          >
            <div className="left-side">
              <h3>Quickly Donate to Your Favorite Organizations</h3>
              <p>
                You can donate without filling out the donation form. Giving has
                never been easier!
              </p>
              <br />
              <img
                style={{ width: "15vw", height: "20vh" }}
                src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2020/02/donation-crowfunding.jpg"
                alt=""
              />
              <br />
              <br />
              <h5>
                “The best way to find yourself is to lose yourself in the
                service of others.”
              </h5>
            </div>
          </div>
          <div className="right-side">
            <h1>Login</h1>
            <br />
            <form onSubmit={handleSubmit} className="create-donation-form1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <br />
              <br />
              <button className="login-btn1" type="button">
                Forget Password
              </button>
              <button className="login-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>

        <h4
          style={{
            position: "absolute",
            top: "1000px",
            left: "330px",
            fontWeight: "bolder",
          }}
        >
          Like you, over a million people have donated to support 50 000+
          nonprofit causes<br></br> around the world. Thank you for your help in
          making our world a better place.
        </h4>
        <h4
          style={{
            position: "absolute",
            top: "800px",
            left: "330px",
            fontWeight: "bolder",
          }}
        >
          Like you, over a million people have donated to support 50 000+
          nonprofit causes<br></br> around the world. Thank you for your help in
          making our world a better place.
        </h4>
        <div style={{ marginTop: "130px" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Logins;
