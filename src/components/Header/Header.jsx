import SearchBar from "../SearchBar/SearchBar";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <header className="header-container">
        <div className="header-content">
          <h2 className="header-title ">
            Exploring the Multiverse of Knowledge
          </h2>
          <p className="header-text ">
            Welcome to the world of Book Library a spellbinding novel that
            invites readers on a captivating journey through realms of
            imagination and the transformative power of storytelling. In this
            enchanting tale, written by a masterful author, readers will embark
            on an adventure beyond their wildest dreams. From the moment you
            open its pages, prepare to be transported to a world where magic and
            mystery intertwine, where words hold unimaginable power, and where
            the boundaries between reality and fantasy blur.
          </p>
          <SearchBar />
        </div>
      </header>
    </div>
  );
};

export default Header;
