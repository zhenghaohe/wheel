import React, { useState } from "react";
import Dialog, {alert} from "./dialog";

export default function() {
  const [x, setX] = useState(false);
  return (
    <div>
      <button onClick={() => setX(!x)}>toggle</button>
      <Dialog visible={x} buttons={[<button>1</button>, <button>2</button>]}
              onClose={()=>{setX(false)}}
      >
        <strong>dialog</strong>
      </Dialog>
      <div>
        <h1>example2</h1>
        <button onClick={()=> alert('1')}>alert</button>
      </div>
    </div>
  );
}
