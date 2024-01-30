import { Link, List } from './MainMenu.styled';

const MainMenu = () => {
  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </List>
  );
};

export default MainMenu;
