// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'TODO LIST APPLICATION',
            skills: ['HTML','CSS','JavaScript'],
            description: `This project focuses on building a simple but effective To-Do list application using HTML, CSS, and JavaScript. The app allows users to add, edit, and delete tasks, providing basic task management functionality. This project demonstrates my skills in manipulating the DOM and handling user input efficiently.`,
            image: './TODO_APP.png',
            link: 'https://github.com/cjanani/Todo-project',
            skilldemo :`
            JavaScript for interactive task management
            LocalStorage for persisting data
            HTML and CSS for structure and styling
            Event handling and DOM manipulation`,
            achievement : `Successfully completed this project and learned how to build a fully interactive application from scratch, improving my understanding of JavaScript’s capabilities for real-world applications. The experience also reinforced the importance of responsive design and data persistence.`,
        },
        {
            title: 'FRONT-END DEVELOPMENT WITH REACT',
            skills: ['HTML','CSS','JavaScript','React'],
            description: `This project involved building a sign-up page using React and hooks, implementing form validation, and enhancing user experience. I applied key front-end technologies, including HTML, CSS, and JavaScript, to create an interactive and user-friendly interface. Using React hooks (such as useState and useEffect), I ensured efficient state management and optimized the user flow.`,
            image: './WEB_APP.png',
            link: 'https://github.com/cjanani/reactweb',
            skilldemo :`React (hooks for state management and effects)
            HTML, CSS, JavaScript for structure and styling
            Form validation and error handling
            Responsive web design for mobile-first layout`,
            achievement : `Successfully completed this project, showcasing my ability to build and style interactive forms with React. It demonstrates my understanding of front-end development principles, including state management, validation, and responsive design, laying a strong foundation for my transition into a junior front-end developer role. `,     
        },
          
        {
            title: 'PRODUCT DISPLAY APPLICATION',
            skills: ['HTML','CSS','JavaScript','Fetch API'],
            description: `This project involves building a web application that displays products fetched from a dummy JSON file using the JavaScript Fetch API. The application demonstrates how to handle asynchronous requests and display data dynamically. I used JavaScript to fetch product details, process the data, and display it on the web page. The project highlights my ability to work with APIs and process JSON data.`,
            image: './FETCH_API.png',
            link: 'https://github.com/cjanani/Fetch-API',
            skilldemo :`JavaScript Fetch API for asynchronous data fetching
            DOM manipulation for rendering fetched data
            Error handling and user notifications
            HTML and CSS for basic web layout and styling`,
            achievement : `Successfully completed this project and learned to work with external data and APIs, refining my ability to use asynchronous JavaScript and manage real-time data retrieval on web pages.`,
            
        },

        {
            title: 'DYNAMIC WEB PAGE WITH DOM MANIPULATION',
            skills: ['HTML','CSS','JavaScript','DOM'],
            description: `In this project, I created a dynamic web page where content can be modified interactively using JavaScript DOM manipulation. The page allows users to add, remove, and edit elements directly, demonstrating dynamic content rendering on a website. I used JavaScript to manipulate the DOM based on user input and updates, applying HTML and CSS to maintain the visual structure.`,
            image: '',
            link: 'https://github.com/cjanani/dynamic-content',
            skilldemo :`JavaScript DOM manipulation for interactivity
            Event handling for user input
            HTML and CSS for layout and responsive design
            Understanding of dynamic content rendering in web development`,
            achievement : `Successfully completed this project and learned to deepen my understanding of JavaScript’s power in manipulating the DOM, making web pages more interactive and engaging for users.`,
        }
    ];

    const projectSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.target = "blank";

        const projectTitleLink = document.createElement('img');
        projectTitleLink.src = './link.png';

        const projectTitle = document.createElement('h4');
        projectTitle.textContent = project.title;
  
        projectTitleLink.setAttribute('height', '15px');
        projectTitleLink.setAttribute('width', '15px');
        
        projectTitle.appendChild(projectTitleLink);
        projectLink.appendChild(projectTitle);
        projectDiv.appendChild(projectLink);
        
        const projectDescTitle = document.createElement('h4');
        projectDescTitle.textContent = 'Description';
        projectDiv.appendChild(projectDescTitle);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);

        const projectSkillDemoTitle = document.createElement('h4');
        projectSkillDemoTitle.textContent = 'Skills Demonstrated';
        projectDiv.appendChild(projectSkillDemoTitle);

        const projectSkillDemo = document.createElement('p');
        projectSkillDemo.textContent = project.skilldemo;
        projectDiv.appendChild(projectSkillDemo);

        const projectAchievementTitle = document.createElement('h4');
        projectAchievementTitle.textContent = 'Achievement';
        projectDiv.appendChild(projectAchievementTitle);

        const projectAchievement = document.createElement('p');
        projectAchievement.textContent = project.achievement;
        projectDiv.appendChild(projectAchievement);

        // const projectImage = document.createElement('img');
        // projectImage.className = "projectImage";
        // projectImage.src = project.image;
        // projectImage.setAttribute('height', '300px');
        // projectImage.setAttribute('width', '300px');
        // projectDiv.appendChild(projectImage);
        
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