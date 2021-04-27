const ListItem = ({ u }) => {
  return (
    <div className="list__items">
      <div className="list__item">
        <strong>
          {u.name.title} {u.name.first} {u.name.last}
        </strong>
        <li>
          Email:- <strong>{u.email}</strong>
        </li>
        <li>
          Gender:- <strong>{u.gender}</strong>
        </li>
      </div>
      <div>
        <button className="list__button">Edit</button>
        <button className="list__button">Delete</button>
      </div>
    </div>
  );
};

export default ListItem;
