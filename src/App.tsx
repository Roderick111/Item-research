import { Suspense } from "react";
import ExtensionPopup from "./components/ExtensionPopup";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ExtensionPopup />
    </Suspense>
  );
}

export default App;
