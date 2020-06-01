// drawBox(green); 
// drawBox() is a custom Grasshopper function and will not work in vanilla JS

function drawBoxes(aString) {
    let colorObject = {a : 'amber', b : 'blue', c : 'cyan', ...}
    for (let element of aString) {
      drawBox(colorObject[element]);
    }
  }

  // replication of the drawbox function outside of grasshopper