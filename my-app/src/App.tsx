import './App.scss';
import contentMap from './utils/contentMap';
import { useAppSelector } from './store/hooks';
import { RootState } from './store/store';
import Form from './components/Form/Form';

function App() {
  const content = useAppSelector((state: RootState) => state);
  const contentArray = contentMap(content);

  return (
    <div className="App">
      <Form />
      <div className="content">{contentArray}</div>
    </div>
  );
}

export default App;
