import self from "../img/perfil.jpg"
export let colors = ['#004E9A', ' #428CD4'];

export const info = {
    firstName: "SEMINARIO DE SISTEMAS",
    lastName: "SIS-719",
    position: "a systems engineering student",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🍕',
            text: 'Pizza planeta'
        },
        {
            emoji: '🌎',
            text: 'Con sede en la ciudad de Potosi'
        },
        {
            emoji: "👨‍💻",
            text: "Estudiante de Ingenieria de Sistemas"
        },
        {
            emoji: "📧",
            text: "sis719@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github"
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter"
        }

    ],
    bio: ' Hello! I am Edson. I am a Systems Engineering student. I study at U.A.T.F, enjoy long walks with friends, and believe that artificial intelligence will inevitably rule us all one day. Put Study Desire to Matter!',
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'storybook', 'sass'],
            exposedTo: ['nodejs', 'laravel']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'play',
            emoji: '⚽'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ]
}