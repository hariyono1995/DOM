/**
let val;

val = document;
val = document.all;
val = document.all.length;
val = document.all[3];

val = document.head;
val = document.body;
val = document.URL;
val = document.characterSet;
val = document.domain;
val = document.doctype;
val = document.body.className;

//  memanggil element form
val = document.forms;
val = document.forms[0];
val = document.forms[0].action;
val = document.forms[0].method;

//  memanggil element a pada document html
val = document.links;
val = document.links[0].className;
val = document.links[0].classList[2];

//  memanggil element images pada document html
val = document.images;

//  memanggil scripts pada halaman html
val = document.scripts;
val = document.scripts[0].getAttribute("src");
val = document.scripts[0];

//  looping scripts
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach((script) =>
  console.log("script", script.getAttribute("src"))
);
console.log(scripts);

//  single selector('mendapatkan element yang pertama kali didapatkan saja') bisa menggunakan class dan id

//  document.getElementsById()
console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

//  mengambil text dalam element
console.log(document.getElementById("task-title").textContent);

//  memanipulasi content/style
const cardHeader = document.getElementById("task-title");

//  single css
cardHeader.style.backgroundColor = "yellow";

//  multiple css
cardHeader.style.cssText = `
background-color : darkBlue;
color: red;
font-weight: bold;
text-transform: uppercase;
`;

cardHeader.textContent = "task to do";
cardHeader.innerHTML = "<span>hello world</span>";

//  document.querySelector();

console.log(document.querySelector("[id = "#task-title"]")); //  id
console.log(document.querySelector(".btn")); //class

document.querySelector("li").style.color = "green";
document.querySelector("ul li:last-child").style.color = "yellow";
document.querySelector("ul li:nth-child(2)").textContent = "feed the dog";

 

//  multiple selector
// console.log(document.getElementsByTagName("button")); // global scope dalam html

// const formBtn = document.querySelector("form").getElementsByTagName("button"); // local scope dalam form

// console.log("formBtn", formBtn);

// let lis = document.getElementsByTagName("li");

// let lisArr = Array.from(lis);
// lisArr.reverse();

// lisArr.forEach((li, index) => {
//   li.textContent = `${index} = hello world`;
// });

const items = document.querySelectorAll("ul.list-group li.list-group-item");

items.forEach((item, index) => {
  index % 2 === 0
    ? (item.textContent = `${index} : genap`)
    : (item.textContent = `${index} : ganjil`);
});

let liOdd = document.querySelectorAll("li:nth-child(odd)");

let liEven = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < liOdd.length; i++) {
  liOdd[i].style.background = "darkGray";
}

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "lightGray";
}

console.log("liEven", liEven);

console.log(items);



let val;

let list = document.querySelector("ul.list-group");
let listItem = document.querySelector("li.list-group-item:first-child");

val = list;
val = listItem;

val = list.childNodes;
val = list.childNodes[2].nodeType;
val = list.childNodes[2].nodeName;

/**
 * type node code nodeType and nodeName
 * 1 = element
 * 2 = attribute
 * 3 = text
 * 8 = comment
 * 9 = document
 * 10 = doctype
 *

//  Get children element nodes
val = list.children;

//  Get children in children element nodes
val = list.children[0].children;

//  Change text content children
val = list.children[1].textContent = "Hello World";

//  Add id in children
val = list.children[0].id = "text-list";
val = list.children[0];

//  Add id in children in children
val = list.children[0].children[0].id = "btn-remove";
val = list.children[0].children[0];

//  Count children based on elements
val = list.childElementCount;

//  Get first children based on elements
val = list.firstElementChild;
val = list.lastElementChild;
//  Get first children based on nodes
val = list.firstChild;
val = list.lastChild;

//  Get parent node
val = listItem.parentNode;
//  Get paren elements
val = listItem.parentElement;
val = listItem.parentElement.parentElement; // grandparent

//  Get next and previous sibling (saudara selanjutnya) based on node
val = listItem.nextSibling;
val = listItem.previousSibling;

//  Get next element sibling
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;

// Get pre element sibling
val =
  listItem.nextElementSibling.nextElementSibling.nextElementSibling
    .previousElementSibling;
console.log("val", val);


//   Create Element
let li = document.createElement("li");
li.className = "list-group-item";
li.id = "new-li";

li.setAttribute("title", "new li");

//  add element in child with innerHTML
li.innerHTML =
  "<button class='float-right btn btn-danger btn-sm delete-item' >x</button>";

//  append nodeName in child
li.appendChild(document.createTextNode("New List Item"));
//  append child in element ul
document.querySelector("ul.list-group").appendChild(li);

console.log(li);


//  replace element

//  New element
let newHeading = document.createElement("h3");
newHeading.id = "task-title";
newHeading.style.textTransform = "capitalize";

newHeading.appendChild(document.createTextNode("task list"));

//  Old element
let oldHeading = document.getElementById("card-title");

//  Parent old element
let cardTitle = document.getElementById("card-header");

//  Replace old element with new element in parent of old element
cardTitle.replaceChild(newHeading, oldHeading);

// cardTitle.id = "id-card";

// cardTitle.textContent = "";

//  Remove element
const removeTask = () => {
  let li = document.querySelectorAll("li");

  li.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-item")) {
        e.target.parentElement.remove();
      }
    });
    // item.remove();
  });
};

//  Remove child element
let li = document.querySelectorAll("li");
let list = document.querySelector("ul");
list.removeChild(li[2]);


//  Manipulate class and attribute(attr)
let lis = document.querySelector("li:first-child");
let btnLi = lis.children[0];

//  Add class and remove class
btnLi.classList.add("color");
btnLi.classList.remove("color");

//  Set and check attribute
btnLi.setAttribute("title", "btn-li");
btnLi.hasAttribute("title");

console.log("lis", btnLi);


//  User interface with event
const clearTask = () => {
  let btnClearTask = document.getElementsByClassName("clear-task");

  btnClearTask[0].addEventListener("click", (e) => {
    // if (e.target.classList.contains("delete-item")) {
    //   e.target.parentElement.remove();
    // }
    let val;
    val = e;
    val = e.target;
    val = e.target.innerHTML = "Done!";
    console.log(val);
    let lis = document.querySelectorAll("li");
    lis.forEach((item) => {
      setTimeout(item.remove(), 5000);
    });
  });
};

//  Interaction with mouse
const card = document.querySelector(".card");
const heading = document.querySelector("h5");
const btnClear = document.querySelector("#clear-task");

//  event click one click
// btnClear.addEventListener("click", typeEventMouse);

//  event double click
btnClear.addEventListener("dblclick", typeEventMouse);

//  event mouse
//  mousedown => ketika cursor sedang klik tetapi belum di lepas
btnClear.addEventListener("mousedown", typeEventMouse);

//  mouseup => ketika cursor diclick kemudian di lepas akan menjalankan event
btnClear.addEventListener("mouseup", typeEventMouse);

//  mouseleave => ketika cursor meninggalkan area card event baru di jalankan
card.addEventListener("mouseleave", typeEventMouse);

//  mouseenter => ketika cursor memasuki area card maka event akan di jalankan
card.addEventListener("mouseenter", typeEventMouse);

//  mouseover => ketika cursor berada pada element dalam area card maka event akan di jalankan
card.addEventListener("mouseover", typeEventMouse);

//  mouseout => ketika cursor meninggalkan element dalam area card maka event akan di jalankan
card.addEventListener("mouseout", typeEventMouse);

//  mousemove => ketika cursor di gerakan pada area card maka event akan dijalankan
card.addEventListener("mousemove", typeEventMouse);

function typeEventMouse(e) {
  console.log(`TYPE EVENT : ${e.type}`);
  console.log("e", e);
  heading.textContent = `OFFSET X : ${e.offsetX} OFFSET Y : ${e.offsetY}`;

  let alpha = Math.floor(Math.random() * 10);
  document.body.style.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY}, ${e.offsetX}, ${alpha})`;
}

//  Interaction forms and keyboard
const form = document.querySelector("form");
const heading = document.querySelector("h5");
const select = document.querySelector("select");
const btnSubmit = document.querySelector(".btn-submit");

const runEvent = (e) => {
  console.log(`event type : ${e.type}`);
  heading.textContent = e.target.value;
  e.preventDefault();
};
//  keydown || keypress => ketika keyboard di tekan maka event akan di jalankan
form.addEventListener("keydown", runEvent);
form.addEventListener("keypress", runEvent);

//  keyup => ketika keyboard di lepas maka event akan dijalankan
form.addEventListener("keyup", runEvent);

//  cut / ctrl + x => ketika inputan di input di cut maka event akan dijalankan
form.addEventListener("cut", runEvent);

//  copy / ctrl + c => ketika inputan di input di copy maka event akan dijalankan
form.addEventListener("copy", runEvent);

//  paste / ctrl + v => ketika inputan di input di paste maka event akan dijalankan
form.addEventListener("paste", runEvent);

//  input => ketika ada aktivitas event maka event akan di jalankan
form.addEventListener("input", runEvent);
//  focus => ketika cursor berada di dalam form input maka event akan di jalankan
form.addEventListener('focus', runEvent);

//  blur => ketika cursor yang berada dalam input kemudian di clik area di luar input maka event akan di jalankan
form.addEventListener('blur', runEvent);

select.addEventListener("change", runEvent);

btnSubmit.addEventListener("submit", runEvent);

//  Event Delegation => event yang akan di jalankan ketika suatu element mempunyai karakteristik yang sama

let delItem = document.querySelector(".delete-item"); // kurang efektif karena hanya menyeleksi satu element dengan class yang di seleksi pada urutan pertama

delItem = document.body;

const deleteItem = (e) => {
  // if (e.target.className === "float-right btn btn-danger btn-sm delete-item")
  //   console.log("delete item"); // kurang efektif

  if (e.target.classList.contains("delete-item")) {
    console.log("delete item", e);
    let lis = document.querySelectorAll(".delete-item");
    lis.length > 1
      ? e.target.parentElement.nextElementSibling.remove()
      : e.target.parentElement.remove();
  }
};

delItem.addEventListener("click", deleteItem);

*/

