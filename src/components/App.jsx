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

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
       title="upload stats"
       stats={data}
      />

      <FriendList
       friends={friends}
      />
      
      <TransactionHistory 
       transactions={transactions}
      />

    </>
  );
};
