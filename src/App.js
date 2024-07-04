import "./App.css";
import Body from "./Component/Body";
import { DataContextProvider } from "./Component/Data/Context";

import CursorFollow from "./Component/mouseFollower";

function App() {
  return (
    <div className="">
      <DataContextProvider>
      <CursorFollow />
        <Body />
      </DataContextProvider>
    </div>
  );
}

export default App;
