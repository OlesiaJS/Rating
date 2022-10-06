import './App.css';
import Post from "./components/Post";
import ratingRect from './ratingRect.svg';
import diplom from './diplom.svg';
import question from './question.svg';

function App(props) {

  return (
    <div className="wrapper">
      <table className="table">
        <thead className='racing-group'>Рейтинг Группы  <img src={question} alt="?" />
        </thead>
        <thead className='student'>
          <img src={ratingRect} alt="" />
          <span>Cтудент</span>
          <span>Домашки /баллы</span>
          <img src={diplom} alt="EX" />
        </thead>
        <tbody>
          {props.usersList.map((item, i) => {
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
