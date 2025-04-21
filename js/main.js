"use strict";

// 글자 수
const count_str = document.querySelector(".count_str");
const count_char = document.querySelector(".count_char");
const fileInput = document.getElementById("input_name");
const textarea = document.getElementById("input_content");

let regex = /\s/gi;

textarea.addEventListener("keyup", () => {
  count_str.innerHTML = textarea.value.length;
  count_char.innerHTML = textarea.value.replace(regex, "").length;
});

// 파일 저장하기
const save = document.getElementById("save_btn");

save.addEventListener("click", function saveFile() {
  const fileName = document
    .getElementById("input_name")
    .value.replace(/\s*/g, ""); // 모든 공백 제거
  const content = textarea.value;

  const hiddenEle = document.createElement("a");
  hiddenEle.href =
    "data:text/plain;charset=utf-11," + encodeURIComponent(content);
  hiddenEle.download = fileName;
  hiddenEle.target = "_blank";
  hiddenEle.click();
});

// 내용지우기
document.getElementById("delete_content_btn").addEventListener("click", () => {
  let answer = confirm("작성한 내용을 전부 지우시겠습니까?");
  if (answer === true) {
    textarea.value = "";
    count_str.innerHTML = 0;
    count_char.innerHTML = 0;
  }
});

// 모두지우기
document.getElementById("delete_btn").addEventListener("click", () => {
  let answer = confirm("작성한 이름과 내용을 전부 지우시겠습니까?");
  if (answer === true) {
    fileInput.value = "";
    textarea.value = "";
    count_str.innerHTML = 0;
    count_char.innerHTML = 0;
  }
});

// 내용 복사
document.getElementById("copy_btn").addEventListener("click", () => {
  textarea.select();
  textarea.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textarea.value);
  alert("내용이 복사되었습니다.");
});

// 버전 정보
const ver = document.getElementById("version");
const ver_con = document.querySelector(".update_content");

ver.addEventListener("mouseover", () => {
  ver_con.style.display = "flex";
});
ver.addEventListener("mouseout", () => {
  ver_con.style.display = "none";
});
