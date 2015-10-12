console.log('hello');

var element = document.getElementById('test1');
console.log(element.innerHTML)
element.innerHTML = 'New Shiz'
console.log(element.innerHTML)

var udacityElem = document.getElementById('udacity');
udacityElem.innerHTML = udacityElem.innerHTML.replace('fine', 'easy ');
$('#udacity').append(udacityElem.innerHTML);

//document.getElementById("test1").innerHTML = "new BS";