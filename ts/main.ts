const count_str = document.querySelector(".count_str")! as HTMLDivElement;
const count_char = document.querySelector(".count_char")! as HTMLDivElement;
const fileInput = document.getElementById("input_name")! as HTMLInputElement;
const textarea = document.getElementById(
  "input_content"
)! as HTMLTextAreaElement;

// 글자 수 세기
textarea.addEventListener("keyup", () => {
  count_str.innerHTML = "" + textarea.value.length;
  count_char.innerHTML = "" + textarea.value.replace(regex, "").length;
});

let regex = /\s/gi;

// 버튼
const saveBtn = document.getElementById("save_btn")! as HTMLButtonElement;
const deleteBtn = document.getElementById(
  "delete_content_btn"
)! as HTMLButtonElement;
const deletAllBtn = document.getElementById("delete_btn")! as HTMLButtonElement;
const copyBtn = document.getElementById("copy_btn")! as HTMLButtonElement;

// 파일 저장하기
saveBtn.addEventListener("click", function saveFile() {
  const fileName = document.getElementById("input_name")! as HTMLInputElement;
  const name: string = fileName.value.replace(/[.](\s*)/g, "");
  const content: string = textarea.value;

  const hiddenEle = document.createElement("a");
  hiddenEle.href = "data:text/plain;charset=utf-11," + encodeURI(content);
  hiddenEle.download = name;
  hiddenEle.target = "_blank";
  hiddenEle.click();
});

// 내용지우기
deleteBtn.addEventListener("click", () => {
  let answer = confirm("작성한 내용을 전부 지우시겠습니까?");
  if (answer === true) {
    textarea.value = "";
    count_str.innerHTML = "" + 0;
    count_char.innerHTML = "" + 0;
  }
});

// 모두지우기
deletAllBtn.addEventListener("click", () => {
  let answer = confirm("작성한 이름과 내용을 전부 지우시겠습니까?");
  if (answer === true) {
    fileInput.value = "";
    textarea.value = "";
    count_str.innerHTML = "" + 0;
    count_char.innerHTML = "" + 0;
  }
});

// 내용 복사
copyBtn.addEventListener("click", () => {
  textarea.select();
  textarea.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textarea.value);
  alert("내용이 복사되었습니다.");
});

// 버전 정보
const ver = document.getElementById("version")! as HTMLDivElement;
const ver_con = document.querySelector(".update_content")! as HTMLDivElement;

ver.addEventListener("mouseover", () => {
  ver_con.style.display = "flex";
});
ver.addEventListener("mouseout", () => {
  ver_con.style.display = "none";
});
