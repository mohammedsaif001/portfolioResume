const projects = [
    {
        id: 1,
        icon: `uil-web-grid`,
        title: `Professional Experience`,
        modalTitle: `Professional Experience at Nviera Technologies Pvt Ltd`,
        descriptionBulletin: [
            `     Technical proficiency in creating and modifying software in
                                a quick-paced, agile setting while utilising the most recent
                                infrastructure and development approaches.`,
            `  Relentlessly enhanced software quality with a sharp eye for
                                reusability, security, testability, and performance while
                                iterating on the development process to enable new
                                functionality.`,
            `Hands-on experience with the React JS Framework.`,
            `   Excellent grasp and knowledge of GIT for version control.`,
        ],
    },

    {
        id: 2,
        icon: `uil-globe`,
        title: `Google Clone`,
        modalTitle: `Google Clone`,
        descriptionBulletin: [
            `Developed a responsive Google Clone using Next.js 13 and Tailwind CSS, with a focus on server-side rendering
(SSR).`,
            `Implemented efficient API usage, dynamic meta-data generation, and pagination for improved user experience.`,
            `Showcased proficiency in Next.js, Tailwind CSS, and responsive web development principles.`,
            `Successfully deployed the application to showcase the project’s functionalities`,
        ],
        link: `https://google-clone-mohammedsaif001.vercel.app/`,
    },
    {
        id: 3,
        icon: `uil-music`,
        title: `Spotify Clone`,
        modalTitle: `Spotify Clone`,
        descriptionBulletin: [
            `Responsive Spotify Clone with full control over song playback, pause, and volume for a seamless music experience.`,
            `Enhanced user convenience with access to and playback of songs from saved playlists.`,
            `Secure user authentication powered by NextAuth, ensuring data privacy and protection`,
            `Implementation of middleware for user authentication and token validation, ensuring data integrity and secure access to features.`,
            `Utilized custom hooks and debouncing with useCallback for code reusability and improved application
performance.`,
            `To interact with the Spotify Web API in this project, users need a valid Spotify instance running on their local machine. This local connection is crucial for authenticating users through the API. Make sure you have the Spotify desktop or mobile app installed and logged in before proceeding.`,
            `Once the application is running and a song is playing in your local Spotify app, you can fully control playback, adjust volume, and access your saved playlists through the clone.`,
        ],
        link: ` https://spotify-clone-next12-mohammedsaif001.vercel.app/`,
    },
    {
        id: 4,
        icon: `uil-bitcoin`,
        title: `Crypto Tracker`,
        modalTitle: `Crypto Tracker`,
        descriptionBulletin: [
            `Created a real-time and historical cryptocurrency price tracking web application using ReactJS, CSS, and
Chart.js npm package.`,
            `Demonstrated excellent frontend skills by implementing responsive design and ensuring smooth user interactions,
delivering a user-friendly and data-rich experience for crypto enthusiasts.`,
        ],
        link: `https://mohammedsaif001.github.io/cryptoTracker/`,
    },
    {
        id: 5,
        icon: `uil-arrow `,
        title: `Medical Image \n
                            Denoising`,
        modalTitle: `Medical Image Denoising`,
        descriptionBulletin: [
            `  This final-year project was developed utilising the full
                                        stack, which includes React as the front-end library, AWS
                                        for cloud storage, Flask as the back-end, and Python for
                                        image denoising.`,
            ` Creating an algorithm to denoise the medical image while
                                        retaining as much of the critical information as possible
                                        such as edges, texture, and other detailed aspects, which
                                        are more crucial for any radiologist to diagnose anomaly in
                                        anatomical images.`,
            ` In Medical Imaging Modalities like MRI, Ultrasound, and OCT
                                        (Optical Coherent Tomography) pictures, the CNN model was
                                        developed to work for various noise models and noise levels.`,
        ],
        link: `https://mohammedsaif001.github.io/Medical-Image-Denoising/`,
    },
    {
        id: 6,
        icon: `uil-edit`,
        title: `News Flash`,
        modalTitle: `News Flash`,
        descriptionBulletin: [
            ` A user can access News Flash to read daily live news from
                                        India on a variety of subjects, such as sports, science,
                                        business, and much more. Here, all of the news is presented
                                        in a number of bootstrap cards for quick viewing. If a user
                                        is interested in learning more about a specific news item,
                                        he or she can click on the relevant card to be taken to the
                                        source article.`,
            ` ReactJs, BootStrap, and NewsAPI were used to develop this
                                        News Flash Website.`,
            ` This project of work features ReactRouter, a loading
                                        spinner, various categories of news in the taskbar, the
                                        date, time, and author of that particular news, as well as
                                        the news's source.`,
            ` It also has infinite scrolling till all the news is fetched,
                                        a top loading bar, a sticky navigation bar, and much more.`,
        ],
        link: `https://github.com/mohammedsaif001/ReactCourse-NewsApp`,
    },
];

export default projects;
