function randomQuates() {
  var quote = [
    "إذا أخذت تعد بما لا تملك بعد فستقد الرغبة في الحصول علي",
    "التربية تطور المواهب لكنها لا تخلقها",
    "الابقاء علي التقاليد البالية سخف ومهلك",
  ];
  var writerOfquote = ["باولو كويلو", "فولتير", "نجيب محفوظ"];
  var randomNumber = Math.floor(Math.random() * quote.length);
  document.getElementById("quote").innerHTML = `"${quote[randomNumber]}"`;
  document.getElementById("writerofquote").innerHTML =
    "--" + writerOfquote[randomNumber];
}
