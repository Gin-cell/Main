/* var playList = [
    {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN"
    },
    {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY"
    },
    {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD"
    },
    {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER"
    },
    {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER"
    },
    {
      author: "AC/DC",
      song: "BACK IN BLACK"
    },
    {
      author: "QUEEN",
      song: "WE WILL ROCK YOU"
    },
    {
      author: "METALLICA",
      song: "ENTER SANDMAN"
    }
  ];

  
  const ul = document.createElement("ul");
  const mainDiv = document.getElementById("content");
  mainDiv.append(ul);
  for (let i in playList) {
    const li = document.createElement("li");
    const pBtn = document.createElement("p");
    pBtn.append(playList[i].author);
    pBtn.append(" : ");
    pBtn.append(playList[i].song);
    li.append(pBtn);
    ul.append(li);
  } */

const mainDiv = document.getElementById("content");
const btn = document.createElement("button");
const p = document.createElement("p");

p.textContent = "Open";

btn.append(p);

mainDiv.append(btn);

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__div");
  const p = document.createElement("p");
  p.textContent = "Noting to read here, just close it";
  div.append(p);

  const hidden = document.createElement("button");
  const hiddenP = document.createElement("p");
  hiddenP.textContent = "Close";
  hidden.append(hiddenP);
  div.append(hidden);
  mainDiv.append(div);
  btn.disabled = true;
  hidden.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
  });
});