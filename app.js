
//initialize the news parameter
let source = 'bbc-news';
let apiKey = '6e95b7df65b84720ad3d436de6d9f70a';
//grab the new container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        let newsHtml = "";

        articles.forEach(function(element,index){
            console.log(element)
        

            let news = `<div class="card">
<div class="card-header" id="heading${index}">
    <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
            aria-expanded="true" aria-controls="#collapse${index}">
            <b>Breaking News</b> ${index+1}: ${element["title"]}
        </button>
    </h5>
</div>

<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
    <div class="card-body">
     ${element["content"]}. <a href = ${element["url"]} target="-blank">Read more</a>
    </div>
</div>
</div>
</div>`

newsHtml += news
});
        

        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('Some error occur');
    }
}

xhr.send();
