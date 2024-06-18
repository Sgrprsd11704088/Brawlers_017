// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Auth = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const endpoint = isLogin ? "login" : "register";
//     const userDetails = isLogin
//       ? { email, password }
//       : { userName, email, password };

//     try {
//       const response = await fetch(`https://brawlers-017.onrender.com/api/v1/${endpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userDetails),
//       });
//       console.log(userDetails);
//       const data = await response.json();

//       if (response.ok) {
//         console.log(`${isLogin ? "Login" : "Signup"} successful:`, data);
//       } else {
//         // Handle errors returned from backend
//         setError(data.message || `${isLogin ? "Login" : "Signup"} failed`);
//       }
//     } catch (err) {
//       setError("Network error");
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <button
//                 className="btn btn-secondary mb-3 mt-3"
//                 onClick={() => setIsLogin(!isLogin)}
//               >
//                 Switch to {isLogin ? "Signup" : "Login"}
//               </button>
//               <form onSubmit={handleSubmit}>
//                 {!isLogin && (
//                   <div className="form-group mt-3">
//                     <label htmlFor="userName">UserName</label>
//                     <input
//                       type="text"
//                       name="userName"
//                       id="userName"
//                       className="form-control mt-3"
//                       placeholder="UserName"
//                       value={userName}
//                       onChange={(e) => setUserName(e.target.value)}
//                     />
//                   </div>
//                 )}
//                 <div className="form-group mt-3">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="form-control mt-3"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     className="form-control mt-3"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-block mt-3"
//                 >
//                   {isLogin ? "Login" : "Signup"}
//                 </button>
//                 {error && <p className="text-danger mt-3">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Auth = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = isLogin ? "login" : "register";
    const userDetails = isLogin
      ? { email, password }
      : { userName, email, password };

    try {
      const response = await fetch(`https://brawlers-017.onrender.com/api/v1/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();

      if (response.ok) {
        console.log(`${isLogin ? "Login" : "Signup"} successful:`, data);

        if (isLogin) {
          // Navigate based on email only during login
          if (email === "sagar@gmail.com") {
            navigate("/admin/dashboard");
          } else {
            navigate("/donor/projects");
          }
        }
      } else {
        // Handle errors returned from backend
        setError(data.message || `${isLogin ? "Login" : "Signup"} failed`);
      }
    } catch (err) {
      setError("Network error");
      console.error("Error:", err);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <button
                className="btn btn-secondary mb-3 mt-3"
                onClick={() => setIsLogin(!isLogin)}
              >
                Switch to {isLogin ? "Signup" : "Login"}
              </button>
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="form-group mt-3">
                    <label htmlFor="userName">UserName</label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      className="form-control mt-3"
                      placeholder="UserName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                )}
                <div className="form-group mt-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control mt-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control mt-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                >
                  {isLogin ? "Login" : "Signup"}
                </button>
                {error && <p className="text-danger mt-3">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
