const link = document.createElement("link");
link.id = "anupamcss";
link.href = "bootstrapcss.css";
link.rel = "stylesheet";
document.head.appendChild(link);

const script = document.createElement("script");
script.id = "anupamscript";
script.src = "bootstrapjs.js";
// document.body.appendChild(script);

// document.body.insertAdjacentHTML('beforeend', modalHTML);
function waitForElement(selector) {
  alert("waitforelement is here");
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
  alert("waitforelement is over here");
}
// document.body.appendChild(script);
// let imageContainer = `<img style="width: 20px" href="https://static.virtubox.io/project/file/20240617-063347-ejud-dinigtable.jpg"></img>`
const img = document.createElement("img");
img.src =
  "https://static.virtubox.io/project/file/20240617-063347-ejud-dinigtable.jpg";
// img.alt = altText;
img.style.width = "24px"; // Set the size as needed
img.style.height = "24px";
// You'll need to implement this function
// img.setAttribute('data-bs-toggle', 'modal');
// img.setAttribute('data-bs-target', '#exampleModal');

const modal = document.createElement("div");
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1000";
modal.style.left = "0";
modal.style.top = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.overflow = "auto";
modal.style.backgroundColor = "rgba(0,0,0,0.4)";

const modalContent = document.createElement("div");
modalContent.style.backgroundColor = "#fefefe";
modalContent.style.margin = "15% auto";
modalContent.style.padding = "20px";
modalContent.style.border = "1px solid #888";
modalContent.style.width = "80%";
modalContent.style.maxWidth = "500px";
modalContent.innerHTML = `    
      <span id="closeModal" style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;">&times;</span>
      <div></div>
    `;
modal.appendChild(modalContent);
document.body.appendChild(modal);

img.addEventListener("click", () => {
  modal.style.display = "block";
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none";
});
// Usag
waitForElement('div.msg-form__contenteditable[role="textbox"]').then(
  (element) => {
    // Your code her

    console.log("JusCheckin", element);
    element.appendChild(img);
  }
);

// alert("This is openmodal")
