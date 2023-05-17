import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItems from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    list: [],
  }

  AddTra = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTrans = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(
      PrevState => ({
        list: [...PrevState.list, newTrans],
        title: '',
        amount: '',
        optionId: transactionTypeOptions[0].optionId,
      }),
      () => {
        document.getElementById('title').value = ''
        document.getElementById('amount').value = ''
      },
    )
  }

  deleteTrans = id => {
    const {list} = this.state
    const updateList = list.filter(each => each.id !== id)

    this.setState({list: updateList})
  }

  getIncome = () => {
    const {list} = this.state
    let ActualAmount = 0

    list.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        ActualAmount += each.amount
      }
    })
    return ActualAmount
  }

  getExpenses = () => {
    const {list} = this.state
    let ActualExpenses = 0

    list.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        ActualExpenses += each.amount
      }
    })
    return ActualExpenses
  }

  getBalance = () => {
    const {list} = this.state
    let balance = 0
    let expenses = 0
    let income = 0

    list.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    balance = income - expenses
    return balance
  }

  title = event => {
    console.log(event.target.value)
    this.setState({title: event.target.value})
  }

  Amount = event => {
    console.log(event.target.value)
    this.setState({amount: event.target.value})
  }

  Expenses = event => {
    console.log(event.target.value)
    this.setState({optionId: event.target.value})
  }

  render() {
    const {list} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()
    return (
      <div>
        <div className="bg">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your
            <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />

        <div className="side">
          <div className="tra">
            <h1>Add Transaction</h1>
            <form onSubmit={this.AddTra}>
              <div className="dd">
                <label htmlFor="title">TITLE</label>
                <input
                  className="inp"
                  onChange={this.title}
                  type="text"
                  id="title"
                />
              </div>

              <div className="dd">
                <label htmlFor="amount">AMOUNT</label>
                <input
                  className="inp"
                  onChange={this.Amount}
                  type="text"
                  id="amount"
                />
              </div>
              <label className="input-label" htmlFor="select">
                TYPE
              </label>
              <select id="select" className="sel" onChange={this.Expenses}>
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="butt" type="submit">
                Add
              </button>
            </form>
          </div>

          <TransactionItems list={list} deleteTrans={this.deleteTrans} />
        </div>
      </div>
    )
  }
}
export default MoneyManager
