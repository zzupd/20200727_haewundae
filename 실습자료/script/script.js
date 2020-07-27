function fnLayerPopup() {
    // 모달레이어 팝업 실행
    document.getElementById("layerPopupBg")
        .style.display = "block";
}

function fnPopupClose() {
    // 모달레이어 팝업 종료
    document.getElementById("layerPopupBg")
        .style.display = "none";
}

function fnDisplayNotice() {
    document.getElementById("contentNotice").style.display = "block";
    document.getElementById("contentGallery").style.display = "none";
}
function fnDisplayGallery() {
    document.getElementById("contentNotice").style.display = "none";
    document.getElementById("contentGallery").style.display = "block";
}

function fnFocus1() {
    document.getElementById("btn1").style.border = "1px solid #ccc";
    document.getElementById("btn1").style.borderBottom = "none";
    document.getElementById("btn1").style.top = "1px";

    document.getElementById("btn2").style.border = "none";
    document.getElementById("btn2").style.top = "0";
}

function fnFocus2() {
    document.getElementById("btn2").style.border = "1px solid #ccc";
    document.getElementById("btn2").style.borderBottom = "none";
    document.getElementById("btn2").style.top = "1px";

    document.getElementById("btn1").style.border = "none";
    document.getElementById("btn1").style.top = "0";
}



