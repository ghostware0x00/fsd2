const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const dataDirectory = path.join(__dirname);
const dataFile = path.join(dataDirectory, "customers.json");

async function ensureDataFile() {
  await fs.mkdir(dataDirectory, { recursive: true });

  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, "[]\n", "utf8");
  }
}

async function readCustomers() {
  await ensureDataFile();

  const contents = await fs.readFile(dataFile, "utf8");

  try {
    const customers = JSON.parse(contents);

    if (!Array.isArray(customers)) {
      throw new Error("Customer data must be an array.");
    }

    return customers;
  } catch (error) {
    throw new Error(`Could not read customer data: ${error.message}`);
  }
}

async function getCustomers() {
  return readCustomers();
}

async function addCustomer({ name, account }) {
  const customers = await readCustomers();
  const customer = {
    id: crypto.randomUUID(),
    name: name.trim(),
    account: account.trim(),
    createdAt: new Date().toISOString(),
  };

  customers.push(customer);
  await fs.writeFile(dataFile, `${JSON.stringify(customers, null, 2)}\n`, "utf8");

  return customer;
}

module.exports = { addCustomer, getCustomers };
