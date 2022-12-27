import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsList, FriendsBlock } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsBlock>
        <FriendsList>
            {friends.map(friend => (
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id} />            
            ))}
            </FriendsList>
        </FriendsBlock>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired
    }))
}