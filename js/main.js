document.querySelector("button").addEventListener("click", apiRequest);
statlist = document.querySelector("#statlist");

// delete the child elements from a list element
function clearListChildren(list) {
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
}

async function apiRequest() {
  console.log("in the function");
  clearListChildren(statlist);
  const characterName = document.querySelector("input").value;
  try {
    //const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
    const response = await fetch(
      `https://api-x-family.herokuapp.com/api/characters/${characterName}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = `Retrieved data for: ${data.name}`;
    for (let key in data) {
      console.log(`Key: ${key}    Data: ${data[key]}`);
      var li = document.createElement("li");
      li.textContent = `${key}: ${data[key]}`;
      statlist.appendChild(li);
    }
  } catch (error) {
    console.log(error);
  }
}
