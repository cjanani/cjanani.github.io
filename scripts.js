// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'TODO APP',
            description: `The TODO App is a simple, user-friendly application built as part of my front-end development journey. 
            It allows users to efficiently manage their tasks by adding, editing, and deleting items from a dynamic task list. 
            Developed using HTML, CSS, and JavaScript, the app incorporates features like real-time updates and intuitive user interactions to enhance productivity.`,
            image: './TODO_APP.png',
            link: 'https://github.com/cjanani/Todo-project',
            skills: ['HTML','CSS','JavaScript'],
        },
        {
            title: 'REACT WEB APP',
            description: `This project's aim is to develop a React learning portal with HTML, CSS, JS and React using React state variables and components to manage state and store data dynamically. 
            It also include search features and dynamic menu configuration features. Material UI is used to build the Menu/SubMenu interface.`,
            image: './WEB_APP.png',
            link: 'https://github.com/cjanani/reactweb',
            skills: ['HTML','CSS','JavaScript','React'],
        },
          {
            title: 'PRODUCT PAGE USING Fetch-API',
            description: `A simple application to display products fetched from dummy JSON URL (https://dummyjson.com/docs/products) using Javascript Fetch API.`,
            image: './FETCH_API.png',
            link: 'https://github.com/cjanani/Fetch-API',
            skills: ['HTML','CSS','JavaScript'],
        }
    ];

    const projectSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.target = "blank";

        const projectTitle = document.createElement('h4');
        projectTitle.textContent = project.title;

        projectLink.appendChild(projectTitle);
        projectDiv.appendChild(projectLink);
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);


        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.setAttribute('height', '300px');
        projectImage.setAttribute('width', '300px');
        projectDiv.appendChild(projectImage);
        
        const projectUlist = document.createElement('ul');
        // projectUlist.classList.add('skills');
        project.skills.forEach(skill => {
        const projectList = document.createElement('li');
        projectList.innerHTML = skill;
        projectUlist.appendChild(projectList);
        projectDiv.appendChild(projectUlist);
        });
    

        projectSection.appendChild(projectDiv);
    });
}); 