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
        url: '#gifting'
    },
    {
        title: 'Travel',
        url: '#travel'
    },
    {
        title: 'Adults Welcome',
        url: '#adults-welcome'
    },
    {
        title: 'Art & Home Décor ',
        url: '#art-home-discovery'
    },
    {
        title: 'Space',
        url: '#space'
    },
    {
        title: 'Pop Culture',
        url: '#pop-culture'
    },
    {
        title: 'Toddlers',
        url: '#toddlers'
    },
    {
        title: 'Real World Role Playing',
        url: '#real-world-role-playing'
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

export const cmsContent: { id: string; title: string, subTitle: string, content: ContentItem[] }[] = [
    {
        id: 'gifting',
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
        id: 'travel',
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
        id: 'adults-welcome',
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
        id: 'art-home-discovery',
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
        id: 'space',
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
        id: 'pop-culture',
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
        id: 'toddlers',
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
        id: 'real-world-role-playing',
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