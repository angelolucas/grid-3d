var gui = new dat.GUI({width: 400});

gui.add(control, 'width', 2, 100).onChange(function(){
  transform();
});
gui.add(control, 'height', 2, 100).onChange(function(){
  transform();
});
gui.add(control, 'perspective', 300, 1000).onChange(function(){
  perspective();
});

// Grid X Folder
var gridX = gui.addFolder('Grid X');
gridX.open();

gridX.add(control, 'rotateX', -180, 180).onChange(function(){
  if(control.rotateX > -1 && control.rotateX < 1)
    control.rotateX = 0;

  transform();
});
gridX.add(control, 'rotateY', -180, 180).onChange(function(){
  if(control.rotateY > -1 && control.rotateY < 1)
    control.rotateY = 0;

  transform();
});
gridX.add(control, 'rotateZ', -180, 180).onChange(function(){
  if(control.rotateZ > -1 && control.rotateZ < 1)
    control.rotateZ = 0;

  transform();
});
gridX.add(control, 'layersX', 0, 40).step(1).onChange(function(){
  layersX();
});

// Grid Y Folder
var gridY = gui.addFolder('Grid Y');
gridY.add(control, 'layersY', 0, 40).step(1).onChange(function(){
  layersY();
});

gridY.open();
