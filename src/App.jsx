import "./App.css";
import { Form } from "./components/Form/Form";
import { Search } from "./components/Search/Search";
import { Table } from "./components/Table/Table";
import { BaseColaboradores } from "./data";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState(BaseColaboradores);

  return (
    <>
      <Form />
      <hr />
      <Search data={BaseColaboradores} setFilter={setFilter} />
      <Table data={filter} />
    </>
  );
}

export default App;
