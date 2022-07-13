import './App.css';


function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="logo" src="https://icons.iconarchive.com/icons/icons8/ios7/256/Logos-Chrome-Copyrighted-icon.png" alt="picture"/>
        <h1>Соцсеть КЕК</h1>
      </header>
      <nav className="sidebar">
        <ul>
          <li className="item"><a href="#1" className="itemLink profile">Профиль</a></li>
          <li className="item"><a href="#2" className="itemLink messages">Сообщения</a></li>
          <li className="item"><a href="#3" className="itemLink news">Новости</a></li>
          <li className="item"><a href="#4" className="itemLink music">Музыка</a></li>
          <li className="item"><a href="#5" className="itemLink settings">Настройки</a></li>
        </ul>
      </nav>
      <main className="content">
        <a href="#banner" className="banner">
          <img src="https://wallpaperaccess.com/full/1282257.jpg" alt="banner" className="banner__img"/>
        </a>

      </main>
    </div>
  );
}

export default App;
