// css modules
import css from './TransactionHistory.module.css';

// proptypes
import PropTypes from "prop-types";

export default function TransactionHistory({transactions}) {
    return (
        <table className={css["transaction-history"]}>

            <thead className={css.thead}>
                <tr className={css.tr}>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id} className={css['transaction-tr']}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
  };
