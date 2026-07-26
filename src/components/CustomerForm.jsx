import { useState } from "react";

function CustomerForm({ addCustomer }) {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addCustomer({
      name,
      account,
    });

    setName("");
    setAccount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-5"
    >
      <h2 className="text-xl font-bold mb-3">Customer Registration</h2>

      <input
        type="text"
        placeholder="Customer Name"
        className="border p-2 w-full mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Account Number"
        className="border p-2 w-full mb-3"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
  );
}

export default CustomerForm;