import { Switch, Route } from "react-router-dom";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ArticlesPage from "./pages/ArticlesPage";
import AuthPage from "./pages/AuthPage";
import NewArticlesPage from "./pages/NewArticlesPage";
import NewsPage from "./pages/NewsPage";
import SavedPage from "./pages/SavedPage";
function App() {
  return (
    <Switch>
      <Route path={["/", "/articles"]} component={ArticlesPage} exact />
      <Route path="/articles/:article_id" component={ArticleDetailPage} exact />
      <Route path={["/new", "/articles/new"]} component={NewArticlesPage} exact />
      <Route path="/auth" component={AuthPage} exact />
      <Route path="/news" component={NewsPage} exact />
      <Route path="/saved" component={SavedPage} exact />
    </Switch>
  );
}

export default App;
