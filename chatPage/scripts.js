const updateMsgs = (arr) => {
    arr.forEach(msg => {
        console.log(msg)
        const para = document.createElement("p");
        const node = document.createTextNode(msg);
        para.appendChild(node)
        const element = document.getElementById("body1");
        element.appendChild(para);
    });
};

const makeRequest = async () => {
    const data = await (await fetch("http://127.0.0.1:3000")).json();
    return data;
}

const findMessages = async () => {
    const data = await makeRequest();
    updateMsgs(data);
};

findMessages();
// console.log(1)

// messages().then(res => {
//     console.log(2)
//     res.forEach(msg => {
//         const para = document.createElement("p");
//         const node = document.createTextNode(msg);
//         para.appendChild(node)
//         const element = document.getElementById("body1");
//         element.appendChild(para);
//     });
// });

