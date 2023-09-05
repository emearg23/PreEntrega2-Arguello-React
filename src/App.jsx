// Components :D
import MainLayout from "./layouts/MainLayout";
import MainRouter from "./routes/MainRouter";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";

// App
const App = () => {
  return (
    <MainLayout>
      <MainRouter />
    </MainLayout>
  );
};

export default App;
