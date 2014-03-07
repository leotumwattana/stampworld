$ ->

  currentlySelected = null

  $('.icon').on 'click', (e) ->
    $(currentlySelected).removeClass 'selected'
    currentlySelected = e.target
    $(currentlySelected).addClass 'selected'

  getPoint = (ele, event) ->
    offset = $(ele).offset()
    [event.clientX - offset.left, event.clientY - offset.top]

  $('#canvas').on 'click', (e) ->
    if currentlySelected?
      
      # get point relative to #canvas
      point = getPoint(this, e)

      width = $(currentlySelected).data 'width' || 0
      height = $(currentlySelected).data 'height' || 0

      x = point[0] - Math.floor(width / 2)
      y = point[1] - Math.floor(height / 2)

      src = currentlySelected.src
      $(this).append "<img class='stamp' style='top: #{y}px; left: #{x}px;' src='#{src}'>"

  $('#clearButton').on 'click', (e) ->
    $('#canvas').html ''