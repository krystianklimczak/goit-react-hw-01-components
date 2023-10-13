import user from './profile/user';
import data from './statistics/data';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

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

    </>
  );
};
