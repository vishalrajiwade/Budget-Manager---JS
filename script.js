// Balance Section Variables
const availableBalElement = document.getElementById("avail-balance");
const totalIncomeElement = document.getElementById("total-income");
const totalExpenseElement = document.getElementById("total-expense");

// Income Section Variables

const incomeDescInputElement = document.getElementById("income-desc");
const incomeAmountInputElement = document.getElementById("income-amount");
const incomeCategoryElement = document.getElementById("income-category");
const incomeAddBtnElement = document.getElementById("add-income");
const incomeResultElement = document.getElementById("income-result");

// Expense Section Variables

const expenseDescInputElement = document.getElementById("expense-desc");
const expenseAmountInputElement = document.getElementById("expense-amount");
const expenseCategoryElement = document.getElementById("expense-category");
const expenseAddBtnElement = document.getElementById("add-expense");
const expenseResultElement = document.getElementById("expense-result");

let expenseItem = `<div
class="text-white flex justify-between items-center bg-[#25293b] p-4"
>
<p class="text-lg">Manali Trip</p>
<p class="font-bold">50000</p>
</div>`;

let availableBalAmount = 0;
let totalIncomeAmount = 0;
let totalExpenseAmount = 0

function addIncomeEntry(incomeDesc, incomeAmount) {

  let incomeItem = `<div class="text-white flex justify-between items-center bg-[#25293b] p-4">
                        <p class="text-lg">${incomeDesc}</p>
                        <p class="font-bold">${incomeAmount}</p>
                    </div>`;

  incomeResultElement.insertAdjacentHTML("beforeend", incomeItem);
}

function addExpenseEntry(expenseDesc, expenseAmount) {
    let expenseItem = `<div class="text-white flex justify-between items-center bg-[#25293b] p-4">
                        <p class="text-lg">${expenseDesc}</p>
                        <p class="font-bold">${expenseAmount}</p>
                    </div>`;

    expenseResultElement.insertAdjacentHTML("beforeend", expenseItem);
}

incomeAddBtnElement.addEventListener("click", () => {
  let incomeDesc = incomeDescInputElement.value;
  let incomeAmount = Number(incomeAmountInputElement.value);

  availableBalAmount += incomeAmount;
  availableBalElement.innerHTML = availableBalAmount;

  totalIncomeAmount += incomeAmount;
  totalIncomeElement.innerHTML = totalIncomeAmount;

  addIncomeEntry(incomeDesc, incomeAmount);
  incomeDescInputElement.value = "";
  incomeAmountInputElement.value = "";
});

expenseAddBtnElement.addEventListener("click", () => {
  let expenseDesc = expenseDescInputElement.value;
  let expenseAmount = Number(expenseAmountInputElement.value);
console.log(expenseAmount);
  availableBalAmount -= expenseAmount;
  availableBalElement.innerHTML = availableBalAmount;

  totalExpenseAmount += expenseAmount;
  totalExpenseElement.innerHTML = totalExpenseAmount;

  addExpenseEntry(expenseDesc, expenseAmount);
  expenseDescInputElement.value = "";
  expenseAmountInputElement.value = "";
});
