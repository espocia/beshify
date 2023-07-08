function beshify(sentence) {
  let sentence_split = sentence.split(" ");
  let beshified_senetece = "";

  for (let i = 0; i < sentence_split.length; i++) {
    if (i < sentence_split.length - 1) {
      beshified_senetece += sentence_split[i] + " 🤸 ";
    } else {
      if (sentence_split[i][sentence_split[i].length - 1] === ".") {
        beshified_senetece += sentence_split[i];
      } else {
        beshified_senetece += sentence_split[i] + ".";
      }
    }
  }

  return beshified_senetece;
}

function copyToClipboard() {
  const text = document.getElementById("beshify_output_feild").innerText;
  const tempInput = document.createElement("textarea");

  tempInput.value = text;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
function getInputText() {
  const inputElement = document.getElementById("input_feild");
  const inputValue = inputElement.value;
  const outputField = document.getElementById("beshify_output_feild");

  if (inputValue.length > 200) {
    outputField.innerText = " 🤸 input too long beshie 🤸";
  } else {
    outputField.innerText = beshify(inputValue);
  }

  console.log(inputValue);
}
