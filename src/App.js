import './App.css';
import Layout from './components/layout';

function App(props) {
  return (
    <Layout allData={props.templateList}/>
  );
}

export default App;
