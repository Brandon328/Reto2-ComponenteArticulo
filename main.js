const share_button = document.querySelector("#share-button");

share_button.addEventListener('click', e=>{
  const share_section = document.querySelector("#share-section");
  const share_icon = document.querySelector("#share-icon")
  if(share_section.style.display=="flex"){
    share_section.style.display="none";
    share_button.style.background="var(--light-grayish-blue)";
    share_icon.style.color="var(--desaturated-dark-blue)";
  }
  else {
    share_section.style.display="flex";
    share_button.style.background="var(--desaturated-dark-blue)";
    share_icon.style.color="white";
  }
});