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
    }

];

function getData() {
    return experienceData;
}

module.exports = getData;