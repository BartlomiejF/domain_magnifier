var toolbarHeight = 50;

var div = document.createElement("div");
div.id = "myToolbar";
var checkString = "abcdefghijklmnopqrstuwvxyz.-"
var currentUrl = document.URL.split("/")[2]
var result = "";
for (var letterIndex in currentUrl) {
    if (checkString.includes(currentUrl[letterIndex])) {
        result += currentUrl[letterIndex];
    } else {
        result += "<b style='color:red'>" + currentUrl[letterIndex] + "</b>";
    }
}
div.innerHTML = "<p style='font-size:2.5em; position:absolute; padding:0px; top:0; text-align:center'>domain: " + result + "</p>";

var st = div.style;
st.display = "block";
st.top = "0px";
st.left = "0px";
st.width = "100%";
st.height = toolbarHeight + "px";
st.background = "grey";
st.color = "black";
st.position = "fixed";
st.textAlign = "center";

document.body.style.transform = "translateY(" + toolbarHeight + "px)";
document.documentElement.appendChild(div);