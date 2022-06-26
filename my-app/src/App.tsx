import './App.scss';
import { Content } from './components/Content/Content';
import { useAppSelector } from './store/hooks';
import { RootState } from './store/store';

function App() {
  const content = useAppSelector((state: RootState) => state);

  return (
    <div className="App">
      {/* <Form /> */}
      <div className="content">
        {content.map((item, index) => (
          <Content key={`${index}${item.type}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
