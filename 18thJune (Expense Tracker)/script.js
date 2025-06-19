let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const list = document.getElementById("transactionList");
const form = document.getElementById("transactionForm");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  signDisplay: "always"
});

function formatCurrency(value) {
  if (value === 0) return formatter.format(0).replace(/^[+-]/, "");
  return formatter.format(value);
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function updateTotals() {
  const incomeTotal = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expenseTotal = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  balance.textContent = formatCurrency(incomeTotal - expenseTotal).replace(/^\+/, "");
  income.textContent = formatCurrency(incomeTotal);
  expense.textContent = formatCurrency(-expenseTotal);
}

function renderList() {
  list.innerHTML = "";

  if (transactions.length === 0) {
    document.getElementById("status").textContent = "No transactions.";
    return;
  }

  transactions.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${t.name}</strong> — ${formatCurrency(t.type === "expense" ? -t.amount : t.amount)}
        <small>(${new Date(t.date).toLocaleDateString()})</small>
        <button onclick="deleteTransaction('${t.id}')">❌</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  updateTotals();
  renderList();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const newTransaction = {
    id: Date.now().toString(),
    name: data.get("name"),
    amount: parseFloat(data.get("amount")),
    date: data.get("date"),
    type: data.get("type"),
  };

  if (!newTransaction.name || isNaN(newTransaction.amount) || !newTransaction.date) {
    alert("Please fill in all fields.");
    return;
  }

  transactions.push(newTransaction);
  updateLocalStorage();
  updateTotals();
  renderList();
  form.reset();
});

updateTotals();
renderList();