//  Event Bubbling => event yang bekerja secara dalam DOM yang mana bekerja dari element terendah ke element tertinggi yang mana akan sampay pada parentnya yaitu body. supaya hanya bekerja pada element nya saja maka perlu di tambah onclink='event.stopPropagation()' pada elemennya

/**
 const printIdElement = (e) => {
  if (e.target.id) {
    console.log(e.target.id);
  } else {
    console.log(
      e.target.classList.length > 0
        ? e.target.classList[e.target.classList.length - 1]
        : e.target.classList[0]
    );
  }
};

document.querySelector("#card-title").addEventListener("click", printIdElement);

document
  .querySelector(".card-header")
  .addEventListener("click", printIdElement);

document.querySelector(".card").addEventListener("click", printIdElement);
*/
document.querySelector("#card-title").addEventListener("click", () => {
  console.log("card title");
});
document.querySelector(".card-header").addEventListener("click", () => {
  console.log("card header");
});
document.querySelector(".card").addEventListener("click", () => {
  console.log("card");
});
document.querySelector(".col-md-12").addEventListener("click", () => {
  console.log("col");
});
document.querySelector(".row").addEventListener("click", () => {
  console.log("row");
});
document.querySelector("container").addEventListener("click", () => {
  console.log("container");
});

//  Event Capturing => event yang bekerja secara dalam DOM yang mana bekerja dari element tertinggi ke element terendah yang mana akan sampay pada childnya yaitu element yang di seleksi pada urutan terakhir. Bubling -> Capturing perlu menambahkan true

document.querySelector("#card-title").addEventListener("click", () => {
  console.log("card title");
});
document.querySelector(".card-header").addEventListener("click", () => {
  console.log("card header");
});
document.querySelector(".card").addEventListener("click", () => {
  console.log("card");
});
document.querySelector(".col-md-12").addEventListener("click", () => {
  console.log("col");
});
document.querySelector(".row").addEventListener("click", () => {
  console.log("row");
});
document.querySelector("container").addEventListener(
  "click",
  () => {
    console.log("container");
  },
  true
);
