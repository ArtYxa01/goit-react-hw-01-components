import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendsListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};