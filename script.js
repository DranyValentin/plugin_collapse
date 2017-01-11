'use strict'

var $ul = document.createElement('ul')
var $li

var boolShowCollapse = true

var initialHeight = 0
var currentHeight = initialHeight
var maxHeight = 100
var stepHeight = 1
var requestAnimationFrameHeight

for (var i = 0; i < 10; i++)
{
  $li = document.createElement('li')
  $li.textContent = 'Позиция №' + i

  $ul.appendChild($li)
}

collapse.appendChild($ul)
collapse.setAttribute('style', 'display: none')

btnCollapse.addEventListener('click', function(event)
{
  cancelAnimationFrame(requestAnimationFrameHeight)

  if ( boolShowCollapse )
  {
    boolShowCollapse = false
    collapse.setAttribute('style', 'display: block; height: ' + currentHeight + 'px;')

    requestAnimationFrameHeight = requestAnimationFrame(doAnimShowCollapse)
  }
  else
  {
    boolShowCollapse = true
    collapse.setAttribute('style', 'display: block; height: ' + currentHeight + 'px;')

    requestAnimationFrameHeight = requestAnimationFrame(doAnimHideCollapse)
  }

  event.preventDefault()
}, false)

function doAnimShowCollapse()
{
  collapse.setAttribute('style', 'display: block; height: ' + currentHeight + 'px;')

  if ( currentHeight >= 100 ) // Statement, when need stop
  {

      cancelAnimationFrame(requestAnimationFrameHeight);
      return;
  }

  currentHeight = currentHeight + stepHeight

  requestAnimationFrameHeight = requestAnimationFrame(doAnimShowCollapse)
}

function doAnimHideCollapse()
{
  collapse.setAttribute('style', 'display: block; height: ' + currentHeight + 'px;')

  if ( currentHeight <= 0 ) // Statement, when need stop
  {
    collapse.setAttribute('style', 'display: none; height: ' + currentHeight + 'px;')
      cancelAnimationFrame(requestAnimationFrameHeight);
      return;
  }

  currentHeight -= stepHeight

  requestAnimationFrameHeight = requestAnimationFrame(doAnimHideCollapse)
}
