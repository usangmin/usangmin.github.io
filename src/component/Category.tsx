import { Link } from "react-router-dom";
import '../css/Category.css';

function Category(){
    const categoryItems = [
        ['레슨','img/lesson.svg','/'],
        ['홈/리빙','img/home-living.svg','/'],
        ['이벤트','img/event.svg','/'],
        ['비즈니스','img/business.svg','/'],
        ['디자인/개발','img/design-development.svg','/'],
        ['건강/미용','img/health-beauty.svg','/'],
        ['알바','img/part-time-job.svg','/'],
        ['기타','img/etc.svg','/']];
    return(
        <ul className="CategoryContainer">
            {categoryItems.map(
                (categoryItem)=>(
                    <Link to={categoryItem[2]} key={categoryItem[0]}>
                        <li>
                            <div>
                                <img src={categoryItem[1]} alt="카테고리이미지" />
                                <p>{categoryItem[0]}</p>
                            </div>
                        </li>
                    </Link>
                ))}
        </ul>
    );
}

export default Category;