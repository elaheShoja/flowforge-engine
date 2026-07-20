import { Routes, Route } from "react-router-dom";

const HomePage = () => {
  return <h1>FlowForge</h1>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;