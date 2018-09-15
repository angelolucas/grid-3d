let dragging = false;

const rotate = ({ object, dragArea }) => {
  dragArea.onmousedown = () => {
    dragging = true;
  };
  dragArea.onmouseup = () => {
    dragging = false;
  };
  dragArea.onmousemove = () => {
    if (dragging) console.log('onmousemove');
  };
};

export default rotate;
