import PropTypes from 'prop-types';
import { ProfileInfo, ProfileQuantity, ProfileLabel, ProfileItems, ProfileStats, ProfileImg, ProfileDescription, ProfileName, ProfileTag, ProfileLocation } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => { 
    return (
        
           <ProfileInfo>
                <ProfileDescription>
                <ProfileImg
                        src={avatar}
                        alt="User avatar"
                        class="avatar"
                ProfileImg/>
                    <ProfileName>{username}</ProfileName>
                        <ProfileTag>@{tag}</ProfileTag>
                        <ProfileLocation>{location}</ProfileLocation>
                 </ProfileDescription>

                <ProfileStats>
                    <ProfileItems>
                        <ProfileLabel>Followers</ProfileLabel>
                        <ProfileQuantity>{stats.followers}</ProfileQuantity>
                    </ProfileItems>
                    <ProfileItems>
                        <ProfileLabel>Views</ProfileLabel>
                        <ProfileQuantity>{stats.views}</ProfileQuantity>
                    </ProfileItems>
                    <ProfileItems>
                        <ProfileLabel>Likes</ProfileLabel>
                        <ProfileQuantity>{stats.likes}</ProfileQuantity>
                    </ProfileItems>
                </ProfileStats>
            </ProfileInfo>
        
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};