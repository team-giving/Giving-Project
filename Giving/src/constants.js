export const Fonts = {
    Metropolis: "Metropolis-Medium",
    MetropolisBold: "Metropolis-Bold",
    MetropolisItalic: "Metropolis-MediumItalic"
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

export const CITY_PICKER = [
    { label: "Abilene" , value: "Abilene" },
    { label: "Akron" , value: "Akron" },
    { label: "Albuquerque" , value: "Albuquerque" },
    { label: "Alexandria" , value: "Alexandria" },
    { label: "Allen" , value: "Allen" },
    { label: "Allentown" , value: "Allentown" },
    { label: "Amarillo" , value: "Amarillo" },
    { label: "Anaheim" , value: "Anaheim" },
    { label: "Anchorage" , value: "Anchorage" },
    { label: "Ann Arbor" , value: "Ann Arbor" },
    { label: "Antioch" , value: "Antioch" },
    { label: "Arlington" , value: "Arlington" },
    { label: "Arvada" , value: "Arvada" },
    { label: "Athens" , value: "Athens" },
    { label: "Atlanta" , value: "Atlanta" },
    { label: "Augusta" , value: "Augusta" },
    { label: "Aurora" , value: "Aurora" },
    { label: "Aurora" , value: "Aurora" },
    { label: "Austin" , value: "Austin" },
    { label: "Bakersfield" , value: "Bakersfield" },
    { label: "Baltimore" , value: "Baltimore" },
    { label: "Baton Rouge" , value: "Baton Rouge" },
    { label: "Beaumont" , value: "Beaumont" },
    { label: "Bellevue" , value: "Bellevue" },
    { label: "Berkeley" , value: "Berkeley" },
    { label: "Billings" , value: "Billings" },
    { label: "Birmingham" , value: "Birmingham" },
    { label: "Boise" , value: "Boise" },
    { label: "Boston" , value: "Boston" },
    { label: "Boulder" , value: "Boulder" },
    { label: "Bridgeport" , value: "Bridgeport" },
    { label: "Broken Arrow" , value: "Broken Arrow" },
    { label: "Brownsville" , value: "Brownsville" },
    { label: "Buffalo" , value: "Buffalo" },
    { label: "Burbank" , value: "Burbank" },
    { label: "Cambridge" , value: "Cambridge" },
    { label: "Cape Coral" , value: "Cape Coral" },
    { label: "Carlsbad" , value: "Carlsbad" },
    { label: "Carrollton" , value: "Carrollton" },
    { label: "Cary" , value: "Cary" },
    { label: "Cedar Rapids" , value: "Cedar Rapids" },
    { label: "Centennial" , value: "Centennial" },
    { label: "Chandler" , value: "Chandler" },
    { label: "Charleston" , value: "Charleston" },
    { label: "Charlotte" , value: "Charlotte" },
    { label: "Chattanooga" , value: "Chattanooga" },
    { label: "Chesapeake" , value: "Chesapeake" },
    { label: "Chicago" , value: "Chicago" },
    { label: "Chula Vista" , value: "Chula Vista" },
    { label: "Cincinnati" , value: "Cincinnati" },
    { label: "Clarksville" , value: "Clarksville" },
    { label: "Clearwater" , value: "Clearwater" },
    { label: "Cleveland" , value: "Cleveland" },
    { label: "Clinton" , value: "Clinton" },
    { label: "Clovis" , value: "Clovis" },
    { label: "College Station" , value: "College Station" },
    { label: "Colorado Springs" , value: "Colorado Springs" },
    { label: "Columbia" , value: "Columbia" },
    { label: "Columbia" , value: "Columbia" },
    { label: "Columbus" , value: "Columbus" },
    { label: "Columbus" , value: "Columbus" },
    { label: "Concord" , value: "Concord" },
    { label: "Coral Springs" , value: "Coral Springs" },
    { label: "Corona" , value: "Corona" },
    { label: "Corpus Christi" , value: "Corpus Christi" },
    { label: "Costa Mesa" , value: "Costa Mesa" },
    { label: "Dallas" , value: "Dallas" },
    { label: "Daly City" , value: "Daly City" },
    { label: "Davenport" , value: "Davenport" },
    { label: "Davie" , value: "Davie" },
    { label: "Dayton" , value: "Dayton" },
    { label: "Denton" , value: "Denton" },
    { label: "Denver" , value: "Denver" },
    { label: "Des Moines" , value: "Des Moines" },
    { label: "Detroit" , value: "Detroit" },
    { label: "Downey" , value: "Downey" },
    { label: "Durham" , value: "Durham" },
    { label: "Edison" , value: "Edison" },
    { label: "El Cajon" , value: "El Cajon" },
    { label: "El Monte" , value: "El Monte" },
    { label: "El Paso" , value: "El Paso" },
    { label: "Elgin" , value: "Elgin" },
    { label: "Elizabeth" , value: "Elizabeth" },
    { label: "Elk Grove" , value: "Elk Grove" },
    { label: "Escondido" , value: "Escondido" },
    { label: "Eugene" , value: "Eugene" },
    { label: "Evansville" , value: "Evansville" },
    { label: "Everett" , value: "Everett" },
    { label: "Fairfield" , value: "Fairfield" },
    { label: "Fargo" , value: "Fargo" },
    { label: "Fayetteville" , value: "Fayetteville" },
    { label: "Fontana" , value: "Fontana" },
    { label: "Fort Collins" , value: "Fort Collins" },
    { label: "Fort Lauderdale" , value: "Fort Lauderdale" },
    { label: "Fort Wayne" , value: "Fort Wayne" },
    { label: "Fort Worth" , value: "Fort Worth" },
    { label: "Fremont" , value: "Fremont" },
    { label: "Fresno" , value: "Fresno" },
    { label: "Frisco" , value: "Frisco" },
    { label: "Fullerton" , value: "Fullerton" },
    { label: "Gainesville" , value: "Gainesville" },
    { label: "Garden Grove" , value: "Garden Grove" },
    { label: "Garland" , value: "Garland" },
    { label: "Gilbert" , value: "Gilbert" },
    { label: "Glendale" , value: "Glendale" },
    { label: "Glendale" , value: "Glendale" },
    { label: "Grand Prairie" , value: "Grand Prairie" },
    { label: "Grand Rapids" , value: "Grand Rapids" },
    { label: "Greeley" , value: "Greeley" },
    { label: "Green Bay" , value: "Green Bay" },
    { label: "Greensboro" , value: "Greensboro" },
    { label: "Gresham" , value: "Gresham" },
    { label: "Hampton" , value: "Hampton" },
    { label: "Hartford" , value: "Hartford" },
    { label: "Hayward" , value: "Hayward" },
    { label: "Henderson" , value: "Henderson" },
    { label: "Hialeah" , value: "Hialeah" },
    { label: "High Point" , value: "High Point" },
    { label: "Hillsboro" , value: "Hillsboro" },
    { label: "Hollywood" , value: "Hollywood" },
    { label: "Honolulu" , value: "Honolulu" },
    { label: "Houston" , value: "Houston" },
    { label: "Huntington Beach" , value: "Huntington Beach" },
    { label: "Huntsville" , value: "Huntsville" },
    { label: "Independence" , value: "Independence" },
    { label: "Indianapolis" , value: "Indianapolis" },
    { label: "Inglewood" , value: "Inglewood" },
    { label: "Irvine" , value: "Irvine" },
    { label: "Irving" , value: "Irving" },
    { label: "Jackson" , value: "Jackson" },
    { label: "Jacksonville" , value: "Jacksonville" },
    { label: "Jersey City" , value: "Jersey City" },
    { label: "Joliet" , value: "Joliet" },
    { label: "Jurupa Valley" , value: "Jurupa Valley" },
    { label: "Kansas City" , value: "Kansas City" },
    { label: "Kansas City" , value: "Kansas City" },
    { label: "Kent" , value: "Kent" },
    { label: "Killeen" , value: "Killeen" },
    { label: "Knoxville" , value: "Knoxville" },
    { label: "Lafayette" , value: "Lafayette" },
    { label: "Lakeland" , value: "Lakeland" },
    { label: "Lakewood" , value: "Lakewood" },
    { label: "Lakewood" , value: "Lakewood" },
    { label: "Lancaster" , value: "Lancaster" },
    { label: "Lansing" , value: "Lansing" },
    { label: "Laredo" , value: "Laredo" },
    { label: "Las Cruces" , value: "Las Cruces" },
    { label: "Las Vegas" , value: "Las Vegas" },
    { label: "League City" , value: "League City" },
    { label: "Lewisville" , value: "Lewisville" },
    { label: "Lexington" , value: "Lexington" },
    { label: "Lincoln" , value: "Lincoln" },
    { label: "Little Rock" , value: "Little Rock" },
    { label: "Long Beach" , value: "Long Beach" },
    { label: "Los Angeles" , value: "Los Angeles" },
    { label: "Louisville" , value: "Louisville" },
    { label: "Lowell" , value: "Lowell" },
    { label: "Lubbock" , value: "Lubbock" },
    { label: "Macon" , value: "Macon" },
    { label: "Madison" , value: "Madison" },
    { label: "Manchester" , value: "Manchester" },
    { label: "McAllen" , value: "McAllen" },
    { label: "McKinney" , value: "McKinney" },
    { label: "Memphis" , value: "Memphis" },
    { label: "Mesa" , value: "Mesa" },
    { label: "Mesquite" , value: "Mesquite" },
    { label: "Miami Gardens" , value: "Miami Gardens" },
    { label: "Miami" , value: "Miami" },
    { label: "Midland" , value: "Midland" },
    { label: "Milwaukee" , value: "Milwaukee" },
    { label: "Minneapolis" , value: "Minneapolis" },
    { label: "Miramar" , value: "Miramar" },
    { label: "Mobile" , value: "Mobile" },
    { label: "Modesto" , value: "Modesto" },
    { label: "Montgomery" , value: "Montgomery" },
    { label: "Moreno Valley" , value: "Moreno Valley" },
    { label: "Murfreesboro" , value: "Murfreesboro" },
    { label: "Murrieta" , value: "Murrieta" },
    { label: "Naperville" , value: "Naperville" },
    { label: "Nashville" , value: "Nashville" },
    { label: "New Haven" , value: "New Haven" },
    { label: "New Orleans" , value: "New Orleans" },
    { label: "New York City" , value: "New York City" },
    { label: "Newark" , value: "Newark" },
    { label: "Newport News" , value: "Newport News" },
    { label: "Norfolk" , value: "Norfolk" },
    { label: "Norman" , value: "Norman" },
    { label: "North Charleston" , value: "North Charleston" },
    { label: "North Las Vegas" , value: "North Las Vegas" },
    { label: "Norwalk" , value: "Norwalk" },
    { label: "Oakland" , value: "Oakland" },
    { label: "Oceanside" , value: "Oceanside" },
    { label: "Odessa" , value: "Odessa" },
    { label: "Oklahoma City" , value: "Oklahoma City" },
    { label: "Olathe" , value: "Olathe" },
    { label: "Omaha" , value: "Omaha" },
    { label: "Ontario" , value: "Ontario" },
    { label: "Orange" , value: "Orange" },
    { label: "Orlando" , value: "Orlando" },
    { label: "Overland Park" , value: "Overland Park" },
    { label: "Oxnard" , value: "Oxnard" },
    { label: "Palm Bay" , value: "Palm Bay" },
    { label: "Palmdale" , value: "Palmdale" },
    { label: "Pasadena" , value: "Pasadena" },
    { label: "Pasadena" , value: "Pasadena" },
    { label: "Paterson" , value: "Paterson" },
    { label: "Pearland" , value: "Pearland" },
    { label: "Pembroke Pines" , value: "Pembroke Pines" },
    { label: "Peoria" , value: "Peoria" },
    { label: "Peoria" , value: "Peoria" },
    { label: "Philadelphia" , value: "Philadelphia" },
    { label: "Phoenix" , value: "Phoenix" },
    { label: "Pittsburgh" , value: "Pittsburgh" },
    { label: "Plano" , value: "Plano" },
    { label: "Pomona" , value: "Pomona" },
    { label: "Pompano Beach" , value: "Pompano Beach" },
    { label: "Port St. Lucie" , value: "Port St. Lucie" },
    { label: "Portland" , value: "Portland" },
    { label: "Providence" , value: "Providence" },
    { label: "Provo" , value: "Provo" },
    { label: "Pueblo" , value: "Pueblo" },
    { label: "Raleigh" , value: "Raleigh" },
    { label: "Rancho Cucamonga" , value: "Rancho Cucamonga" },
    { label: "Reno" , value: "Reno" },
    { label: "Renton" , value: "Renton" },
    { label: "Rialto" , value: "Rialto" },
    { label: "Richardson" , value: "Richardson" },
    { label: "Richmond" , value: "Richmond" },
    { label: "Richmond" , value: "Richmond" },
    { label: "Riverside" , value: "Riverside" },
    { label: "Rochester" , value: "Rochester" },
    { label: "Rochester" , value: "Rochester" },
    { label: "Rockford" , value: "Rockford" },
    { label: "Roseville" , value: "Roseville" },
    { label: "Round Rock" , value: "Round Rock" },
    { label: "Sacramento" , value: "Sacramento" },
    { label: "Saint Paul" , value: "Saint Paul" },
    { label: "Salem" , value: "Salem" },
    { label: "Salinas" , value: "Salinas" },
    { label: "Salt Lake City" , value: "Salt Lake City" },
    { label: "San Angelo" , value: "San Angelo" },
    { label: "San Antonio" , value: "San Antonio" },
    { label: "San Bernardino" , value: "San Bernardino" },
    { label: "San Diego" , value: "San Diego" },
    { label: "San Francisco" , value: "San Francisco" },
    { label: "San Jose" , value: "San Jose" },
    { label: "San Mateo" , value: "San Mateo" },
    { label: "Sandy Springs" , value: "Sandy Springs" },
    { label: "Santa Ana" , value: "Santa Ana" },
    { label: "Santa Clara" , value: "Santa Clara" },
    { label: "Santa Clarita" , value: "Santa Clarita" },
    { label: "Santa Maria" , value: "Santa Maria" },
    { label: "Santa Rosa" , value: "Santa Rosa" },
    { label: "Savannah" , value: "Savannah" },
    { label: "Scottsdale" , value: "Scottsdale" },
    { label: "Seattle" , value: "Seattle" },
    { label: "Shreveport" , value: "Shreveport" },
    { label: "Simi Valley" , value: "Simi Valley" },
    { label: "Sioux Falls" , value: "Sioux Falls" },
    { label: "South Bend" , value: "South Bend" },
    { label: "Sparks" , value: "Sparks" },
    { label: "Spokane" , value: "Spokane" },
    { label: "Springfield" , value: "Springfield" },
    { label: "Springfield" , value: "Springfield" },
    { label: "Springfield" , value: "Springfield" },
    { label: "St. Louis" , value: "St. Louis" },
    { label: "St. Petersburg" , value: "St. Petersburg" },
    { label: "Stamford" , value: "Stamford" },
    { label: "Sterling Heights" , value: "Sterling Heights" },
    { label: "Stockton" , value: "Stockton" },
    { label: "Sunnyvale" , value: "Sunnyvale" },
    { label: "Surprise" , value: "Surprise" },
    { label: "Syracuse" , value: "Syracuse" },
    { label: "Tacoma" , value: "Tacoma" },
    { label: "Tallahassee" , value: "Tallahassee" },
    { label: "Tampa" , value: "Tampa" },
    { label: "Temecula" , value: "Temecula" },
    { label: "Tempe" , value: "Tempe" },
    { label: "Thornton" , value: "Thornton" },
    { label: "Thousand Oaks" , value: "Thousand Oaks" },
    { label: "Toledo" , value: "Toledo" },
    { label: "Topeka" , value: "Topeka" },
    { label: "Torrance" , value: "Torrance" },
    { label: "Tucson" , value: "Tucson" },
    { label: "Tulsa" , value: "Tulsa" },
    { label: "Tuscaloosa" , value: "Tuscaloosa" },
    { label: "Tyler" , value: "Tyler" },
    { label: "Vacaville" , value: "Vacaville" },
    { label: "Vallejo" , value: "Vallejo" },
    { label: "Vancouver" , value: "Vancouver" },
    { label: "Ventura" , value: "Ventura" },
    { label: "Victorville" , value: "Victorville" },
    { label: "Virginia Beach" , value: "Virginia Beach" },
    { label: "Visalia" , value: "Visalia" },
    { label: "Vista" , value: "Vista" },
    { label: "Waco" , value: "Waco" },
    { label: "Warren" , value: "Warren" },
    { label: "Washington, D.C." , value: "Washington, D.C." },
    { label: "Waterbury" , value: "Waterbury" },
    { label: "West Covina" , value: "West Covina" },
    { label: "West Jordan" , value: "West Jordan" },
    { label: "West Palm Beach" , value: "West Palm Beach" },
    { label: "West Valley City" , value: "West Valley City" },
    { label: "Westminster" , value: "Westminster" },
    { label: "Wichita Falls" , value: "Wichita Falls" },
    { label: "Wichita" , value: "Wichita" },
    { label: "Wilmington" , value: "Wilmington" },
    { label: "Winston–Salem" , value: "Winston–Salem" },
    { label: "Woodbridge" , value: "Woodbridge" },
    { label: "Worcester" , value: "Worcester" },
    { label: "Yonkers" , value: "Yonkers" },
];