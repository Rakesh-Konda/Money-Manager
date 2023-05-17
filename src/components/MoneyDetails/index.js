import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="div">
      <div className="bal">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="img"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount" className="p">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="bal1">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="img"
          />
        </div>
        <div>
          <p className="p">Your Income</p>
          <p data-testid="incomeAmount" className="p">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="bal2">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="img"
          />
        </div>
        <div>
          <p className="p">Your Expenses</p>
          <p data-testid="expensesAmount" className="p">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
