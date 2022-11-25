const generateBtn = document.querySelector("#generate");
const resetBtn = document.querySelector("#reset");
const p = document.querySelector("p");
const firstText = p.innerText;
const url = "https://icanhazdadjoke.com/";
const config = {
  headers: {
    Accept: "application/json",
  }
}

const writeDadJoke = async () => {
  const joke = await getDadJokes();
  p.innerText = joke;
}

const getDadJokes = async () => {
  try {
    const response = await axios.get(url, config);
    console.log(response.data.joke);
    return response.data.joke;
  } catch(e) {
    console.log("Something went wrong: ", e);
  }
}

const reset = () => {
  p.innerText = firstText;
}


generateBtn.addEventListener("click", writeDadJoke);
resetBtn.addEventListener("click", reset);

