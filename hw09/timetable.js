var i, j, k;
var day = ['월', '화', '수', '목', '금'];

var class1 = { name: "모바일응용", day: 0, time: 2, type: "major" }
var class2 = { name: "모바일응용", day: 0, time: 3, type: "major" }

var class3 = { name: "빅데이터처리", day: 1, time: 2, type: "major" }
var class4 = { name: "빅데이터처리", day: 1, time: 3, type: "major" }

var class5 = { name: "알고리즘", day: 1, time: 7, type: "major" }
var class6 = { name: "알고리즘", day: 1, time: 8, type: "major" }

var class7 = { name: "자료구조", day: 2, time: 1, type: "major" }
var class8 = { name: "자료구조", day: 2, time: 2, type: "major" }

var class9 = { name: "웹프로그래밍", day: 3, time: 5, type: "major" }
var class10 = { name: "웹프로그래밍", day: 3, time: 6, type: "major" }

var class11 = { name: "영화속의 철학", day: 2, time: 5, type: "liveralArts" }
var class12 = { name: "영화속의 철학", day: 2, time: 6, type: "liveralArts" }

var classArr = [class1, class2, class3, class4, class5, class6, class7, class8, class9
                , class10, class11, class12];

function colorPicker(type)
{
  if(type == "major")
    return "#ffdcd6";
  else
    return "#e3e3e3";
}

document.write("<table>");
for(i=0;i<=8;i++)
{
  document.write("<tr height='50px'>");
  for(j=0;j<5;j++)
  {
    if(i==0)
      document.write("<td width='100px'>"+day[j]+"</td>");
    else
    {
      for(k=0;k<classArr.length;k++)
        if(classArr[k].day == j && classArr[k].time==i)
        {
          switch(classArr[k].type)
          {
            case "liveralArts":
              document.write("<td style='background-color: #e3e3e3;'>"+classArr[k].name+"</td>");
              break;
            case "major":
              document.write("<td style='background-color: #ffe1db;'>"+classArr[k].name+"</td>")
              break;
            default:
              break;
          }
          break;
        }
      if(k==classArr.length)
        document.write("<td></td>")
    }
  }
  document.write("</tr>");
}
document.write("</table>");