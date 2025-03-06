import ItemList from "./ItemList.tsx";
import { Footer } from "./Footer.tsx";

const Home = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center gap-4">
      <ItemList />
      <Footer />
    </div>
  );
};

export default Home;
