import { useParams } from "react-router-dom";

export default function Success() {
  const { email } = useParams();
  return (
    <div className="flex items-center flex-col my-90 gap-5">
      <h1 className="text-4xl animate-bounce">Thank you for Subscribes</h1>
      <p className="text-lg bg-accent-content">Your Email : {email}</p>
    </div>
  );
}
