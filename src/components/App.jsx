import user from './profile/user';
import data from './statistics/data';
import friends from './friend-list/friends';
import transactions from './transation-history/transactions';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friend-list/FriendList';
import TransactionHistory from './transation-history/TransactionHistory';

export const App = () => {
  return (
    <>
      <ul className="collapsible">
      <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>Profile</div>
        <div className="collapsible-body">
          <span className="flex">
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          </span>
        </div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>Statistics</div>
        <div className="collapsible-body">
          <span className="flex">
            <Statistics
              title="upload stats"
              stats={data}
            />
          </span>
        </div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>FriendList</div>
        <div className="collapsible-body">
          <span className="flex">
            <FriendList
              friends={friends}
            />
          </span>
        </div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>Transaction History</div>
        <div className="collapsible-body">
          <span className="flex">
            <TransactionHistory 
              transactions={transactions}
            />
          </span>
        </div>
      </li>
    </ul>
    </>
  );
};
