import './App.css';
import Charts from './components/charts/Charts';
import Header from './components/Header/Header';
import PricingOption from './components/Pricing-option/PricingOption';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-4xl font-bold'>Welcome to Pricing Deals System</h1>
      <PricingOption></PricingOption>
      <Charts></Charts>
    </div>
  );
}

export default App;
