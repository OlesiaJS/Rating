
function gradationChange(Mark) {
    let textMark = '';
    switch (true) {
        case (Mark >= 99 && Mark <= 100):
            textMark = <span className="MarkEX">EX</span>;
            break;
        case (Mark >= 75 && Mark <= 98):
            textMark = <span className="MarkVG">VG</span>;
            break;
        case (Mark >= 60 && Mark <= 74):
            textMark = <span className="MarkS">ST</span>;
            break;
        default:
            textMark = <span className="MarkS">F</span>;
            break;
    }
    return textMark;
}

export default gradationChange;