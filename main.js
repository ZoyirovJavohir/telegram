// const arrays = [];
const arraysa = JSON.parse(localStorage.getItem("history")) || [];

const savaUsaersM = () => {
  localStorage.setItem("history", JSON.stringify(arraysa));
};

const arrayinfo = document.getElementById("arrayInfo");
const pen = document.getElementById("pen");

// const arrays = JSON.stringify;

const allUsers = () => {
  arrayinfo.innerHTML = "";
  arraysa.map((item, index) => {
    arrayinfo.innerHTML += `
    <div onclick="userOnclick(${index})"  class="d-flex cursor gap-2 rounded-3 px-2 py-1 color align-items-center mt-3 cursor-pointer">
    <img src="${item.src}" alt="" class=" rounded-pill " style="width: 50px; height:50px">
    <p class="fw-bold">${item.name}</p>
    </div>
  `;
  });
  pen.classList.add("d-none");
};
allUsers();
const users = () => {
  arrayinfo.innerHTML = "";
  arraysa.filter((item, index) => {
    if (item.type === "user") {
      arrayinfo.innerHTML += `
      <div onclick="userOnclick(${index})" class="d-flex cursor color rounded-3 px-2 py-1 gap-2 align-items-center mt-3" style="background-color">
     <img src="${item.src}" alt="" class=" rounded-pill " style="width: 50px; height:50px">
     <div class="p-0 m-0">
     <p class="fw-bold p-0 m-0">${item.name}</p> 
     <p class="fw-bold p-0 m-0">${item.time}</p>
     </div>
     </div>
      `;
    }
  });
  pen.classList.remove("d-none");
};

const groups = () => {
  arrayinfo.innerHTML = "";
  arraysa.map((item, index) => {
    console.log(item);
    if (item.type === "group") {
      arrayinfo.innerHTML += `
    <div onclick="userOnclick(${index})"  class="d-flex cursor color rounded-3 px-2 py-1 gap-2 align-items-center mt-3">
   <img src="${item.src}" alt="" class=" rounded-pill " style="width: 50px; height:50px">
   <p class="fw-bold">${item.name}</p> 
   </div>
    `;
    }
  });
  pen.classList.add("d-none");
};

const channels = () => {
  arrayinfo.innerHTML = "";
  arraysa.map((item, index) => {
    if (item.type === "channel") {
      arrayinfo.innerHTML += `
    <div onclick="userOnclick(${index})"  class="d-flex cursor color rounded-3 px-2 py-1 gap-2 align-items-center mt-3">
    <img src="${item.src}" alt="" class=" rounded-pill " style="width: 50px; height:50px">
    <p class="fw-bold">${item.name}</p> 
    </div>
    `;
    }
  });
  pen.classList.add("d-none");
};
const bots = () => {
  arrayinfo.innerHTML = "";
  arraysa.map((item, index) => {
    if (item.type === "bot") {
      arrayinfo.innerHTML += `
      <div onclick="userOnclick(${index})"  class="d-flex cursor color rounded-3 px-2 py-1 gap-2 align-items-center mt-3">
     <img src="${item.src}" alt="" class=" rounded-pill " style="width: 50px; height:50px">
     <p class="fw-bold">${item.name}</p> 
     </div>
      `;
    }
  });
  pen.classList.add("d-none");
};

const modalBody = document.querySelector(".modal-body");

const modal = () => {
  modalBody.innerHTML = `
  <input type="text" id="inputName" placeholder="Enter your name" class="form-control">
  <input type="text" id="inputImg" placeholder="Enter your image link" class="form-control mt-2">
`;
};
const infoPlus = () => {
  const inputName = document.getElementById("inputName");
  const inputImg = document.getElementById("inputImg");

  console.log("save worked");

  //   const newObj = {
  //   name: inputName.value,
  //   type: "user",
  //   time: "02 : 12 ",
  //   src: inputImg.value,
  // };

  arraysa.push({
    name:
      inputName.value != "" ? inputName.value : alert("malumot kiritmadingiz"),
    type: "user",
    time: "02 : 12 ",
    src:
      inputImg.value != ""
        ? inputImg.value
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
    userMassanges: [],
    yourMassanges: [],
  });

  savaUsaersM();
  users();

  inputName.value = "";
  inputImg.value = "";
};

