var val = ""
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  var style = window.getComputedStyle(ev.target, null);
  var topPos = style.getPropertyValue("top");
  var leftPos = style.getPropertyValue("left");
  if(topPos == "auto") topPos = 0;
  if(leftPos == "auto") topPos = 0;
  console.log(topPos + " " + leftPos)
  var data = ev.target.id + "," + topPos + "," + leftPos
  ev.dataTransfer.setData("text", data);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text").split(',');
  console.log(data)
  ev.target.appendChild(document.getElementById(data[0]));
 // ev.target.innerHTML = document.getElementById(data).innerHTML;
 var item = document.getElementById(data[0]);
 console.log(data[1])
 console.log(data[2])
 item.style.left = (ev.clientX + 'px');
 item.style.top = (ev.clientY + 'px');

 console.log(item.style.left)
 console.log(item.style.top)

  document.getElementById(data[0].split('-')[0] + '-setter').style["display"] = "block";
  return false;
}

function getInfo()
{
	return val;
}
