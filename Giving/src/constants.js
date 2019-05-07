export const Fonts = {
    Metropolis: "Metropolis-Medium",
    MetropolisBold: "Metropolis-Bold"
};

//export const SERVER_URI = "http://localhost:3000";
export const SERVER_URI = "http://ec2-54-165-35-46.compute-1.amazonaws.com:3000";

export const PREV_SEARCHES_MAX_LENGTH = 10;

export const NO_RESULTS_RESPONSES = {
    basic: "Sorry, we couldn't find any charities matching your search for: ",
    filtered: "Sorry, we couldn't find any charities based on your chosen filters.",
    cause: "Sorry, we couldn't find any charities under the cause you chose."
}

export const CATEGORIES = [
    {
        categoryName: "Animals",
        categoryID: 1,
        causes: [
            {
                causeID: 1,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=1&cuid=1&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Wildlife Conservation",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/wildlife_conservation.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 2,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=1&cuid=2&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Animal Rights, Welfare, and Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/animal_rights.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 32,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=1&cuid=32&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Zoos and Aquariums",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/zoos_aquariums.jpg?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Arts, Culture, Humanities",
        categoryID: 2,
        causes: [
            {
                causeID: 6,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=2&cuid=6&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Libraries, Historical Societies and Landmark Preservation",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/libraries.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 3,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=2&cuid=3&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Museums",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/museums.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 4,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=2&cuid=4&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Performing Arts",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/performing_arts.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 5,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=2&cuid=5&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Public Broadcasting and Media",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/public_radio.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Education",
        categoryID: 3,
        causes: [
            {
                causeID: 37,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=37&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Scholarship and Financial Support",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/scholarships.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 33,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=33&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Private Liberal Arts Colleges",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/private_colleges.jpg?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 40,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=40&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Youth Education Programs and Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/youth_education.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 41,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=41&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Education Policy and Reform",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/education_policy.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 7,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=7&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Other Education Programs and Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/other_education.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 8,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=8&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Private Elementary & Secondary Schools",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/private_schools.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 9,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=9&utm_source=DataAPI&utm_content=9af5afa3",
                causeName:
                    "Universities, Graduate Schools, and Technological Institutes",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/universities.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 38,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=38&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Special Education",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/special_education.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 39,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=39&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Adult Education Programs and Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/adult_education.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 36,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=3&cuid=36&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Early Childhood Programs and Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/early_childhood.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Environment",
        categoryID: 4,
        causes: [
            {
                causeID: 10,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=4&cuid=10&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Botanical Gardens, Parks, and Nature Centers",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/botanical_gardens.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 11,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=4&cuid=11&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Environmental Protection and Conservation",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/environmental_protection.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Health",
        categoryID: 5,
        causes: [
            {
                causeID: 34,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=5&cuid=34&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Patient and Family Support",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/patient_and_family_support.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 13,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=5&cuid=13&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Diseases, Disorders, and Disciplines",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/diseases.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 12,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=5&cuid=12&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Treatment and Prevention Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/treatment.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 14,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=5&cuid=14&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Medical Research",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/medical_research.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Human Services",
        categoryID: 6,
        causes: [
            {
                causeID: 17,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=17&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Children's and Family Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/children_family.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 28,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=28&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Homeless Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/homeless.jpg?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 16,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=16&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Youth Development, Shelter, and Crisis Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/youth_development.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 15,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=15&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Multipurpose Human Service Organizations",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/multipurpose.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 18,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=18&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Food Banks, Food Pantries, and Food Distribution",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/food_banks.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 29,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=6&cuid=29&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Social Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/social_services.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "International",
        categoryID: 7,
        causes: [
            {
                causeID: 19,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=7&cuid=19&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "International Peace, Security, and Affairs",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/international_peace.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 20,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=7&cuid=20&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Development and Relief Services",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/development_relief.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 30,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=7&cuid=30&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Humanitarian Relief Supplies",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/humanitarian_relief.jpg?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 31,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=7&cuid=31&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Foreign Charity Support Organizations",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/single_country.jpg?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Human and Civil Rights",
        categoryID: 8,
        causes: [
            {
                causeID: 21,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=8&cuid=21&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Advocacy and Education",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/advocacy.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Religion",
        categoryID: 9,
        causes: [
            {
                causeID: 25,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=9&cuid=25&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Religious Media and Broadcasting",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/religious_media.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 26,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=9&cuid=26&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Religious Activities",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/religious_activities.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Community Development",
        categoryID: 10,
        causes: [
            {
                causeID: 22,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=22&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Community Foundations",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/community_foundations.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 23,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=23&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Fundraising",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/fundraising.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 27,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=27&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Housing and Neighborhood Development",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/housing.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 42,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=42&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "United Ways",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/United_Way.gif?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 43,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=10&cuid=43&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Jewish Federations",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/Jewish_Federation.jpg?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    },
    {
        categoryName: "Research and Public Policy",
        categoryID: 11,
        causes: [
            {
                causeID: 35,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=11&cuid=35&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Non-Medical Science & Technology Research",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/nonmedical.jpg?utm_source=DataAPI&utm_content=9af5afa3"
            },
            {
                causeID: 24,
                charityNavigatorURL:
                    "https://www.charitynavigator.org/index.cfm?bay=search.results&cgid=11&cuid=24&utm_source=DataAPI&utm_content=9af5afa3",
                causeName: "Social and Public Policy Research",
                image:
                    "https://d20umu42aunjpx.cloudfront.net/_gfx_/causes/small/research_public_policy.gif?utm_source=DataAPI&utm_content=9af5afa3"
            }
        ]
    }
];

export const CATEGORIES_PICKER = [
    { label: "Animals", value: "1" },
    { label: "Arts, Culture, Humanities", value: "2" },
    { label: "Education", value: "3" },
    { label: "Environment", value: "4" },
    { label: "Health", value: "5" },
    { label: "Human Services", value: "6" },
    { label: "International", value: "7" },
    { label: "Human and Civil Rights", value: "8" },
    { label: "Religion", value: "9" },
    { label: "Community Development", value: "10" },
    { label: "Research and Public Policy", value: "11" }
];

export const SCOPE_PICKER = [
    { label: "Regional", value: "REGIONAL" },
    { label: "National", value: "NATIONAL" },
    { label: "International", value: "INTERNATIONAL" }
];

export const STATE_PICKER = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" }
];
