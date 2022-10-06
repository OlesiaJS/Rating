//PROPS {
//    name:'Artem',
//    text:'Front-End',
//    img:"https://"
//}
import "./rating.css";


function Post({ index, name, img, homeworks }) {
    let countHW = homeworks.length;
    const summArrayElements = (arr) => {
        let x = 0;
        return arr.map(i => x += i, x).reverse()[0];
    };
    let sum = summArrayElements(homeworks);
    let middleMArk = Math.floor(sum / countHW);

    function gradationChange(Mark) {
        let textMark = '';
        switch (true) {
            case (Mark >= 85 && Mark <= 100):
                textMark = <span className="MarkEX">EX</span>;
                break;
            case (Mark >= 55 && Mark <= 84):
                textMark = <span className="MarkVG">VG</span>;
                break;
            case (Mark >= 20 && Mark <= 54):
                textMark = <span className="MarkS">ST</span>;
                break;
            default:
                textMark = <span className="MarkS">F</span>;
                break;
        }
        return textMark;
    }

    return (
        <tr>
            <td >{index}</td>
            <td className="student-td"><img className="avatar" alt="avatar" src={img}></img>{name}</td>
            <td>{countHW}<br></br>{summArrayElements(homeworks)}</td>
            <td>{gradationChange(middleMArk)}</td>
        </tr>
    );
}
export default Post;