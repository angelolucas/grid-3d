let dragging = false;

const rotate = ({ object, dragArea }) => {
  dragArea.onmousedown = e => {
    const startX = e.pageX;
    const startY = e.pageY;

    dragging = true;

    dragArea.onmousemove = e => {
      if (dragging) {
        const measureFromStartX = e.pageX - startX;
        const measureFromStartY = e.pageY - startY;

        console.log(measureFromStartX, measureFromStartY);
      }
    };
  };
  dragArea.onmouseup = () => {
    dragging = false;
  };
};

export default rotate;
