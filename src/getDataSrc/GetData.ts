
function GetData(title:string){

    let link:string[] = ['/'],
    img:string[] = ['/'],
    serviceTitle:string[] = ['/'],
    offer:string[] = ['/'];

    const setData = () => {
        if(title === '나를위한고퀄사진'){
            link = ['/','/','/','/','/'];
            img=[
                'img/mainService/highQualityPhoto1.jpg',
                'img/mainService/highQualityPhoto2.jpg',
                'img/mainService/highQualityPhoto3.jpg',
                'img/mainService/highQualityPhoto4.jpg',
                'img/mainService/highQualityPhoto5.jpg'
            ];
            serviceTitle = [
                '나만의 프로필-장점과 매력 찾는 프로필 사진',
                '감성충만 인생사진',
                '사진촬영 은둔고수',
                '을지로 필름초상 프로젝트 <어떤사람>',
                '인물사진, 행사사진 촬영'
            ];
            offer = [
                '100,000원 ~',
                '300,000원 ~',
                '200,000원 ~',
                '120,000원 ~',
                '220,000원 ~'];
        }
        if(title === '감성스냅촬영'){
            link = ['/','/','/','/'];
            img=[
                'img/mainService/emotionalPhoto1.jpg',
                'img/mainService/emotionalPhoto2.jpg',
                'img/mainService/emotionalPhoto3.jpg',
                'img/mainService/emotionalPhoto4.jpg'
            ];
            serviceTitle = [
                '아름다운 제주 스냅',
                'yongja_snap',
                '[제주동쪽]황상적인 풍경속의 나를 남겨보세요',
                '고객과 감정을 공유하는 스냅!!!'
            ];
            offer = [
                '120,000원 ~',
                '100,000원 ~',
                '120,000원 ~',
                '150,000원 ~'
            ];
        }
        if(title === '나도가수다'){
            link = ['/','/','/','/','/','/','/','/'];
            img=[
                'img/mainService/vocal1.jpeg',
                'img/mainService/vocal2.jpg',
                'img/mainService/vocal3.jpg',
                'img/mainService/vocal4.jpg',
                'img/mainService/vocal5.png',
                'img/mainService/vocal6.jpg',
                'img/mainService/vocal7.jpg',
                'img/mainService/vocal8.jpg'
            ];
            serviceTitle = [
                '보컬 레슨이 필요하다면 주저 말고 연락하세요!',
                '단기간 레벨UP! 알짜배기 맞춤형 보컬레슨',
                '원데이 음성(발성)검사 클래스',
                '편안하고 즐겁게, 노래를 배워 볼 예정이에요!',
                '기본기는 탄탄하게! 보컬레슨',
                '현역 보컬에게 쉽게 배우는 발성',
                '현역프로듀서의 레코딩 보컬레슨',
                '[실용음악과교수, 오디션프로티쳐] 13년차 내공왕 보컬 티쳐'
            ];
            offer = [
                '150,000원 ~',
                '240,000원 ~',
                '55,000원 ~',
                '150,000원 ~',
                '100,000원 ~',
                '150,000원 ~',
                '110,000원 ~',
                '180,000원 ~'
            ];
        }
        if(title === '나의심리상태'){
            link = ['/','/','/','/','/','/','/','/'];
            img=[
                'img/mainService/psychologicalCounseling1.jpg',
                'img/mainService/psychologicalCounseling2.jpg',
                'img/mainService/psychologicalCounseling3.jpg',
                'img/mainService/psychologicalCounseling4.jpg',
                'img/mainService/psychologicalCounseling5.jpg',
                'img/mainService/psychologicalCounseling6.jpg',
                'img/mainService/psychologicalCounseling7.png',
                'img/mainService/psychologicalCounseling8.jpg',
            ];
            serviceTitle = [
                '마음을 마음대로 다스리는데 도움을 주는 명상 배우기',
                'lbH 삶의 문제 해결 워크숍',
                '캘리그라피 심리상담(정법강의를 토대로 생각의 변화로 새로운 삶을 살수 있도록 안내할게요)',
                '나를 만나는 1시간 사주/타로 테라피',
                '종합심리검사',
                '나의 관계는 안전한가',
                '취업고민/인생고민/심리상담 한곳에서 해결하세요!',
                '마음이 편하고자 할 때'
            ];
            offer = [
                '50,000원 ~',
                '100,000원 ~',
                '50,000원 ~',
                '50,000원 ~',
                '20,000원 ~',
                '30,000원 ~',
                '15,000원 ~',
                '20,000원 ~'
            ];
        }
    }

    setData();

    const linkURL = link;
    const imgURL = img;
    const titleText = serviceTitle;
    const offerText = offer;
    
    
    return(
        [linkURL, imgURL, titleText, offerText]
    );
}

export default GetData;