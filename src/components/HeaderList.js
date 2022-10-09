import "./rating.css";
import ratingRect from '../MySvg/ratingRect.svg';
import diplom from '../MySvg/diplom.svg';
import question from '../MySvg/question.svg';

const HeaderList = () => {
    return (
        <><thead className="racing-group">
            Рейтинг Группы <img src={question} alt="?"></img>
        </thead><thead className="student">
                <img src={ratingRect} alt="" />
                <span>Cтудент</span>
                <span>Домашки /баллы</span>
                <img src={diplom} alt="EX" />
            </thead></>
    );
};

export default HeaderList;