const search = () => {
  arrayinfo.innerHTML = "";
  const searchInput = document.getElementById("searchInput");
  arraysa.map((list, index) => {
    if (list.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      console.log(list);
      arrayinfo.innerHTML += `
      <div onclick="userOnclick(${index})" class="d-flex cursor color rounded-3 px-2 py-1 gap-2 align-items-center mt-3">
     <img src="${list.src}" alt="" class=" rounded-pill " style="width: 50px; height:50px">
     <p class="fw-bold">${list.name}</p> 
     </div>
  `;
    }
  });
  searchInput.value = "";
};

const right = document.querySelector(".right");

const userOnclick = (sIndex) => {
  console.log(sIndex);
  arraysa.map((item, index) => {
    const info = arraysa[sIndex];
    // console.log(info);
    right.innerHTML = `
     <header class="p-3">
     <div class="d-flex align-items-center">
     <img src="${info.src}" alt="" class=" rounded-pill " style="width: 50px; height:50px">
     <h2 class="fw-bold ms-3">${info.name}</h2>
     </div>

      <div class="d-flex align-items-center gap-4">
      <button class=" btn border-0 "><i class="fa-solid fa-magnifying-glass"></i></button>
       <button class="btn border-0 "><i class="fa-solid fa-microphone-lines"></i></button>
      <button class="btn border-0 "><i class="fa-solid fa-table-columns"></i></button>
      <button class="btn border-0"><i class="fa-solid fa-ellipsis-vertical"></i></button>
      </div>
     </header>
     <div class="sendInfo">
     </div>
     <footer class="position-absolute bottom-0  p-2 d-flex align-items-center justify-content-between">
     <div class="d-flex align-items-center gap-2">
     <button onclick="scripka()" class="btn border-0" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="fa-brands fa-airbnb"></i></button>
     <input type="text" id="sendInput" placeholder="Write a message ..." class="form-control border-0 w-100 bg-transparent">
     </div>
     <div>
     <button class="btn border-0"><i class="fa-regular fa-face-smile"></i></button>
     <button class="btn border-0"><i class="fa-solid fa-microphone-lines"></i></button>
     <button onclick="send(${sIndex})" class="btn border-0"><i class="fa-solid fa-paper-plane"></i></button>
     </div>
     </footer>
    `;
  });
  messageCreat(sIndex);
  // send();
};

const send = (index) => {
  // alert("123");
  console.log(index);
  const sendInput = document.getElementById("sendInput");

  arraysa[index].userMassanges.push({
    messageMi: sendInput.value,
  });

  savaUsaersM();

  messageCreat(index);

  sendInput.value = "";
};

const messageCreat = (index) => {
  const sendInfo = document.querySelector(".sendInfo");
  sendInfo.innerHTML = "";
  arraysa[index].userMassanges.map((task) => {
    //   console.log(task);
    sendInfo.innerHTML += `
     <ul class="textend">
      <li class="mt-3 text-end w-100">
     <div class="ms-auto p-3 bg d-inline-block rounded-4 me-3">
      <span class="fw-bold text-primary">You: </span>  ${task.messageMi}
     </div>
     </li> 

   
     </ul>
    `;
  });
  autoScroll();
};

const autoScroll = () => {
  const sendInfo = document.querySelector(".sendInfo");
  sendInfo.scrollTop = sendInfo.scrollHeight;
};

const scripka = () => {
  const modalBody2 = document.querySelector(".modal-body2");

  modalBody2.innerHTML = `
  <div class="d-flex align-items-center">
    <button class="btn border-0"><i class="fa-solid fa-image fa-2x text-warning"></i></button>
    <input class="form-control" type="text">
   </div>
  <div class="d-flex align-items-center">
    <button class="btn border-0"><i class="fa-solid fa-video fa-2x text-danger"></i></button>
    <input class="form-control" type="text">
   </div>
   <div class="d-flex align-items-center">
    <button class="btn border-0"><i class="fa-solid fa-location-dot fa-2x text-primary"></i></button>
    <input class="form-control" type="text">
   </div>
  `;
};

const save2 = () => {
  const sendInfo = document.querySelector(".sendInfo");
  sendInfo.innerHTML = "";
  arraysa[index].userMassanges.map((task) => {
    //   console.log(task);
    sendInfo.innerHTML += `
     <ul class="textend">
      <li class="mt-3 text-end w-100">
     <div class="ms-auto p-3 bg d-inline-block rounded-4 me-3">
      <span class="fw-bold text-primary">You: </span>  ${task.messageMi}
     </div>
     </li> 

   
     </ul>
    `;
  });
  autoScroll();
};
