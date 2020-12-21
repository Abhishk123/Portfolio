import android from '../../assets/projects_images/android.jpeg'
import php from '../../assets/projects_images/php.jpeg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import port from '../../assets/projects_images/port.png'



const data_projects = [
    {
        name: 'VTU GPA Calculator',
        image: android,
        deployed_url: 'https://play.google.com/store/apps/details?id=com.learncodewithabhishek.vtugpacalculate',
    
        category: ['react.js']
    },

    {
        name: 'Agro School Management System',
        image: php,

        category: ['node', 'socket.io', 'react']
    },
    {
        name: 'Abhishek Portfolio',
        image: port,
        deployed_url: 'https://abhishekurscj.netlify.app/',
        github_url: 'https://github.com/Abhishk123/Portfolio',
        category: ['node.js', 'mongoDB', 'react.js']
    }
]

export default data_projects;