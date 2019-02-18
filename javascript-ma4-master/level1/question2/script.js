fetch('https://jsonplaceholder.typicode.com/todos')
	.then(function(result){
		return result.json()
	})
	.then(function(res){
		createCards(res);
	})
	.catch(err => console.log(err))

function createCards(result){
	for (var i = 0; i < result.length; i++){
		var divElem = document.createElement("div");
		divElem.style.float = "left";
		divElem.style.width = "150px";
		divElem.style.height = "263px";
		divElem.style.margin = "4px";


		var imgElem = document.createElement("img");
		var taskDone = result[i].completed;

		if (taskDone == true){
			imgElem.src = "\person.jpg";
			divElem.style.backgroundColor = "green";

		}
		else{
			imgElem.src = "\person.jpg";
			divElem.style.backgroundColor = "red";

		}

		imgElem.style.width = "80%";
		imgElem.style.padding = "15px";
		imgElem.style.paddingBottom = "5px";
		divElem.appendChild(imgElem);
		var divInner = document.createElement("div");
		divInner.class = "container";
		divElem.appendChild(divInner);
		var titleElem = document.createElement("h4");
		titleElem.style.margin = "15px";
		titleElem.style.marginTop = "0px";
		divInner.appendChild(titleElem);
		var titleTxt = result[i].title;
		var title = document.createTextNode(titleTxt);
		titleElem.appendChild(title);
		document.body.appendChild(divElem);
	}
 }