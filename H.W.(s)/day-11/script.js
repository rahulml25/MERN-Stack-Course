const paragraphCountElem = document.getElementById("paragraph-count");
const wordsPerParaCountElem = document.getElementById("words-per-para-count");
const useHtmlElem = document.getElementById("use-html");
const htmlTagSelectElem = document.getElementById("html-tag");
const htmlTagLabelElem = document.getElementById("html-tag-label");
const contentElem = document.getElementById("content");
const generatorElem = document.getElementById("generator");
const copyTextElem = document.getElementById("copy-text");
const copiedElem = document.getElementById("copied");

const loremWords = [
  "hello",
  "guys",
  "welcome",
  "college",
  "fine",
  "you",
  "good",
  "brother",
  "party",
  "soon",
  "morning",
  "bye",
];

let copiedTimeout = null;

let useHtml = useHtmlElem.checked;

const generateLoremContent = () => {
  const paragraphCount = paragraphCountElem.value;
  const wordsPerPeraCount = wordsPerParaCountElem.value;
  const htmlTag = htmlTagSelectElem.value;

  const paras = [];

  for (let i = 0; i < paragraphCount; i++) {
    let paragraphWords = [];
    for (let i = 0; i < wordsPerPeraCount; i++) {
      const idx = Math.floor(Math.random() * loremWords.length);
      paragraphWords.push(loremWords[idx]);
    }

    const paragraph = capitalize(paragraphWords.join(" ") + ".");
    paras.push(useHtml ? `<${htmlTag}>${paragraph}</${htmlTag}>` : paragraph);
  }

  const content = paras.join(" ");
  contentElem.innerHTML = content;
};

const capitalize = (/** @type {string} */ text) => {
  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};

const copyText = () => {
  if (!contentElem.innerHTML) return;
  navigator.clipboard.writeText(contentElem.innerHTML).then(() => {
    copiedElem.style.display = "block";
    setTimeout(() => {
      copiedElem.style.display = "none";
      clearTimeout(copiedTimeout);
      copiedTimeout = null;
    }, 1000);
  });
};

useHtmlElem.addEventListener("change", (e) => {
  useHtml = e.currentTarget.checked;

  if (!useHtml) {
    htmlTagSelectElem.disabled = true;
    htmlTagLabelElem.className = "disabled";
  } else {
    htmlTagSelectElem.disabled = false;
    htmlTagLabelElem.className = "";
  }
});
generatorElem.addEventListener("click", generateLoremContent);
copyTextElem.addEventListener("click", copyText);
