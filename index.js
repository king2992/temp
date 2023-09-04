$(document).ready(function(){
    if(!getCookie("hideBannerForToday")) {
        var modal = $('#bannerModal');
        modal.show();

        // 모달 외부 클릭 시 모달 닫기
        $(window).click(function(event) {
            if (event.target == modal[0]) {
                modal.hide();
            }
        });

        // 오늘 하루 보지 않기 클릭 시
        $('#hideToday').click(function() {
            setCookie("hideBannerForToday", true, 1); // 쿠키를 1일 동안 저장
            modal.hide();
        });
    }

    fn_control_mouse();
})

function fn_control_mouse(){
    $(document).bind("contextmenu", function(e){
        return false;
    })
    $(document).bind('selectstart', function(){
        return false;
    })
    $(document).bind('dragstart', function(){
        return false;
    })
}
function hideBannerForToday() {
    setCookie("hideBannerForToday", true, 1); // 쿠키를 1일 동안 저장
    var modal = document.getElementById('bannerModal');
    modal.style.display = "none";

}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}