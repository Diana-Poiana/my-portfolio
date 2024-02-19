


const currentUrl = window.location.href;
console.log(currentUrl);
const parts = currentUrl.split("/");
console.log(parts);
const address = parts[parts.length - 1];
console.log(address);

const menuList = document.querySelector('.header__link-list');


const colorArray = ['#0066ff', '#e37218', '#e73d71'];

function handleHover(event, isHovering) {
  if (event.target.tagName === 'A') {
    if (isHovering) {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      const randomColor = colorArray[randomIndex];
      event.target.style.color = randomColor;
    } else {
      event.target.style.color = '#000000';
    }
  }
}




// async function fetchAllStories() {
//   try {
//     const response = await fetch('https://api.storyblok.com/v2/cdn/stories?version=draft&token=LeefeUkJwy0vrTrfJ8rhUAtt&cv=1708350835');
//     const data = await response.json();
//     console.log(data);
//     const stories = data.stories;
//     console.log(stories);
//     populateHtml(stories);
//     return stories;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

// async function populateHtml() {
//   const story = await fetchAllStories();
//   console.log(story.stories);
//   // const { title, description, image } = story;
//   // console.log(title, description, image.filename);
//   // aboutMeTitle.textContent = title;
//   // aboutMeText.textContent = description;
//   // aboutMePortrait.src = image.filename;
// }

// function populateHtml(content) {
//   console.log(content);

//   content.forEach((page) => {
//     console.log(page);
//   })
// }

// fetchAllStories();

function checkIfPageExists() {
  const validRoutes = ['/index.html', '/my-portfolio.html', '/page-contacts.html', '/page-portfolio.html', '/page-resume.html', '/page-blog.html', '/page-article.html'];
  const path = window.location.pathname;
  if (!validRoutes.includes(path)) {
    window.location.href = '/404.html';
  }
}

window.addEventListener('DOMContentLoaded', checkIfPageExists);