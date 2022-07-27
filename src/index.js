const api_key = 'api_key=dzf1M8K39WbL5rLhNE4FnIA9vi7ydJJtU5SKBpCQ';
const APIurl ='https://api.nasa.gov/planetary/apod?';
// https://api.nasa.gov/planetary/apod?date=2022-07-25&api_key=dzf1M8K39WbL5rLhNE4FnIA9vi7ydJJtU5SKBpCQ

const url_day_pic = `${APIurl}${api_key}`
var data;

async function fetchData(url) {
    const response = await fetch(url)
    console.log('responeuesta',response)
    data = await response.json()
    return data; 
};

async function loadPicture() {
    const title = document.createElement('p');
    const descriptionArticlesContainer = document.createElement('div');
    const description = document.createElement('p');
    const datePiture = document.createElement('p');
    const containerImg = document.createElement('div');
    const imgDay = document.createElement('img'); 
    imgDay.className = 'img-article';
    containerImg.className = 'front';
    title.className = 'title-article';
    descriptionArticlesContainer.className = 'description-articles-container';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = ('back');
    data = await fetchData(url_day_pic);
    ;
    if (data.media_type === 'image') {
        description.innerHTML = data.explanation;
        datePiture.innerHTML = data.date;
        title.innerHTML = data.title;
        console.log(data.url)
        imgDay.src = data.url;
        imgDay.className = 'img-article';
    } else {
       const data2 = await fetchData('https://api.nasa.gov/planetary/apod?date=2022-07-24&api_key=dzf1M8K39WbL5rLhNE4FnIA9vi7ydJJtU5SKBpCQ')
        console.log('No picture today');
        description.innerHTML = data2.explanation;
        datePiture.innerHTML = data2.date;
        title.innerHTML = data2.title;
        console.log(data2.url);
        imgDay.src = data2.url;
        imgDay.className = 'img-article';
    }
    // container.appendChild(title);
    descriptionContainer.appendChild(description);
    // container.appendChild(datePiture);
    containerImg.appendChild(imgDay);
    descriptionArticlesContainer.appendChild(title);
    containerImg.appendChild(descriptionArticlesContainer)
    container_article.appendChild(containerImg);
    const titleNasaPicToday = document.createElement('h2');
    titleNasaPicToday.innerHTML = "Foto del dia de la nasa"
    container_article.appendChild(titleNasaPicToday);
    container_article.appendChild(descriptionContainer);
}

const container_article = document.getElementById('nasaDayPic')
;
// const container = document.createElement('div');
// container.className = 'front';
loadPicture();
// container_article.appendChild(container);


