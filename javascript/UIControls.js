var gui = new dat.GUI({width: 400});

gui.add(control, 'width', 2, 100).onChange(function(){
  styleGridX();
});
gui.add(control, 'height', 2, 100).onChange(function(){
  styleGridX();
});
gui.add(control, 'perspective', 300, 1000).onChange(function(){
  perspective();
});

// Grid X Folder
var gridX = gui.addFolder('Grid X');
gridX.open();

gridX.add(control.gridX, 'rotateX', -180, 180).onChange(function(){
  if(control.gridX.rotateX > -1 && control.gridX.rotateX < 1)
    control.gridX.rotateX = 0;

  styleGridX();
});
gridX.add(control.gridX, 'rotateY', -180, 180).onChange(function(){
  if(control.gridX.rotateY > -1 && control.gridX.rotateY < 1)
    control.gridX.rotateY = 0;

  styleGridX();
});
gridX.add(control.gridX, 'rotateZ', -180, 180).onChange(function(){
  if(control.gridX.rotateZ > -1 && control.gridX.rotateZ < 1)
    control.gridX.rotateZ = 0;

  styleGridX();
});
gridX.add(control.gridX, 'length', 0, 20).step(1).onChange(function(){
  Xlength();
});

// Grid Y Folder
var gridY = gui.addFolder('Grid Y');

gridY.add(control.gridY, 'rotateX', -180, 180).onChange(function(){
  if(control.gridY.rotateX > -1 && control.gridY.rotateX < 1)
    control.gridY.rotateX = 0;

  styleGridY();
});
gridY.add(control.gridY, 'rotateY', -180, 180).onChange(function(){
  if(control.gridY.rotateY > -1 && control.gridY.rotateY < 1)
    control.gridY.rotateY = 0;

  styleGridY();
});
gridY.add(control.gridY, 'rotateZ', -180, 180).onChange(function(){
  if(control.gridY.rotateZ > -1 && control.gridY.rotateZ < 1)
    control.gridY.rotateZ = 0;

  styleGridY();
});
gridY.add(control.gridY, 'length', 0, 20).step(1).onChange(function(){
  Ylength();
});

gridY.open();
