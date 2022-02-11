window.onload = () => {
    const buttons = document.getElementsByTagName("button")
    const info = document.getElementsByTagName("tr")
  
    let newInfo = [];
  
    for (let i = 0; i < info.length; i++) {
      if (info[i].id === "info"){
        
        newInfo.push(info[i]);
      }
    }
  
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function onClick() {
      if (newInfo[i].style.display == "none") {
        buttons[i].innerText = "View Less"
        newInfo[i].style.display = "table-row"
      }
  
      else {
        newInfo[i].style.display = "none"
        buttons[i].innerText = "View More"
      }
    }) 
    }
  }
  
  
  
  // window.onload = () => {
  //   const buttons = document.getElementsByTagName("button")
  //   const info = document.getElementsByTagName("tr")
  
  //   let newInfo = [];
  
  //   for (let i = 0; i < info.length; i++) {
  //     if (info[i].id === "info"){
        
  //       newInfo.push(info[i]);
  //     }
  //   }
  
  
  //   for (let i = 0; i < buttons.length; i++) {
  //     buttons[i].addEventListener("click", function onClick() {
  //     if (newInfo[i].style.display == "none") {
  //       buttons[i].innerText = "View Less"
  //       newInfo[i].style.display = "table-row"
  //     }
  
  //     else {
  //       newInfo[i].style.display = "none"
  //       buttons[i].innerText = "View More"
  //     }
  //   }) 
  //   }
  // }