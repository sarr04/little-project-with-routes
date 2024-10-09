import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import MainHeader from "./componentss/MainHeader";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="./product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
