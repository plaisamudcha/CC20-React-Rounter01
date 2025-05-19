import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscribes() {
  const navigate = useNavigate();
  const [inpEmail, setInpEmail] = useState("");
  const hdlSubmit = (evt) => {
    evt.preventDefault();
    if (inpEmail === "") alert("Please input your email");
    else {
      navigate(`/success/${inpEmail}`);
    }
  };
  return (
    <div className="p-4">
      <form className="flex gap-2" onSubmit={hdlSubmit}>
        <label className="floating-label">
          <span>Your Email</span>
          <input
            className="input input-md"
            type="email"
            placeholder="mail@site.com"
            value={inpEmail}
            onChange={(evt) => setInpEmail(evt.target.value)}
          />
        </label>
        <input className="btn" type="submit" />
      </form>
      <p>Email : {inpEmail}</p>
    </div>
  );
}
