function english_to_french() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("translated_text").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open(
    "GET",
    "english_to_french?textToTranslate" + "=" + textToTranslate,
    true
  );
  xhttp.send();
}

function french_to_english() {
  textToTranslate = document.getElementById("textToTranslate").value;

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("translated_text").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open(
    "GET",
    "french_to_english?textToTranslate" + "=" + textToTranslate,
    true
  );
  xhttp.send();
}
