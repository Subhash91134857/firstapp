import ExpenseItems from "./Components/ExpenseItems";
function App() {
  let expenseDate = new Date(2022, 3, 28);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems
        date={newdate}
        title={expenseTitle}
        amount={expenseAmount}
      ></ExpenseItems>
    </div>
  );
}
export default App;
