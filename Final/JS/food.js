function dEI(elementID)
{
  return document.getElementById(elementID);
}

function openLayer(IdName, tpos, lpos)
{
  var pop = dEI(IdName);
  pop.style.top = tpos + "%";
  pop.style.left = lpos + "%";
  pop.style.display = "block";

  var wrap = dEI("wrapper");
  var reservation = document.createElement("div");
  reservation.setAttribute("id", "deemed");
  wrap.appendChild(reservation);
}

function closeLayer( IdName )
{
  var pop = dEI(IdName);
  pop.style.display = "none";
  var clearEl=parent.dEI("deemed");
  var momEl = parent.dEI("wrapper");
  momEl.removeChild(clearEl);
}