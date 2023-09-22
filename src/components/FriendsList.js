import { Friend } from ".";

const FriendsList = ({ friends, onSelection, selectedFriend, onDelete }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
