interface ContentItem {
    title: string;
    content: string;
    image: string;
    cta: string;
    reverse?: boolean
}

export const mainMenuLinks: { title: string; url: string }[] = [
    {
        title: 'Gifting',
        url: '/'
    },
    {
        title: 'Travel',
        url: '/about'
    },
    {
        title: 'Adults Welcome',
        url: '/contact'
    },
    {
        title: 'Art & Home Décor ',
        url: '/services'
    },
    {
        title: 'Space',
        url: '/portfolio'
    },
    {
        title: 'Pop Culture',
        url: '/blog'
    },
    {
        title: 'Toddlers',
        url: '/contact'
    },
    {
        title: 'Real World Role Playing',
        url: '/contact'
    },
]

export const mainMenuActions: { title: string; url: string; icon: string }[] = [
    {
        title: 'Home',
        url: '/',
        icon: 'Home'
    },
    {
        title: 'Contact us',
        url: '/',
        icon: 'Message',
    },
    {
        title: 'Requests',
        url: '/',
        icon: 'Bag',
    },
    {
        title: 'Search',
        url: '/',
        icon: 'Search',
    },
]

export const mainMenuLogos: { title: string; url: string, image: string }[] = [
    {
        title: 'Architecture',
        url: '/',
        image: '/logos/architecture.png',
    },
    {
        title: 'City',
        url: '/',
        image: '/logos/city.png',
    },
    {
        title: 'Creator',
        url: '/',
        image: '/logos/creator.png',
    },
    {
        title: 'Dots',
        url: '/',
        image: '/logos/dots.png',
    },
    {
        title: 'Duplo',
        url: '/',
        image: '/logos/duplo.png',
    },
    {
        title: 'Friends',
        url: '/',
        image: '/logos/friends.png',
    },
    {
        title: 'Ideas',
        url: '/',
        image: '/logos/ideas.png',
    },
    {
        title: 'Minifigures',
        url: '/',
        image: '/logos/minifigures.png',
    },
    {
        title: 'Technic',
        url: '/',
        image: '/logos/technic.png',
    },
]

export const sliderContent = {
    title: 'Welcome to the<br/> Play Matters Interactive Lookbook',
    video: '/desktop.mp4'
};

export const cmsContent: { title: string, subTitle: string, content: ContentItem[] }[] = [
    {
        title: 'Gifting',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'Toys perfect for birthday gift-giving season in Spring',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-449.png',
                cta: '#'
            },
            {
                title: 'Gifts for Mom',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-450.png',
                cta: '#'
            }
        ]
    },
    {
        title: 'Travel',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'Travel the world no matter where you are. No Passport needed.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-452.png',
                cta: '#'
            },
            {
                title: 'Fun accessories to take with you on your travels or keep kids entertained',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-451.png',
                cta: '#'
            }
        ]
    },
    {
        title: 'Adults welcome',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'For the Kids at Heart who love to unplug, unbox and unwind',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-448.png',
                cta: '#'
            }
        ]
    },
    {
        title: 'Art & Home Décor',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'Playful ideas for refreshing your space while tapping into your more creative side',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-453.png',
                cta: '#',
                reverse: true
            }
        ]
    },
    {
        title: 'Space',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'Capture the wonders of space and exploration',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-463.png',
                cta: '#'
            }
        ]
    },
    {
        title: 'Pop Culture',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'Recreate scenes from your favorite movies and TV series',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-464.png',
                cta: '#',
                reverse: true
            }
        ]
    },
    {
        title: 'Toddlers',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'Waterproof toys for toddlers and beyond',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-467.png',
                cta: '#'
            },
            {
                title: 'xx TBD',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-465.png',
                cta: '#'
            }
        ]
    },
    {
        title: 'Real World Role Playing',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: [
            {
                title: 'Celebrating the everyday heroes',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-468.png',
                cta: '#'
            },
            {
                title: 'xxxxx TBD',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
                image: '/content/Rectangle-466.png',
                cta: '#'
            }
        ]
    },
]