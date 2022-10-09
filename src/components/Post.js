import "./rating.css";
import gradationChange from '../utility/gradationChange';
import summArrayElements from '../utility/summArrayElements';

function Post({ index, name, img, homeworks }) {
    const countHW = homeworks.length;
    const sum = summArrayElements(homeworks);
    const middleMArk = Math.floor(sum / countHW);

    return (
        <tr>
            <td>{index}</td>
            <td className="student-td"><img className="avatar" alt="avatar" src={img}></img>{name}</td>
            <td>{countHW}<br></br>{sum}</td>
            <td>{gradationChange(middleMArk)}</td>
        </tr>
    );
}
export default Post;
