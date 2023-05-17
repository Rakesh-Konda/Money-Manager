// Write your code here

import './index.css'

const TransactionItems = props => {
  const {list, deleteTrans} = props

  const handleDelete = id => {
    deleteTrans(id)
  }

  return (
    <ul className="kl">
      <h1>History</h1>
      <li className="pm">
        <p>Title</p>
        <p>Amount</p>
        <p>Type</p>
      </li>
      <div className="ul">
        {list.map(each => (
          <li key={each.id} className="lii">
            <p>{each.title}</p>
            <p>{each.amount}</p>
            <p>{each.type}</p>
            <button type="button" className="bbb" data-testid="delete">
              <img
                className="immm"
                onClick={() => handleDelete(each.id)}
                src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                alt="delete"
              />
            </button>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default TransactionItems
