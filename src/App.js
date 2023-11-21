import { useRoutes } from 'react-router';
import Layout from './common/components/Layout';
import Home from './common/pages/Home/Home';
import Collection from './common/pages/Collection/Collection';
import PriceItem from './common/pages/PriceItem/PriceItem';


const routesConifg = [
  {
    element:<Home />,
    path:"/",
  },
  {
    element:<Collection />,
    path:"/collection"
  },
  {
    element:<PriceItem />,
    path:"/item"
  }
]
function App() {
  const routes = useRoutes(routesConifg)
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
