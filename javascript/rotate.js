var Rotate = {
  deg: {
    x: 45,
    z: 45
  },
  ratio: {
    x: null,
    y: null,
    z: null
  },
  speedRatio: null,
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

  // Vertical Rotation
  var vertical = function(RotateDegree) {
    // Keep degrees from 0˚ to 360˚
    if (RotateDegree > 360) {
      Rotate.deg.x -= 360;
    } else if (RotateDegree < 0) {
      Rotate.deg.x += 360;
    }

    var verticalQuadrant = quadrantPercent(RotateDegree);

    // Valor Z Vertical
    if (RotateDegree <= 90) {
      Rotate.ratio.z = 1 - verticalQuadrant;
      Rotate.speedRatio = verticalQuadrant;
    } else if (RotateDegree > 90 && RotateDegree <= 180) {
      Rotate.ratio.z = -verticalQuadrant;
      Rotate.speedRatio = 1 - verticalQuadrant;
    } else if (RotateDegree > 180 && RotateDegree <= 270) {
      Rotate.ratio.z = -(1 - verticalQuadrant);
      Rotate.speedRatio = -verticalQuadrant;
    } else {
      Rotate.ratio.z = verticalQuadrant;
      Rotate.speedRatio = -(1 - verticalQuadrant);
    }
  };

  // Horizontal Rotation
  var horizontal = function(RotateDegree) {
    if (RotateDegree > 360) {
      Rotate.deg.z -= 360;
    } else if (RotateDegree < 0) {
      Rotate.deg.z += 360;
    }

    var horizontalQuadrant = quadrantPercent(RotateDegree);

    // Valores X e Y Horizontal
    if (RotateDegree <= 90) {
      Rotate.ratio.x = horizontalQuadrant;
      Rotate.ratio.y = 1 - horizontalQuadrant;
    } else if (RotateDegree > 90 && RotateDegree <= 180) {
      Rotate.ratio.x = 1 - horizontalQuadrant;
      Rotate.ratio.y = -horizontalQuadrant;
    } else if (RotateDegree > 180 && RotateDegree <= 270) {
      Rotate.ratio.x = -horizontalQuadrant;
      Rotate.ratio.y = -(1 - horizontalQuadrant);
    } else {
      Rotate.ratio.x = -(1 - horizontalQuadrant);
      Rotate.ratio.y = horizontalQuadrant;
    }
  };

  // Apply CSS Transform
  var apply = function() {
    selector.container.css(
      "transform",
      "rotateX(" + Rotate.deg.x + "deg) rotateZ(" + Rotate.deg.z + "deg)"
    );
  };

  // Initial values
  vertical(Rotate.deg.x);
  horizontal(Rotate.deg.z);
  apply();
  $("body").addClass("init");

  // On Mouse drag
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

      if (deltaX) {
        horizontal(Rotate.deg.z);
      }

      if (deltaY) {
        vertical(Rotate.deg.x);
      }

      apply();
    });

    selector.general.on("mouseup", function(e) {
      $(this).off("mousemove");
    });
  });
};

$(document).ready(function() {
  Rotate.function();
});
