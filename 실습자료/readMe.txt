[팝업 종류 2가지]
1. 윈도우 팝업
  => 새로운 브라우저 창 1개 추가,
       JS코드로만 만듬
       (window.open())
 
2. 레이어 팝업
  => 기존의 브라우저 1개에서
       블록레벨요소를 사용하여
       레이어(=층) 팝업을 만든 것

-------------------------------

[레이어 팝업 제작]
1. html 코드
  1) div#wrap 이후에 레이어 팝업에
      적용할 레이어를 만드는 요소를 생성

    (1) layerPopupBg =>
      ● 레이어 팝업의 배경
      ● 전체 화면을 배경으로 만들어야 함
         (div#wrap이 클릭되지 않음)  
    (2) layerPopup
  2) layerPopup 내용 구성
  3) layerPopup 레이어팝업
      화면 닫기 버튼


2. css 코드
    1) layerPopupBg =>
     ● position: absolute;
     ● left: 0; top: 0;
     ● width: 100%;
        height: 100%;
     ● 배경색 검정 + 적당한 불투명도 
    2) layerPopup =>
     ● 적당한 width, heigth
     ● 배경색 적용(#fff)
     ● position: absolute;
        left, top => 적당한 위치

    3) layerPopup 레이어팝업
      화면 닫기 버튼
      => p요소, span요소, 
           button요소, input:b요소,
           div요소 또는 작업자가 
           선호하는 요소를 적용함.
    4) layerPopupBg =>
        display: none;
        (레이어 팝업 화면이 처음에는
         나타나지 않음. 이것을
         JS로 클릭했을 때 레이어팝업이
         나타나도록 만들어야 함
         => 공지사항 게시판의 
               첫 번째 글 목록 클릭!)
       

3. JS 또는 jQuery를 사용하여
    기능 적용
  1) 레이어 팝업의 이벤트(=클릭 이벤트        )를 실행했을 때 모달레이어 실행
  2) 닫기 버튼 클릭했을 때
       => display: none; 재적용

--------------------------------

[멀티탭]

1. 버튼을 이용하여 탭을 구성함.
    (이미 만들었음)
2. 각 버튼의 내용을 구성함
  => 2번째 버튼의 내용은 
       표시하지 않음(display: none)
3. 각 버튼을 클릭하면
    해당하는 내용이 표시되고(display:
    block), 해당하지 않는 내용은
    표시되지 않음(display: none)
    주의사항!
    => 실제 작업 과정
     1) 각 버튼을 클릭하면
         모든 내용을 표시하지 않음
         (모든 내용을 display: none)
     2) 클릭한 내용만 표시함
          (display: block)
    => "data-" html 속성 사용함
      참고. data- 속성
       (1) 어떤 의미를 갖는 이름을
             속성 값으로 사용함.
       (2) 주로 id속성 값으로 사용하기
            위한 목적
       (3) 사용법 : 
         data-사용하고싶은속성이름
           = "속성값"
        
         올바른 표현(data-문자열)
         data-a
         data-name
         data-username

         잘못된 표현
         (대문자 안됨, 숫자안됨)
         data-userName
         data-3



Github 저장소  URL =>
https://github.com/zzupd/20200727_haewundae.git

    













        