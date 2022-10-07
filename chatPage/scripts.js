const updateMsgs = (arr) => {
  arr.forEach((msg) => {
    const para = document.createElement("p");
    const node = document.createTextNode(msg);
    para.appendChild(node);
    const element = document.getElementById("messages");
    element.appendChild(para);
  });
};

const makeRequest = async () => {
  const data = await (await fetch("http://127.0.0.1:3000")).json();
  return data;
};

const makePostRequest = async (message) => {
  const res =
    await fetch("http://127.0.0.1:3000", {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message: message}),
    });
    window.location.reload();
};

const findMessages = async () => {
  const data = await makeRequest();
  updateMsgs(data);
};

const form = document.getElementById("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const message = form[0].value;
    makePostRequest(message);
})


findMessages();
