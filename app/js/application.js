// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var currentlySelected, getPoint;
    currentlySelected = null;
    $('.icon').on('click', function(e) {
      $(currentlySelected).removeClass('selected');
      currentlySelected = e.target;
      return $(currentlySelected).addClass('selected');
    });
    getPoint = function(ele, event) {
      var offset;
      offset = $(ele).offset();
      return [event.clientX - offset.left, event.clientY - offset.top];
    };
    $('#canvas').on('click', function(e) {
      var height, point, src, width, x, y;
      if (currentlySelected != null) {
        point = getPoint(this, e);
        width = $(currentlySelected).data('width' || 0);
        height = $(currentlySelected).data('height' || 0);
        x = point[0] - Math.floor(width / 2);
        y = point[1] - Math.floor(height / 2);
        src = currentlySelected.src;
        return $(this).append("<img class='stamp' style='top: " + y + "px; left: " + x + "px;' src='" + src + "'>");
      }
    });
    return $('#clearButton').on('click', function(e) {
      return $('#canvas').html('');
    });
  });

}).call(this);

/*
//@ sourceMappingURL=application.map
*/