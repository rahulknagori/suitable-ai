import Header from "../components/Header/Header";
import Candidate from "../components/Candidate";
import { useState } from "react";

const Index = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Candidate search={search} />
    </>
  );
};

export default Index;
