import { Profile } from "components/Profile/Profile";
import User from './../user';
import { Statistics } from "./Statistics/Statistic";
import Data from "./../data";
import { TransactionHistory } from "./Transation/TransactionHistory";
import transactions from "./../transactions";
import { GlobalStyle } from "./GlobalStyle";
import { FriendList } from "./Friends/FriendList";
import friends from "./../friends";


export const App = () => {
  return (
    <div>
      <Profile
          username={User.username}
          tag={User.tag}
          location={User.location}
          avatar={User.avatar}
          stats={User.stats}
      />
      <Statistics data={Data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
