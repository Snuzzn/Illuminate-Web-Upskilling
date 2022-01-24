let btn = document.getElementById("button");

btn.onclick = () => {
  console.log("going to scroll to top");
  window.scrollTo({ top: 0, behavior: "smooth" });
};
