import logo from './logo.svg';
import './assets/main.css';

function App() {
  return (
    <Div className="bg-white rounded-lg p-6">
      <header className="App-header">
        <button className>Anushka Saini</button>
        <Card border shadow maxW="sm">
          <Image
            src="https://placekitten.com/1280/960"
            alt="Example image"
            aspectRatio={1280 / 960}
          />
          <CardBody>Hello World</CardBody>
          <CardFooter>
            <FillButton brand="primary">Read</FillButton>
            <OutlineButton brand="primary">Bookmark</OutlineButton>
          </CardFooter>
        </Card>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Div>
  );
}

export default App;
