//사진 클릭 이벤트
const imgBox = document.getElementById("img_ms");
const spanBox = document.getElementById("img_span_box");

spanBox.addEventListener("click",function(e){
    spanBox.style.display = "none";
    imgBox.style.display = "";
});