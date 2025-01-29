import { useState } from "react";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { fullname, email, phone, address, date, password };

    try {
      const response = await fetch("http://localhost:9000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User registered:", result);
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center min-h-screen flex-col">
      <div className="mt-20">
        <h2 className="text-center font-bold text-2xl underline text-slate-800">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="shadow-xl p-10 bg-white rounded mt-10">
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
           
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
         
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
             
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
             
            />
          </div>
          <div>
            <label htmlFor="date">Date of Birth</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
             
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded shadow-xs p-2 bg-gray-100 w-full mb-2"
             
            />
          </div>

          <button
            className="w-full py-1 text-center rounded bg-blue-500 hover:bg-blue-300 mt-4 text-white"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
