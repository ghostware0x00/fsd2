function CustomerList({ customers, users }) {
  return (
    <>
      <div className="bg-white p-4 rounded shadow mb-5">
        <h2 className="text-xl font-bold mb-3">
          Registered Customers
        </h2>

        {customers.map((c, index) => (
          <div
            key={index}
            className="border-b py-2"
          >
            <p>Name : {c.name}</p>
            <p>Account : {c.account}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-3">
          API Customers (Axios)
        </h2>

        {users.slice(0, 5).map((user) => (
          <div
            key={user.id}
            className="border-b py-2"
          >
            {user.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomerList;