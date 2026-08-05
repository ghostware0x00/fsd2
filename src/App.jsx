import { useState, useEffect } from "react";
import axios from "axios";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";

function App() {
  const [customers, setCustomers] = useState([]);
  const [users, setUsers] = useState([]);

  // Load database customers

  const loadCustomers = async () => {
    const res = await axios.get("/api/customers");
    setCustomers(res.data);
  };

  // Add customer

  const addCustomer = async (customer) => {
    await axios.post("/api/customers", customer);

    loadCustomers();
  };

  useEffect(() => {
    loadCustomers();

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Simple Banking System
      </h1>

      <div className="max-w-xl mx-auto">
        <CustomerForm addCustomer={addCustomer} />

        <CustomerList
          customers={customers}
          users={users}
        />
      </div>

    </div>
  );
}

export default App;