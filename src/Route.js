import { Routes } from "react-router-dom";
import Counter from "./Counter";

export default function Route() {
  return (
    <Routes>
      <Route path="/abc" element={<Counter />} />
      {/* <Route path="/abc" element={<Counter />} /> */}
    </Routes>
  );
}
