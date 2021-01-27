// Login button action
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

// Deposit button action
const depositBtn = document.getElementById("depositBtn");

depositBtn.addEventListener("click", function () {
  // Deposit Balance

  const depositNumber = getInputNumber("depositAmount");

  if (depositNumber > 0) {
    // Deposit Balance
    updateBalance("currentDeposit", depositNumber);
    // Main Balance
    updateBalance("currentBalance", depositNumber);
  } else {
    alert("Your Amount Should be Number...");
  }

  // initialing input field
  initialingInput("depositAmount");
});

// Withdraw Button Action
const withdrawBtn = document.getElementById("withdrawBtn");

withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");

  if (withdrawNumber > 0) {
    // Withdraw Balance
    updateBalance("currentWithdraw", withdrawNumber);
    // Main Balance
    updateBalance("currentBalance", -1 * withdrawNumber);
  } else {
    alert("Your Amount Should be Number...");
  }

  // initialing input field
  initialingInput("withdrawAmount");
});

// Get input value as number
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

// Updating the span text value
function updateBalance(id, addedNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);

  total = currentNumber + addedNumber;
  document.getElementById(id).innerText = total;
}

// Initialing input Field
function initialingInput(id) {
  document.getElementById(id).value = null;
}
