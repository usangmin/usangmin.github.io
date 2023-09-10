import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer(){

    return(
        <footer>
            <div className='footer'>
                <div className='First-footercontainer'>
                    <div className='First-footercontainer-left'>
                        <p className='CallNumber'>1599-5319</p>
                        <p className='etc'>평일 10:00 - 18:00<br/>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</p>
                        <div style={{display:'flex'}}>
                            <Link to={'/'}>
                                <img src="" alt="" />
                                APP STORE
                            </Link>
                            <Link to={'/'}>
                                <img src="" alt="" />
                                PLAY STORE
                            </Link>
                        </div>
                    </div>
                    <div className='First-footercontainer-right'>
                        <ul className='footer-list'>
                            <li>
                                숨고소개
                                <div>
                                    <Link to={'/'}>회사소개</Link>
                                    <Link to={'/'}>채용안내</Link>
                                </div>
                            </li>
                            <li>
                                고객안내
                                <div>
                                    <Link to={'/'}>이용안내</Link>
                                    <Link to={'/'}>안전정책</Link>
                                    <Link to={'/'}>예상금액</Link>
                                    <Link to={'/'}>고수찾기</Link>
                                    <Link to={'/'}>숨고보증</Link>
                                    <Link to={'/'}>고수에게묻다</Link>
                                </div>
                            </li>
                            <li>
                                고수안내
                                <div>
                                    <Link to={'/'}>이용안내</Link>
                                    <Link to={'/'}>고수가이드</Link>
                                    <Link to={'/'}>고수가입</Link>
                                    <Link to={'/'}>고수센터</Link>
                                </div>
                            </li>
                            <li>
                                고객센터
                                <div>
                                    <Link to={'/'}>공지사항</Link>
                                    <Link to={'/'}>자주묻는질문</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='Second-footercontainer'>
                    <div className='etc-data'>
                        <div className='etc-nav'>
                            <Link to='/'>
                                이용약관
                            </Link>
                            <Link to='/'>
                                개인정보처리방침
                            </Link>
                            <Link to='/'>
                                사업자 정보확인
                            </Link>
                        </div>
                        <p>
                        (주)브레이브모바일은 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
                        </p>
                        <ul>
                            <li>
                                상호명:(주)브레이브모바일 · 대표이사:KIM ROBIN H · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층
                            </li>
                            <li>
                                사업자등록번호:120-88-22325 · 통신판매업신고증:제 2015-서울강남-00567 호 · 직업정보제공사업 신고번호:서울청 제 2019-21호
                            </li>
                            <li>
                                고객센터:1599-5319 · 이메일:support@soomgo.com
                            </li>
                            <li>
                                Copyright ©Brave Mobile Inc. All Rights Reserved.
                            </li>
                        </ul>
                    </div>
                    <div className='badge-container'>
                        <a href="/"></a>
                        <a href="/"></a>
                        <a href="/"></a>
                        <a href="/"></a>
                        <a href="/"></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;