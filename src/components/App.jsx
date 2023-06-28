import transactionsList from './data/transactions.json';
import profileData from './data/user.json';
import statsData from './data/data.json';
import friendsData from './data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import Profile from './Profiles/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';

function App() {
  return (
    <div className="App">
      <Profile {...profileData} />
      <Statistics title="Upload stats" stats={statsData}/>
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsList}/>
    </div>
  );
}

export default App;
