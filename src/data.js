export const CVData = {
    personalData: {
        name: 'Carlos Adolfo Ruiz Rodríguez',
        title: 'DevOps Engineer',
        image: `${window.location.href}/logo192.png`,
        contacts: [
            { type: 'email', value: 'karlosarr@gmail.com' },
            { type: 'linkedin', value: 'linkedin.com/in/karlosarr' },
            { type: 'twitter', value: 'twitter.com/karlosarr' },
            { type: 'github', value: 'github.com/karlosarr' }
        ]
    },
    sections: [
        {
            type: 'text',
            title: 'Career Profile',
            content: 'When I was child, I always want to be a developer. I think I am now. Culpa proident ad officia minim Lorem sint excepteur irure culpa nisi aliquip nostrud.Laborum voluptate nostrud fugiat occaecat proident veniam excepteur pariatur amet ex sit.Anim aliquip do in commodo adipisicing.Nulla adipisicing nisi enim ullamco sunt veniam.Ullamco labore sunt Lorem veniam id et Lorem magna eiusmod aute. Aliquip minim est consectetur anim mollit aliqua ex elit do et nulla do. Cupidatat ad sunt cillum sint consectetur sunt cillum eiusmod ad esse aliqua. Aute anim elit amet in duis aute ipsum deserunt qui deserunt officia excepteur veniam. Et laboris nostrud est ipsum nulla fugiat deserunt magna velit irure. Ullamco duis ut magna ea tempor enim in ipsum.',
            icon: 'usertie'
        },
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
                {
                    title: 'Computer Engineering',
                    authority: 'Universidad Politécnica de Sinaloa',
                    authorityWebSite: 'http://www.upsin.edu.mx/',
                    rightSide: '2009 - 2013'
                }
            ]
        },
        {
            type: 'experiences-list',
            title: 'Experiences',
            description: 'Optional',
            icon: 'archive',
            items: [
                {
                    title: 'Cloud Infrastructure Architect',
                    company: 'Personicore',
                    description: 'I\'m working as a lead developer yeeeey!',
                    companyWebSite: 'https://personicore.com/',
                    companyMeta: 'Analitics',
                    datesBetween: '2020-07 - Present',
                    descriptionTags: ['Google Cloud', 'DevOps', 'Scrum', 'Jenkins', 'Azure DevOps']
                },
                {
                    title: 'DevOps Engineer',
                    company: 'Cinépolis',
                    description: 'I\'m using ReactJS and working as a front-end developer',
                    companyWebSite: 'https://cinepolis.com/',
                    companyMeta: 'Cinema',
                    datesBetween: '2019-02 - 2020-07',
                    descriptionTags: ['Azure', 'AWS', 'DevOps', 'Scrum', 'Jenkins', 'Azure DevOps', 'Vista', 'CI/CD', 'SonarQube', 'Kubernetes']
                },
                {
                    title: 'Full Stack Developer',
                    company: 'Kichink',
                    description: 'I was warming up.',
                    companyWebSite: 'http://www.kichink.com',
                    companyMeta: 'Ecommerce',
                    datesBetween: '11/2017 - 12/2018',
                    descriptionTags: ['PHP', 'DevOps', 'Scrum', 'NodeJs', 'Angular', 'Docker', 'MongoDB']
                },
                {
                    title: 'Software Architect',
                    company: 'Coppel',
                    description: 'I was warming up.',
                    companyWebSite: 'http://www.coppel.com',
                    companyMeta: 'Store',
                    datesBetween: '2014-12 - 2017-11',
                    descriptionTags: ['C++', 'Biometrics', 'Andrid', 'Java', 'PostgreSQL', 'CMMI']
                }
            ]
        },
        {
            type: 'projects-list',
            title: 'Projects',
            description: 'Optional',
            icon: 'tasks',
            groups: [
                {
                    sectionHeader: 'Company Name',
                    description: 'Optional',
                    items: [
                        { title: 'Project', projectUrl: 'optional', description: 'Optional' },
                        { title: 'Project', projectUrl: 'optional', description: 'Optional' },
                        { title: 'Project', projectUrl: 'optional', description: 'Optional' }
                    ]
                }
            ]
        },
        {
            type: 'common-list',
            title: 'Conferences & Certificates',
            description: '',
            icon: 'comments',
            items: [
                {
                    title: 'OpenHack DevOps / 2020',
                    authority: 'Microsoft OpenHack',
                    authorityMeta: 'Certified',
                    authorityWebSite: 'https://openhack.microsoft.com/'
                },
                {
                    title: 'Azure Fundamentals / 2020',
                    authority: 'Microsoft Certified',
                    authorityMeta: 'Certified',
                    authorityWebSite: 'https://docs.microsoft.com/en-us/learn/certifications/exams/az-900'
                },
                {
                    title: 'Azure DevOps / 2020',
                    authority: 'Microsoft Certified',
                    authorityMeta: 'Curso',
                    authorityWebSite: 'https://docs.microsoft.com/en-us/learn/certifications/exams/az-400'
                }
            ]
        },
        {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: [
                {
                    authority: 'Spanish',
                    authorityMeta: 'Native'
                },
                {
                    authority: 'English',
                    authorityMeta: 'Beginner'
                }
            ]
        },
        {
            type: 'tag-list',
            title: 'Skills Proficiency',
            icon: 'rocket',
            items: ['DevOps', 'Javascript', 'Google Cloud', 'MongoDB', 'Scrum', 'Google Cloud', 'Azure DevOps', 'Jenkins', 'Docker']
        },
        {
            type: 'tag-list',
            title: 'Hobies & Interests',
            icon: 'cubes',
            items: ['Videogames', 'swim', 'go to the beach']
        }
    ]
}