import { useState } from "react";
import Button from "./Button";

function App() {

  const [message, setMessage] = useState("Message")

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button disabled={false} onClick={() => setMessage("New message!")}>Change message</Button>
    </div>
  );
}

export default App;

