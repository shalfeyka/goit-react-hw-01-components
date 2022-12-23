import { Profile } from "components/Profile/Profile";
import User from './../user';

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
    </div>
  );
};
