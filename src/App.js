import Post from "./components/Post";
import HeaderList from "./components/HeaderList";

function App({ usersList }) {

  return (
    <div className="wrapper">
      <table className="table">
        <HeaderList />
        <tbody>
          {usersList.map((item, i) => {
            return (
              <Post
                index={i + 1}
                name={item.name}
                img={item.img}
                homeworks={item.homeworks}
              />
            );
          }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
