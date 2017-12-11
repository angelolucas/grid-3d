var Rotate = {
  deg: {
    x: 45,
    z: 225
  },
  ratio: {
    x: -0.5,
    y: -0.5,
    z: 0
  },
  function: null
};

Rotate.function = function() {
  var selector = {
    general: $(".general"),
    container: $(".object-container")
  };

  /*
    Quadrant Percent.
    Porcentagem do grau com relação ao quadrante.
    Retorna valor de 0 a 1

    exemplos:
    45˚ = 50% do primeiro quadrante (0-90˚),
    resultado = 0.500

    120˚ = 33.33% do segundo quadrante (90-180˚)
    resultado 0.333
  */
  var quadrantPercent = function(degree) {
    var complete = degree / 90;
    var decimal = complete - Math.floor(complete);
    var fixed = decimal.toFixed(3);

    return fixed;
  };

  selector.general.on("mousedown ", function(e) {
    var prevX = e.pageX;
    var prevY = e.pageY;

    selector.general.on("mousemove", function(e) {
      var deltaX = prevX - e.pageX;
      var deltaY = prevY - e.pageY;

      prevX = e.pageX;
      prevY = e.pageY;

      Rotate.deg.x += deltaY * 100 / 360;
      Rotate.deg.z += deltaX * 100 / 360;

      // Keep degrees from 0˚ to 360˚
      if (Rotate.deg.x > 360) {
        Rotate.deg.x -= 360;
      } else if (Rotate.deg.x < 0) {
        Rotate.deg.x += 360;
      }

      if (Rotate.deg.z > 360) {
        Rotate.deg.z -= 360;
      } else if (Rotate.deg.z < 0) {
        Rotate.deg.z += 360;
      }

      var horizontalQuadrant = quadrantPercent(Rotate.deg.z);
      var verticalQuadrant = quadrantPercent(Rotate.deg.x);

      // Valores X e Y Horizontal
      if (Rotate.deg.z <= 90) {
        Rotate.ratio.x = horizontalQuadrant;
        Rotate.ratio.y = 1 - horizontalQuadrant;
      } else if (Rotate.deg.z > 90 && Rotate.deg.z <= 180) {
        Rotate.ratio.x = 1 - horizontalQuadrant;
        Rotate.ratio.y = -horizontalQuadrant;
      } else if (Rotate.deg.z > 180 && Rotate.deg.z <= 270) {
        Rotate.ratio.x = -horizontalQuadrant;
        Rotate.ratio.y = -(1 - horizontalQuadrant);
      } else {
        Rotate.ratio.x = -(1 - horizontalQuadrant);
        Rotate.ratio.y = horizontalQuadrant;
      }

      // Valor Z Vertical
      if (Rotate.deg.x <= 90) {
        Rotate.ratio.z = 1 - verticalQuadrant;
      } else if (Rotate.deg.x > 90 && Rotate.deg.x <= 180) {
        Rotate.ratio.z = -verticalQuadrant;
      } else if (Rotate.deg.x > 180 && Rotate.deg.x <= 270) {
        Rotate.ratio.z = -(1 - verticalQuadrant);
      } else {
        Rotate.ratio.z = verticalQuadrant;
      }

      selector.container.css(
        "transform",
        "rotateX(" + Rotate.deg.x + "deg) rotateZ(" + Rotate.deg.z + "deg)"
      );
    });

    selector.general.on("mouseup", function(e) {
      $(this).off("mousemove");
    });
  });
};

$(document).ready(function() {
  Rotate.function();
});
