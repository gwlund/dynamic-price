var experienceData = [
    {
        name: "Rock & Rye Oyster House", 
        description: "The menu consistently reflects the passion of the chefs, creating new and interesting food while channeling inspiration from classics and modern cuisine, such as in-house cured meats.",
        type: "dining",
        rank: 1,
        region: "downtown",
        tags: ["food", "seafood"],
        website: "http://www.rockrye.com/",
        image: "http://www.bellinghamherald.com/living/magazine/ukzocp/picture43308567/alternates/LANDSCAPE_1140/Rock%20Rye%20dining%20area",
        address: {
            address1: "1145 N. State Street",
            city: "Bellingham",
            state: "WA",
            zip: "98229",
            phone: "360-746-6130",
            map_url: "http://maps.google.com"
        },
        external_links: {
            url1: "http://test.com",
        }
    },
    {
        name: "The Pepper Sisters", 
        description: "Southwestern comfort food in an art-filled spot with brightly colored booths, funky decor & patio. A long-time Bellingham favorite",
        type: "dining", 
        rank: 2,
        region: "downtown",
        tags: ["food", "comfort"],
        website: "http://peppersisters.com",
        image: "http://lh6.ggpht.com/_-gT_C7fW46Q/S53M5QP74pI/AAAAAAAAWcA/cPxhQHk2cGc/s640/IMG_1416.JPG",
        address: {
            address1: "1055 N. State Street",
            city: "Bellingham",
            state: "WA",
            zip: "98229",
            phone: "360-671-3414",
            map_url: "http://maps.google.com"
        },
        external_links: {
            url1: "http://test.com",
        }
    },
    {
        name: "Pel’meni Restaurant", 
        description: "An unassuming place in Bellingham with beautiful architecture and interesting food (Russian dumplings). When we came in, we were expecting to be seated and given a menu, but it’s actually a walk-up and let them know whether you want potato or meat pierogi. That’s it. Easy Peasy.",
        type: "dining", 
        rank: 2,
        region: "downtown",
        tags: ["food", "comfort"],
        website: "http://restaurantwebx.com/PelMeni/",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/e5/14/9f/great-service-great-atmosphere.jpg",
        address: {
            address1: "1211 N. State Street",
            city: "Bellingham",
            state: "WA",
            zip: "98229",
            phone: "360-715-8324",
            map_url: "http://maps.google.com"
        },
        external_links: {
            url1: "http://test.com",
        }
    },
    {
        name: "Old World Deli", 
        description: "Crusty local bread, amazing spreads, fresh veggies and tasty combinations of ingredients make this the best sandwich venue in our fair city, hands-down. They also have an awesome meat & cheese plate you can share over a bottle of wine with friends.",
        type: "dining", 
        rank: 2,
        region: "downtown",
        tags: ["food", "lunch", "sandwich"],
        website: "http://www.oldworlddeli1.com/",
        image: "https://www.ordervikingfood.com/custom/oldworlddeli_bg.jpg",
        address: {
            address1: "1228 N. State Street",
            city: "Bellingham",
            state: "WA",
            zip: "98229",
            phone: "360-738-2090",
            map_url: "http://maps.google.com"
        },
        external_links: {
            url1: "http://test.com",
        }
    },
    {
        name: "Boundary Bay Brewery & Bistro", 
        description: "Expansive, unfussy brewpub with a deck & beer garden serving locally sourced pub grub & award winning craft beer. Great for the whole family. Bellingham’s first brewery!",
        type: "dining", 
        rank: 3,
        region: "downtown",
        tags: ["food", "lunch", "dinner", "beer"],
        website: "https://www.bbaybrewery.com/",
        image: "https://www.bellingham.org/wp-content/uploads/2016/03/irish-dancers.jpg",
        address: {
            address1: "1107 Railroad Ave",
            city: "Bellingham",
            state: "WA",
            zip: "98229",
            phone: "360-647-5593",
            map_url: "http://maps.google.com"
        },
        external_links: {
            url1: "http://test.com",
        }
    },
    {
        name: "Rudy’s Pizzeria ", 
        description: "Counter-serve spot dishing creative slices/pies with vegan & gluten-free options plus beer & wine.",
        type: "dining", 
        rank: 5,
        region: "downtown",
        tags: ["food", "dinner", "pizza"],
        website: "http://www.rudysbham.com/",
        image: "http://4.bp.blogspot.com/-t3CwZbZIiLs/Tih2uLyFxLI/AAAAAAAAB9I/f59VrO6NxJM/s1600/Photo976.jpg",
        address: {
            address1: "1232 N. State Street",
            city: "Bellingham",
            state: "WA",
            zip: "98229",
            phone: "360-647-7547",
            map_url: "http://maps.google.com"
        },
        external_links: {
            url1: "http://test.com",
        }
    },
    {
        name: "D’Anna’s Cafe Italiano", 
        description: "Brick-walled cafe known for fresh pasta dishes, Sicilian fare, & a bevy of local & imported wines.",
        type: "dining", 
        rank: 2,
        region: "fairhaven",
        tags: ["food", "dinner", "italian"],
        website: "http://dannascafeitaliano.com/",
        image: "http://dannascafeitaliano.com/images/12.jpg",
        address: {
            address1: "1317 N. State Street",
            city: "Bellingham",
            state: "WA",
            zip: "98229",
            phone: "360-714-0188",
            map_url: "http://maps.google.com"
        },
        external_links: {
            url1: "http://test.com",
        }
    }

];

function getData() {
    return experienceData;
}

module.exports = getData;