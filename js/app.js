// drawBox(green); 
// drawBox() is a custom Grasshopper function and will not work in vanilla JS

function drawBoxes(foo) {
    let colorObject = {a : 'amber', b : 'blue', c : 'cyan'}
    for (let element of foo) {
      drawBox(colorObject[element]);
    }
  }

  drawBoxes(foo);
  // replication of the drawbox function outside of grasshopper