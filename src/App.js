import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./example/getStarted";
import FormWithoutRHF from "./example/formWithoutRHF";
import UseFormExample from "./example/useForm";
import Validation from "./example/validation";
import DefaultValue from "./example/defaultValue";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<GetStarted />} />
        <Route path="/1" element={<FormWithoutRHF />} />
        <Route path="/useform" element={<UseFormExample />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/default-value" element={<DefaultValue />} />
      </Routes>
    </Router>
  );
}
