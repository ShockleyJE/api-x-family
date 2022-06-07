document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  console.log("in the function");
  const characterName = document.querySelector("input").value;
  try {
    //const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
    const response = await fetch(
      `https://api-x-family.herokuapp.com/api/characters/${characterName}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data.birthName;
  } catch (error) {
    console.log(error);
  }
}
