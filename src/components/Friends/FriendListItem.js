import PropTypes from 'prop-types';
import { Item, SocialStatus, FriendImg, FriendText } from './FriendListitem.styled';

// function change() {
//     if (isOnline === true) {
//         color = "green";
//     } else {
//         color = "red";
//     }

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <Item>   
        <SocialStatus
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
        </SocialStatus>
        <FriendImg src={avatar} alt="User avatar" width="48" />
        <FriendText>{name}</FriendText>
    </Item>
}
// описать пропс

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}