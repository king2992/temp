$(document).ready(function(){
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