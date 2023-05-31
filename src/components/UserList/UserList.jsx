import { UserItem } from 'components/UserItem/UserItem';

export const UserList = ({ items, onDelete, onEdit }) => {
  return (
    <>
      <h1>Users list</h1>
      <ul>
        {items.map(item => {
          return (
            <UserItem
              item={item}
              key={item.id}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </ul>
    </>
  );
};
