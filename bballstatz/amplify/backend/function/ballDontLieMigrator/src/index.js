const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const playerData = {
  data: {
    listPlayers: {
      items: [
        {
          firstName: "Georges",
          id: "fae899bc-3fc7-43d9-b2c9-35721d11e438",
          lastName: "Niang"
        },
        {
          firstName: "Kevin",
          id: "53f2fa48-e61b-49fb-843d-8a3e872257eb",
          lastName: "Durant"
        },
        {
          firstName: "Jordan",
          id: "bde7f42e-7296-453d-bcba-cac6fad2d03f",
          lastName: "McLaughlin"
        },
        {
          firstName: "Cam",
          id: "8f10f30f-cab7-43e1-be6b-736cd8700081",
          lastName: "Reddish"
        },
        {
          firstName: "Svi",
          id: "8c0929ae-ce3d-47e0-a964-bf6b8d3981ab",
          lastName: "Mykhailiuk"
        },
        {
          firstName: "Tremont",
          id: "ce5297ca-d8bc-4210-ad67-d52382258e96",
          lastName: "Waters"
        },
        {
          firstName: "Chris",
          id: "cc48bc62-dcd4-4522-8b65-c8588b06169d",
          lastName: "Silva"
        },
        {
          firstName: "Timothe",
          id: "18cfec39-20a4-4ec3-9f00-6e62b5a61798",
          lastName: "Luwawu-Cabarrot"
        },
        {
          firstName: "Kyle",
          id: "19c853fd-a4ed-470d-8b63-581a2d6ca1f5",
          lastName: "Alexander"
        },
        {
          firstName: "Jrue",
          id: "65700e81-3aa0-49a9-8a94-004f2cfb64e5",
          lastName: "Holiday"
        },
        {
          firstName: "John",
          id: "6769d1ca-0581-48b0-b487-b5c87b8f696e",
          lastName: "Wall"
        },
        {
          firstName: "Derrick",
          id: "54cf6e06-9172-44b8-8d3b-ea1b6926553d",
          lastName: "Jones"
        },
        {
          firstName: "Dwayne",
          id: "4bce90d5-d5ef-4fe3-b6ce-c974a3d44bdc",
          lastName: "Bacon"
        },
        {
          firstName: "Luka",
          id: "d2ee92e9-3e72-45eb-b156-2dc5adc1e6f7",
          lastName: "Doncic"
        },
        {
          firstName: "Jabari",
          id: "e58c5e0e-f1f5-4685-9ff2-7197f9330bea",
          lastName: "Parker"
        },
        {
          firstName: "Landry",
          id: "467f6843-4a9d-413b-9924-d2188d60e6fe",
          lastName: "Shamet"
        },
        {
          firstName: "Seth",
          id: "047d0b63-4142-46e9-8f04-a61622ae2375",
          lastName: "Curry"
        },
        {
          firstName: "Montrezl",
          id: "869c305c-3e1f-49e5-a59b-5f1e03d198f8",
          lastName: "Harrell"
        },
        {
          firstName: "Matt",
          id: "2239eb97-eadc-4e6d-946f-9e17f0cea5b4",
          lastName: "Thomas"
        },
        {
          firstName: "Marquese",
          id: "643ac9e3-9e95-4611-b5ac-8a5416046ec5",
          lastName: "Chriss"
        },
        {
          firstName: "Brandon",
          id: "c978afe7-cf22-45fc-8d0f-da8f867eb5ee",
          lastName: "Clarke"
        },
        {
          firstName: "Treveon",
          id: "3f170fb8-2633-481f-bc63-0bce20b37557",
          lastName: "Graham"
        },
        {
          firstName: "Patrick",
          id: "03854148-a3fa-4564-b1ff-922fe0ba32ba",
          lastName: "McCaw"
        },
        {
          firstName: "Joe",
          id: "77cd0eac-afc3-4791-94cf-f8ebfab0a88b",
          lastName: "Chealey"
        },
        {
          firstName: "Hassan",
          id: "3b8024e6-5872-4ceb-b675-415715527776",
          lastName: "Whiteside"
        },
        {
          firstName: "Malcolm",
          id: "f7134fc8-b298-41fd-933d-d0c4a5d8f6ac",
          lastName: "Brogdon"
        },
        {
          firstName: "Giannis",
          id: "6c60282d-165a-4cba-8e5a-4f2d9d4c5905",
          lastName: "Antetokounmpo"
        },
        {
          firstName: "Jalen",
          id: "2e1e9cc8-b30b-490c-bd6a-a718340a371a",
          lastName: "McDaniels"
        },
        {
          firstName: "Brandon",
          id: "ab6f22fc-0ad6-4323-a5fe-343e6f05e7e0",
          lastName: "Goodwin"
        },
        {
          firstName: "Jerami",
          id: "5b315e15-6633-4ce2-8200-71b821553314",
          lastName: "Grant"
        },
        {
          firstName: "Grant",
          id: "59209028-6712-47ef-b87c-bdb19f91523b",
          lastName: "Williams"
        },
        {
          firstName: "Goga",
          id: "0c977083-fdde-45f1-9406-60aef2a78846",
          lastName: "Bitadze"
        },
        {
          firstName: "Keita",
          id: "af3416bc-38fb-46ca-9b03-72a88d7fda35",
          lastName: "Bates-Diop"
        },
        {
          firstName: "Patty",
          id: "9e917c97-5227-4581-9ab5-2dd07a7187ef",
          lastName: "Mills"
        },
        {
          firstName: "Kawhi",
          id: "c12fb587-fc86-471c-8a84-19caf31325ce",
          lastName: "Leonard"
        },
        {
          firstName: "Troy",
          id: "562677c1-2a13-4934-a801-a6c88c619e83",
          lastName: "Daniels"
        },
        {
          firstName: "Nerlens",
          id: "2012f4fd-98e0-4080-98a7-0cfb9de87067",
          lastName: "Noel"
        },
        {
          firstName: "Paul",
          id: "db09f372-9a17-4889-add7-bf8a75ab6da6",
          lastName: "George"
        },
        {
          firstName: "Daniel",
          id: "52cd8137-c791-4569-ad70-433e25d34882",
          lastName: "Gafford"
        },
        {
          firstName: "LaMarcus",
          id: "3157a0b5-1b4c-46d1-934c-ac2df3810950",
          lastName: "Aldridge"
        },
        {
          firstName: "Taj",
          id: "9c8dc8ee-6207-48d5-81ee-f362f5e17f9b",
          lastName: "Gibson"
        },
        {
          firstName: "Frank",
          id: "b232296c-17ab-4c5c-9f05-8ae1cd275a4e",
          lastName: "Mason"
        },
        {
          firstName: "D.J.",
          id: "a18805c2-d746-4d4b-be83-5b96c3bdf6af",
          lastName: "Augustin"
        },
        {
          firstName: "Ben",
          id: "318debd7-dab6-4d4e-8849-03c4c701a7c8",
          lastName: "Simmons"
        },
        {
          firstName: "Andre",
          id: "62933587-9382-4b7e-9cb0-9a07e5b4fdc8",
          lastName: "Roberson"
        },
        {
          firstName: "Robert",
          id: "3e512d9e-ff9c-4f23-a4fd-a88128ee3af2",
          lastName: "Covington"
        },
        {
          firstName: "Justin",
          id: "1c6ea43f-a36a-4222-86ab-504f4af6fb4e",
          lastName: "Jackson"
        },
        {
          firstName: "Kevin",
          id: "858d255e-9a7b-4c7a-aac4-fc7cf3a5f238",
          lastName: "Huerter"
        },
        {
          firstName: "Jayson",
          id: "98136da3-452f-49dc-a794-1ee9c76443f2",
          lastName: "Tatum"
        },
        {
          firstName: "Damyean",
          id: "2226ff79-37ff-4b63-baeb-13df74890454",
          lastName: "Dotson"
        },
        {
          firstName: "Zion",
          id: "5cc51c05-06f5-4ae4-89a4-1d329fbbcdfb",
          lastName: "Williamson"
        },
        {
          firstName: "Rodions",
          id: "80755300-0a97-4444-9e38-06c9f0f71d85",
          lastName: "Kurucs"
        },
        {
          firstName: "Elie",
          id: "7c5ff789-8ea7-4d8f-829a-0e91d8d4721c",
          lastName: "Okobo"
        },
        {
          firstName: "Jonas",
          id: "c8788ad2-89f7-4ec9-a22b-dcaf6190889b",
          lastName: "Valanciunas"
        },
        {
          firstName: "Deandre",
          id: "7ca4beac-bbd6-454f-b820-4e8442a3e1e5",
          lastName: "Ayton"
        },
        {
          firstName: "Omari",
          id: "919fd44b-8714-4e2d-b860-5f4de0fe7d50",
          lastName: "Spellman"
        },
        {
          firstName: "Vic",
          id: "8c9608a9-ea28-4133-9013-c2d3475ce8c9",
          lastName: "Law"
        },
        {
          firstName: "Nemanja",
          id: "a74d9be9-17de-49ce-93db-20034846b31e",
          lastName: "Bjelica"
        },
        {
          firstName: "Julius",
          id: "24c85a15-686e-4161-934b-40948188fa36",
          lastName: "Randle"
        },
        {
          firstName: "Justin",
          id: "05dea31d-f1ff-491b-9f17-8be88b26f413",
          lastName: "Holiday"
        },
        {
          firstName: "Dragan",
          id: "1007d525-b100-4e6b-98a5-82adc5e10d47",
          lastName: "Bender"
        },
        {
          firstName: "Clint",
          id: "c37dafbb-a269-41f6-813f-bdb4da388203",
          lastName: "Capela"
        },
        {
          firstName: "Melvin",
          id: "2750c768-da13-47e9-82b6-f2bc6c7295a4",
          lastName: "Frazier"
        },
        {
          firstName: "Tyler",
          id: "8bd80771-843f-4d7f-a4e7-b4d4f6c4e7c6",
          lastName: "Herro"
        },
        {
          firstName: "Devin",
          id: "31baa84f-c759-4f92-8e1f-a92305ade3d6",
          lastName: "Booker"
        },
        {
          firstName: "Jusuf",
          id: "a8b48aa9-cf98-4a87-8bba-e88eead8cdaa",
          lastName: "Nurkic"
        },
        {
          firstName: "Matt",
          id: "a2f38c4c-66bc-46c9-86f7-cacc294704d7",
          lastName: "Mooney"
        },
        {
          firstName: "Jared",
          id: "04856926-1edc-4375-a147-246c4d66b6bb",
          lastName: "Dudley"
        },
        {
          firstName: "Patrick",
          id: "912e7aa3-dd03-4a98-9980-0442e108f287",
          lastName: "Beverley"
        },
        {
          firstName: "Spencer",
          id: "8426ab40-888d-4f89-976c-cd9e23717653",
          lastName: "Dinwiddie"
        },
        {
          firstName: "CJ",
          id: "bc70a55a-cee0-478f-9a13-cf51c4a4187c",
          lastName: "McCollum"
        },
        {
          firstName: "Brian",
          id: "9e448df5-971e-4427-a064-be791636b41a",
          lastName: "Bowen"
        },
        {
          firstName: "Eric",
          id: "7a104c6b-0209-4f75-a587-32f017045d52",
          lastName: "Paschall"
        },
        {
          firstName: "Jarred",
          id: "0b79911f-cd24-46d1-9b05-49fe937aa75e",
          lastName: "Vanderbilt"
        },
        {
          firstName: "Bobby",
          id: "68b7aac9-02fd-4bd8-b10c-6702d2c5eb98",
          lastName: "Portis"
        },
        {
          firstName: "Cory",
          id: "5769354c-0661-4ac7-86e5-3fd51506df36",
          lastName: "Joseph"
        },
        {
          firstName: "Jontay",
          id: "0eefc0d4-47bf-4280-aef3-e65b5c88e8be",
          lastName: "Porter"
        },
        {
          firstName: "Nikola",
          id: "7366b2b7-5959-4dd9-9204-760e861b3119",
          lastName: "Vucevic"
        },
        {
          firstName: "Bam",
          id: "11c303dc-540c-4090-8e0c-76c2fb2c125a",
          lastName: "Adebayo"
        },
        {
          firstName: "Coby",
          id: "a1e46e84-bd9e-454d-9117-a8fa1aab0ce4",
          lastName: "White"
        },
        {
          firstName: "Chasson",
          id: "f4fbc6f7-d803-404d-9f69-a31ff8fb69c7",
          lastName: "Randle"
        },
        {
          firstName: "Marvin",
          id: "e86c1439-4ef0-4530-9c41-c3a682962eb3",
          lastName: "Bagley"
        },
        {
          firstName: "Adam",
          id: "51ee792b-20c1-4ce5-b123-53fa05cb943e",
          lastName: "Mokoka"
        },
        {
          firstName: "Ryan",
          id: "7c2dc4ed-5d14-4342-9fe7-18c66fdcb6ab",
          lastName: "Arcidiacono"
        },
        {
          firstName: "Gorgui",
          id: "fd9448f0-99a2-4169-addf-235e14acf9f9",
          lastName: "Dieng"
        },
        {
          firstName: "Khris",
          id: "4c362eee-6474-40ea-b1b4-d8f917f95175",
          lastName: "Middleton"
        },
        {
          firstName: "Dwight",
          id: "a465418b-0933-40b4-8f01-253d046872e1",
          lastName: "Powell"
        },
        {
          firstName: "D.J.",
          id: "91ef3b61-97a2-4b07-981a-c4228713fd1f",
          lastName: "Wilson"
        },
        {
          firstName: "Victor",
          id: "ae9e275c-9dce-4c10-a108-cfee6958df48",
          lastName: "Oladipo"
        },
        {
          firstName: "Alize",
          id: "247fda9b-09e6-4949-8fe3-acfcb9ed0983",
          lastName: "Johnson"
        },
        {
          firstName: "Garrison",
          id: "9866abfb-ec41-451a-9c2a-d1a47ec21a0e",
          lastName: "Mathews"
        },
        {
          firstName: "Eric",
          id: "f8d6c74c-e0bd-41ed-a814-f0b25259fe0a",
          lastName: "Gordon"
        },
        {
          firstName: "T.J.",
          id: "99d762ff-34b9-4ecc-bf40-016fcd297f84",
          lastName: "Leaf"
        },
        {
          firstName: "Tony",
          id: "6130d33e-5725-4f5d-8f81-76ecd691a5b2",
          lastName: "Bradley"
        },
        {
          firstName: "Justise",
          id: "0e6ddc9f-4a7b-4d48-8033-998103edfb32",
          lastName: "Winslow"
        },
        {
          firstName: "Jaylen",
          id: "6e16fada-c4ba-42af-ab1d-aca511a6c684",
          lastName: "Nowell"
        },
        {
          firstName: "Noah",
          id: "84215e01-6108-4fd0-9a11-19e9518ab378",
          lastName: "Vonleh"
        },
        {
          firstName: "James",
          id: "a52b2c84-9c3d-4d6e-8a3b-10e75d11c2bc",
          lastName: "Harden"
        },
        {
          firstName: "Kristaps",
          id: "3c5901ef-af1d-441d-aeed-8e0a93cead49",
          lastName: "Porzingis"
        },
        {
          firstName: "Josh",
          id: "8435275f-0677-46d7-8f85-3e87cef2ad73",
          lastName: "Gray"
        },
        {
          firstName: "Damian",
          id: "44231f84-c69d-440d-9287-e210d4ce1672",
          lastName: "Jones"
        },
        {
          firstName: "Kyle",
          id: "2e49c27a-06c5-4c4a-87fd-69840b783947",
          lastName: "Anderson"
        },
        {
          firstName: "Josh",
          id: "05204575-e093-44ee-869c-7668ca6995d6",
          lastName: "Jackson"
        },
        {
          firstName: "Wesley",
          id: "795bcca3-0cca-448c-8198-85c664f76c75",
          lastName: "Matthews"
        },
        {
          firstName: "Yogi",
          id: "8834061f-7541-4ed3-9802-cc60c4435add",
          lastName: "Ferrell"
        },
        {
          firstName: "DeMarre",
          id: "664afb4f-3fc1-4e25-bcb8-bab2c0c3c33b",
          lastName: "Carroll"
        },
        {
          firstName: "Amir",
          id: "b9d4ce1b-94dc-4bec-8d62-70a86d9c523e",
          lastName: "Coffey"
        },
        {
          firstName: "Klay",
          id: "4e152a06-673e-4701-b115-aa7e2cd00d2d",
          lastName: "Thompson"
        },
        {
          firstName: "Gary",
          id: "2c0b750c-91a2-4e1d-8387-47c4944104e8",
          lastName: "Clark"
        },
        {
          firstName: "Naz",
          id: "8d64d4d4-86f5-426b-a2db-82c2f72fb722",
          lastName: "Mitrou-Long"
        },
        {
          firstName: "Joe",
          id: "766d6b8b-4211-46a3-ae57-2c1c915e538b",
          lastName: "Harris"
        },
        {
          firstName: "Jaylen",
          id: "ffc5579c-783f-4d62-80ab-3c3dcb05a27d",
          lastName: "Brown"
        },
        {
          firstName: "Draymond",
          id: "5e5099d1-4a58-43f2-8d03-f2ae5dd49337",
          lastName: "Green"
        },
        {
          firstName: "JaKarr",
          id: "7a3749f6-b03a-49eb-9e1d-07b897bd0b2d",
          lastName: "Sampson"
        },
        {
          firstName: "Christian",
          id: "98100660-988b-4e71-a89e-f35839964483",
          lastName: "Wood"
        },
        {
          firstName: "Darius",
          id: "6687bacd-1bd8-4f76-acdd-b4beac0bf402",
          lastName: "Bazley"
        },
        {
          firstName: "Larry",
          id: "ad389979-d1d5-4f26-ad64-3e516b3373a3",
          lastName: "Nance"
        },
        {
          firstName: "Norvel",
          id: "e32849a5-24ea-48e5-aea0-a294d0a7c89b",
          lastName: "Pelle"
        },
        {
          firstName: "Lou",
          id: "2629c593-5f7c-4d34-aec7-6b949572af2a",
          lastName: "Williams"
        },
        {
          firstName: "Quinn",
          id: "9484b30a-4e6e-4307-8b42-12fa141dee17",
          lastName: "Cook"
        },
        {
          firstName: "Ed",
          id: "9dbc15ee-deec-4c8c-86e9-71396ff80ef8",
          lastName: "Davis"
        },
        {
          firstName: "Kenny",
          id: "6d21cc20-c92e-4bc6-9311-36a0f115b72f",
          lastName: "Wooten"
        },
        {
          firstName: "John",
          id: "906578a8-c01e-4799-a972-2b47e02108b9",
          lastName: "Konchar"
        },
        {
          firstName: "Daniel",
          id: "e18e9d0a-97b9-470d-b0a6-0c401ae0e0a0",
          lastName: "Theis"
        },
        {
          firstName: "Nigel",
          id: "275f6aed-de63-4bd5-86b2-865113b12053",
          lastName: "Williams-Goss"
        },
        {
          firstName: "Oshae",
          id: "36c27a5d-c5bd-4e81-83b6-c77457103855",
          lastName: "Brissett"
        },
        {
          firstName: "Robert",
          id: "c20dfb58-5622-405e-90b1-92b79ee97461",
          lastName: "Williams"
        },
        {
          firstName: "Terence",
          id: "5054a7a7-7fc2-40fa-867e-486c3ff6de03",
          lastName: "Davis"
        },
        {
          firstName: "Ivica",
          id: "2da18268-82d4-4b40-a296-7ceddd435d0b",
          lastName: "Zubac"
        },
        {
          firstName: "Markelle",
          id: "41edefa9-a2f9-447d-9578-d2ea2a0d783d",
          lastName: "Fultz"
        },
        {
          firstName: "Moses",
          id: "355308f5-dbd8-4936-82fd-9a3c5c8e4b0d",
          lastName: "Brown"
        },
        {
          firstName: "Dwight",
          id: "ae8df356-5e57-43e7-be4d-5ec7663312bd",
          lastName: "Howard"
        },
        {
          firstName: "Elfrid",
          id: "5fe45e9e-7401-4896-8883-5f969361dbb7",
          lastName: "Payton"
        },
        {
          firstName: "Rodney",
          id: "bab1b58c-6d77-433c-bf21-c4a3a6b24b7f",
          lastName: "McGruder"
        },
        {
          firstName: "Mario",
          id: "4ffb4f4f-f824-4e2f-9f6b-6a05cf2f29ff",
          lastName: "Hezonja"
        },
        {
          firstName: "Drew",
          id: "0fbb8fd5-9b9c-48a2-a355-18aba7b5d9d5",
          lastName: "Eubanks"
        },
        {
          firstName: "P.J.",
          id: "da7d17aa-f245-4710-820c-99d29a7458b4",
          lastName: "Tucker"
        },
        {
          firstName: "Dejounte",
          id: "7d27ec3b-1e31-4b0f-abcf-e12039a0e27b",
          lastName: "Murray"
        },
        {
          firstName: "Tim",
          id: "35cd1338-c56b-4247-b53c-264585c59883",
          lastName: "Hardaway"
        },
        {
          firstName: "Juwan",
          id: "b2a52646-bbd0-4dc0-82c0-8145d4b00b22",
          lastName: "Morgan"
        },
        {
          firstName: "Troy",
          id: "5350a897-aa31-4510-8feb-e709e1feb844",
          lastName: "Brown"
        },
        {
          firstName: "Luka",
          id: "714b4b97-6bfe-44ce-8875-a8ee494b32dc",
          lastName: "Samanic"
        },
        {
          firstName: "Malik",
          id: "3214b8de-d3ea-4188-9329-15a92f894f23",
          lastName: "Monk"
        },
        {
          firstName: "Mikal",
          id: "83cc5b28-36a7-43ba-ba20-8347bd1de583",
          lastName: "Bridges"
        },
        {
          firstName: "Jordan",
          id: "5693e39f-fb95-4fcc-877e-e131270bcb02",
          lastName: "Bone"
        },
        {
          firstName: "Maurice",
          id: "df6f21d3-5221-42e2-945b-8fe7cebdf03e",
          lastName: "Harkless"
        },
        {
          firstName: "Frank",
          id: "88382494-4529-43d0-a328-b747e9372564",
          lastName: "Jackson"
        },
        {
          firstName: "Nicolo",
          id: "d631444a-24f1-4ea6-97a9-dbb75a564f25",
          lastName: "Melli"
        },
        {
          firstName: "Emmanuel",
          id: "8f7caaba-426f-4bee-be51-9625718d51f3",
          lastName: "Mudiay"
        },
        {
          firstName: "Aaron",
          id: "20f85838-0bd5-4c1f-ab85-a308bafaf5bc",
          lastName: "Gordon"
        },
        {
          firstName: "Kemba",
          id: "a35ee8ed-f1db-4f7e-bb17-f823e8ee0b38",
          lastName: "Walker"
        },
        {
          firstName: "Kelly",
          id: "7dfa0971-96be-4705-9811-f9f54758145f",
          lastName: "Oubre"
        },
        {
          firstName: "Andre",
          id: "9fdcd102-1c82-4e32-b366-c93139352c75",
          lastName: "Iguodala"
        },
        {
          firstName: "Terance",
          id: "a6cc820a-8dce-40aa-840c-f0c94cfa9e46",
          lastName: "Mann"
        },
        {
          firstName: "Paul",
          id: "be16ec6f-8dad-4057-ba7b-746e28582a59",
          lastName: "Watson"
        },
        {
          firstName: "Doug",
          id: "66156be8-6202-40bd-bdc2-014a46bee28f",
          lastName: "McDermott"
        },
        {
          firstName: "Mychal",
          id: "e6c1d522-5be2-4345-ab90-c7357cbaaf74",
          lastName: "Mulder"
        },
        {
          firstName: "Justin",
          id: "90f29118-aeb0-420b-9cd0-a6a94ad23abc",
          lastName: "James"
        },
        {
          firstName: "DaQuan",
          id: "3a2b38a1-23da-4af8-8c1a-e52694c2416a",
          lastName: "Jeffries"
        },
        {
          firstName: "Ky",
          id: "56fcb4a3-3a6c-4a82-8b12-704cb0428297",
          lastName: "Bowman"
        },
        {
          firstName: "DeAndre",
          id: "0036a1fa-ff9a-44a5-8061-68b828ee2b1e",
          lastName: "Jordan"
        },
        {
          firstName: "Reggie",
          id: "42fa4c2c-6520-4d04-a753-cfe4a5c5e2e1",
          lastName: "Bullock"
        },
        {
          firstName: "Patrick",
          id: "5a25d084-9ef7-4e81-8da8-737b5a9d6ed9",
          lastName: "Patterson"
        },
        {
          firstName: "Al",
          id: "cf3a87ec-c2f7-42e8-9698-6f8b2ba916a9",
          lastName: "Horford"
        },
        {
          firstName: "Jahlil",
          id: "a47ac0db-084a-4620-95e8-812c6168cf8d",
          lastName: "Okafor"
        },
        {
          firstName: "Darius",
          id: "b79b88e1-35ef-4947-8a61-f6ec631a1e15",
          lastName: "Garland"
        },
        {
          firstName: "Harry",
          id: "70ba6b2e-e7c5-4df5-a88a-cd755e43ba97",
          lastName: "Giles"
        },
        {
          firstName: "Dillon",
          id: "72a6489b-ad35-4f06-8a4f-a68ea1052f7b",
          lastName: "Brooks"
        },
        {
          firstName: "Chris",
          id: "942c53e3-7268-44e3-b0a9-fdff55a72c03",
          lastName: "Paul"
        },
        {
          firstName: "Goran",
          id: "fea7b92a-0124-4775-8747-e4828f0dab8b",
          lastName: "Dragic"
        },
        {
          firstName: "Willie",
          id: "20ca6325-14b7-49de-9f4c-6a5f45b4d039",
          lastName: "Cauley-Stein"
        },
        {
          firstName: "Bol",
          id: "6395ff32-c9b6-4ad0-8f0f-dce474274725",
          lastName: "Bol"
        },
        {
          firstName: "Devonte'",
          id: "604571ce-5be8-4938-b8fb-945ff8d15f8d",
          lastName: "Graham"
        },
        {
          firstName: "Harrison",
          id: "ce8d0944-b277-499e-9701-02a5f1828615",
          lastName: "Barnes"
        },
        {
          firstName: "Trae",
          id: "cf418e0c-de9d-438f-a1ac-3be539a56c42",
          lastName: "Young"
        },
        {
          firstName: "Monte",
          id: "48b05ddf-0a9f-4426-9394-231c54726eaa",
          lastName: "Morris"
        },
        {
          firstName: "Frank",
          id: "3a6c2262-7f48-4f0e-996e-3e774e822783",
          lastName: "Ntilikina"
        },
        {
          firstName: "Nickeil",
          id: "d3d0ab55-b939-47b3-af27-77cdf85d7956",
          lastName: "Alexander-Walker"
        },
        {
          firstName: "Jamal",
          id: "685576ef-ea6c-4ccf-affd-18916baf4e60",
          lastName: "Murray"
        },
        {
          firstName: "Anthony",
          id: "ea8826b8-1f76-4eab-b61e-ffcb176880f3",
          lastName: "Davis"
        },
        {
          firstName: "Josh",
          id: "f3c13f34-9d54-4595-8643-a63beff67d15",
          lastName: "Reaves"
        },
        {
          firstName: "Tyson",
          id: "3cd2d1c1-d575-45fd-b069-3f0adf57796d",
          lastName: "Chandler"
        },
        {
          firstName: "Carmelo",
          id: "32688af1-7ac2-432e-b60a-74b9bd89df57",
          lastName: "Anthony"
        },
        {
          firstName: "P.J.",
          id: "6d7f4f2f-7ea7-4c56-8082-dfdce67f5487",
          lastName: "Washington"
        },
        {
          firstName: "Eric",
          id: "8cee3c73-f765-4000-882d-0c6d0b8acbe3",
          lastName: "Bledsoe"
        },
        {
          firstName: "Sekou",
          id: "6b3a8820-815b-4a0a-9bc7-aede02d8d4ba",
          lastName: "Doumbouya"
        },
        {
          firstName: "Pascal",
          id: "3df1db1d-6596-489e-8e26-80f60fd9b1f4",
          lastName: "Siakam"
        },
        {
          firstName: "Chris",
          id: "05b699b8-99e3-497f-bc90-d585d6d55230",
          lastName: "Clemons"
        },
        {
          firstName: "Duncan",
          id: "18d35316-9f40-408c-abcc-ab49e06ef8e8",
          lastName: "Robinson"
        },
        {
          firstName: "Marcus",
          id: "4d7cb358-0fec-482f-9f57-92c39e8bf214",
          lastName: "Morris"
        },
        {
          firstName: "Jordan",
          id: "2ed2f76f-5a2f-4d79-ab7c-e84a8a42dc21",
          lastName: "Poole"
        },
        {
          firstName: "Terrence",
          id: "b7d0fa52-b5ca-4465-9bbb-3ec9b6b7b536",
          lastName: "Ross"
        },
        {
          firstName: "Royce",
          id: "32526c95-bc6e-4d28-a751-c4200904d80b",
          lastName: "O'Neale"
        },
        {
          firstName: "Jarrell",
          id: "9208711c-a497-4400-8f4a-42b886c19b72",
          lastName: "Brantley"
        },
        {
          firstName: "Nassir",
          id: "74eecf7d-f713-49e8-a590-52afa3f717a2",
          lastName: "Little"
        },
        {
          firstName: "Otto",
          id: "792fdc1e-e833-4777-a372-11e93e457480",
          lastName: "Porter"
        },
        {
          firstName: "Raul",
          id: "8e7ffd66-f779-418c-bf18-b9f746a1c5fe",
          lastName: "Neto"
        },
        {
          firstName: "Miye",
          id: "eec2714c-72a5-48c8-bc10-d628e2a583f7",
          lastName: "Oni"
        },
        {
          firstName: "Nicolas",
          id: "a89ac040-715d-4057-8fc0-9d71ad06fa0a",
          lastName: "Batum"
        },
        {
          firstName: "Kobi",
          id: "c494c5a5-3155-40b1-923e-da846c2e232f",
          lastName: "Simmons"
        },
        {
          firstName: "Gary",
          id: "62daf16f-0c4c-46ae-9e54-0d34d6fdef85",
          lastName: "Trent"
        },
        {
          firstName: "Cody",
          id: "6eadcfb0-1d51-4525-add6-17f07ae2ad49",
          lastName: "Martin"
        },
        {
          firstName: "T.J.",
          id: "2ec7092d-e988-4576-ab8b-e3197448fa5d",
          lastName: "Warren"
        },
        {
          firstName: "Chandler",
          id: "5d9dd021-537d-478d-8540-2d2708f356f4",
          lastName: "Hutchison"
        },
        {
          firstName: "Johnathan",
          id: "446bf9e1-c847-4b03-a840-67e074068945",
          lastName: "Williams"
        },
        {
          firstName: "Davis",
          id: "c1bb78ed-4ce7-4e8c-b30c-06f8148d550a",
          lastName: "Bertans"
        },
        {
          firstName: "Luke",
          id: "fed6929f-8d92-456c-8a89-9e0c17cf4f7b",
          lastName: "Kornet"
        },
        {
          firstName: "Thon",
          id: "4934ced0-e62b-482d-a5c7-4606d6fba232",
          lastName: "Maker"
        },
        {
          firstName: "Courtney",
          id: "5247355c-121e-4053-8627-54d99e61d518",
          lastName: "Lee"
        },
        {
          firstName: "Hamidou",
          id: "417c9fe2-15ee-48b7-9d8b-a151146fff42",
          lastName: "Diallo"
        },
        {
          firstName: "Antonius",
          id: "205dab97-c6f6-437f-8f7e-107d060ad27a",
          lastName: "Cleveland"
        },
        {
          firstName: "Jalen",
          id: "c2ca08ca-0ed5-418c-bf13-99fcb697566d",
          lastName: "Lecque"
        },
        {
          firstName: "Miles",
          id: "af8f331b-96a6-416e-8837-b14d5b11c52d",
          lastName: "Bridges"
        },
        {
          firstName: "Bruno",
          id: "664f0884-717b-4f4a-a1a6-79f08acb41bd",
          lastName: "Caboclo"
        },
        {
          firstName: "Semi",
          id: "e9bfd179-878d-4c04-acc7-2ed289d62b65",
          lastName: "Ojeleye"
        },
        {
          firstName: "Dion",
          id: "1bf4b5c7-e31d-4c22-9d89-7b909e3cb43c",
          lastName: "Waiters"
        },
        {
          firstName: "Rondae",
          id: "b0d9c043-32b9-4c79-a692-564e93f62bd3",
          lastName: "Hollis-Jefferson"
        },
        {
          firstName: "Cameron",
          id: "2fe5b749-7bd4-4dbc-acfb-6d675f541e37",
          lastName: "Johnson"
        },
        {
          firstName: "Kris",
          id: "56c796d6-74d3-4881-9166-7f528e2b67f6",
          lastName: "Dunn"
        },
        {
          firstName: "Collin",
          id: "80b5cccf-203b-4482-92aa-76d1598216be",
          lastName: "Sexton"
        },
        {
          firstName: "James",
          id: "4cbe58e4-5e4b-46b0-9f7b-6cf18ad002c6",
          lastName: "Ennis"
        },
        {
          firstName: "Evan",
          id: "b736d95c-8474-48b2-9000-24ce926eace3",
          lastName: "Fournier"
        },
        {
          firstName: "Brandon",
          id: "8082841d-e516-43c6-a81b-7987fa321acd",
          lastName: "Ingram"
        },
        {
          firstName: "Devontae",
          id: "c21994c6-ce10-4595-b695-2a16f8154f9e",
          lastName: "Cacok"
        },
        {
          firstName: "Marc",
          id: "b73a8508-23a1-49ee-a466-aa9ea8add09e",
          lastName: "Gasol"
        },
        {
          firstName: "Jaxson",
          id: "582db35d-33ae-4913-9bb3-5de4fb763e46",
          lastName: "Hayes"
        },
        {
          firstName: "Dorian",
          id: "426357dc-340b-4d89-8e3b-7d6b4022b460",
          lastName: "Finney-Smith"
        },
        {
          firstName: "Joe",
          id: "5b297372-b2af-445e-a4bc-777982dbc1e3",
          lastName: "Ingles"
        },
        {
          firstName: "Shabazz",
          id: "1c1c0edb-84df-42a8-a74b-5899849cd41a",
          lastName: "Napier"
        },
        {
          firstName: "Shaquille",
          id: "73e01c06-7df1-4190-8c5d-62453c66b9bc",
          lastName: "Harrison"
        },
        {
          firstName: "Jalen",
          id: "8d3edba8-9004-4199-9328-cc2208e8b0d3",
          lastName: "Brunson"
        },
        {
          firstName: "Tony",
          id: "26414d70-d298-4999-a391-2eee2dd7067d",
          lastName: "Snell"
        },
        {
          firstName: "Alex",
          id: "8936c15e-f9d5-4b9a-80b9-8f6b7dcf7a17",
          lastName: "Caruso"
        },
        {
          firstName: "De'Anthony",
          id: "5b22ae60-ca29-4cd8-b618-cce7b9766b0e",
          lastName: "Melton"
        },
        {
          firstName: "Bradley",
          id: "ff461754-ad20-4eeb-af02-2b46cc980b24",
          lastName: "Beal"
        },
        {
          firstName: "Solomon",
          id: "e68c7b19-7c0e-49a6-920c-48668f7ddbcf",
          lastName: "Hill"
        },
        {
          firstName: "Meyers",
          id: "51d0a386-20a8-4e68-a8ec-face10febaff",
          lastName: "Leonard"
        },
        {
          firstName: "Kent",
          id: "2c157857-fffd-4eb5-8e2a-b28ebea8da77",
          lastName: "Bazemore"
        },
        {
          firstName: "J.P.",
          id: "aaaf11cd-8988-4af1-a7cb-c77d83356503",
          lastName: "Macura"
        },
        {
          firstName: "Rudy",
          id: "79d56fd7-f4ed-4905-9d04-dff4b5352334",
          lastName: "Gay"
        },
        {
          firstName: "Sterling",
          id: "2c04ab46-c23c-4df8-a748-15f0e35e4e8b",
          lastName: "Brown"
        },
        {
          firstName: "Bismack",
          id: "8e3cbaa3-e30a-4cf8-aa7a-1b57f15f0f98",
          lastName: "Biyombo"
        },
        {
          firstName: "J.J.",
          id: "b6cdfbf4-fd3f-46f3-b889-732b3bae1da8",
          lastName: "Barea"
        },
        {
          firstName: "Tobias",
          id: "82f09975-6a8d-42e4-b42c-a52b9349ed50",
          lastName: "Harris"
        },
        {
          firstName: "Gabe",
          id: "1d4905d6-a6b4-4b45-8a90-91ed03440d0f",
          lastName: "Vincent"
        },
        {
          firstName: "Mfiondu",
          id: "8fb7ba41-b5b9-425b-89ec-6b5b61157e88",
          lastName: "Kabengele"
        },
        {
          firstName: "D'Angelo",
          id: "dbf09e15-1cd8-434e-acda-9527735ef4d6",
          lastName: "Russell"
        },
        {
          firstName: "Brad",
          id: "3c09ef8a-a6f2-4500-9599-ca7bc8d54300",
          lastName: "Wanamaker"
        },
        {
          firstName: "Malik",
          id: "d7da3f91-9003-4081-9232-bee362be6565",
          lastName: "Newman"
        },
        {
          firstName: "Zylan",
          id: "f4623e57-5443-4ca2-a357-a4b06badfd15",
          lastName: "Cheatham"
        },
        {
          firstName: "Kadeem",
          id: "f352a999-007c-4092-9dcf-9b715c2b820a",
          lastName: "Allen"
        },
        {
          firstName: "Nikola",
          id: "f2625432-3903-4f90-9b0b-2e4f63856bb0",
          lastName: "Jokic"
        },
        {
          firstName: "Mason",
          id: "9570a938-324f-40e8-92dd-8a4fcf4a953b",
          lastName: "Plumlee"
        },
        {
          firstName: "Ben",
          id: "288a83df-6f23-4d4e-a450-3d494d8ba897",
          lastName: "McLemore"
        },
        {
          firstName: "Stanley",
          id: "6ed42a42-6fd6-464c-8425-7e40489c679f",
          lastName: "Johnson"
        },
        {
          firstName: "Romeo",
          id: "cfca106e-f7a4-4ea3-a805-4505a3bf74c6",
          lastName: "Langford"
        },
        {
          firstName: "Matthew",
          id: "ef58422e-c7df-4432-8497-0cbb31e90c32",
          lastName: "Dellavedova"
        },
        {
          firstName: "Matisse",
          id: "8b43c272-c16b-40c7-a4d5-7bbcefeb1816",
          lastName: "Thybulle"
        },
        {
          firstName: "Kostas",
          id: "d1b4d512-869c-497d-b40f-c0215051645b",
          lastName: "Antetokounmpo"
        },
        {
          firstName: "Gary",
          id: "6b5d0264-fa2d-4956-919b-61abfc6bb8d7",
          lastName: "Harris"
        },
        {
          firstName: "Blake",
          id: "18358040-89d8-4e25-a6a6-9e209c26fb3a",
          lastName: "Griffin"
        },
        {
          firstName: "Alex",
          id: "2facd6c5-10c6-4481-a20f-a885b3f84460",
          lastName: "Len"
        },
        {
          firstName: "Ian",
          id: "d2abbbb8-0d36-49d4-9785-d8664021eb78",
          lastName: "Mahinmi"
        },
        {
          firstName: "Shai",
          id: "d9ea4a8f-ff51-408d-b518-980efc2a35a1",
          lastName: "Gilgeous-Alexander"
        },
        {
          firstName: "Aron",
          id: "bca27365-2b46-470a-aaee-40cf0b096f6e",
          lastName: "Baynes"
        },
        {
          firstName: "Robin",
          id: "e521ef3c-7892-4f14-a560-df320872d59a",
          lastName: "Lopez"
        },
        {
          firstName: "Dzanan",
          id: "ad2099c6-1ce2-474a-8d41-602eb729dbf5",
          lastName: "Musa"
        },
        {
          firstName: "Juancho",
          id: "c1ff3e58-266f-4183-9fa1-d7c914cf4886",
          lastName: "Hernangomez"
        },
        {
          firstName: "Damion",
          id: "0d9274b1-878c-44e3-8284-2c1f321d148b",
          lastName: "Lee"
        },
        {
          firstName: "Khem",
          id: "13ef372a-5fd1-4336-9901-12e120a5fbd7",
          lastName: "Birch"
        },
        {
          firstName: "Dewan",
          id: "d9509e1d-a6d4-435b-975e-3346b6fa364b",
          lastName: "Hernandez"
        },
        {
          firstName: "Damian",
          id: "5382cf43-3a79-4a5a-a7fd-153906fe65dd",
          lastName: "Lillard"
        },
        {
          firstName: "Wendell",
          id: "744d5db7-b0be-474a-a58b-6ddf7ae35567",
          lastName: "Carter"
        },
        {
          firstName: "BJ",
          id: "c27a4770-03ef-4a91-9022-45fc0fb6a730",
          lastName: "Johnson"
        },
        {
          firstName: "Rodney",
          id: "d38f8754-7ecb-4791-a350-f67e5c4c785a",
          lastName: "Hood"
        },
        {
          firstName: "Bojan",
          id: "7ff02e19-e829-4e56-9a34-233a71fce76c",
          lastName: "Bogdanovic"
        },
        {
          firstName: "Andrew",
          id: "77c425f0-0fce-4fab-bd1e-c915c8fb5bc7",
          lastName: "Wiggins"
        },
        {
          firstName: "Torrey",
          id: "c14eba17-879a-461e-9413-bf71a378de6e",
          lastName: "Craig"
        },
        {
          firstName: "Quinndary",
          id: "a7c34619-c032-456b-98da-b4eba67b53b6",
          lastName: "Weatherspoon"
        },
        {
          firstName: "Dean",
          id: "bbeecf0c-62c6-4211-991d-2afaf2403623",
          lastName: "Wade"
        },
        {
          firstName: "Taurean",
          id: "4f80cdb1-1b10-4669-9774-045bc8a99c99",
          lastName: "Prince"
        },
        {
          firstName: "Marial",
          id: "0a530034-a07c-4db3-a99e-17c5254c07e1",
          lastName: "Shayok"
        },
        {
          firstName: "Jeremiah",
          id: "37516b6f-20e2-4204-aeb5-9c5b4ac1c6f3",
          lastName: "Martin "
        },
        {
          firstName: "Brandon",
          id: "f58a9803-0ede-4c0b-acbd-08bc0da229af",
          lastName: "Knight"
        },
        {
          firstName: "Kelly",
          id: "8e288d6e-50b8-404b-812b-823ae5bab61f",
          lastName: "Olynyk"
        },
        {
          firstName: "Kentavious",
          id: "cecc054e-b9ec-4c71-8bbb-5ee665a8c3a9",
          lastName: "Caldwell-Pope"
        },
        {
          firstName: "Chris",
          id: "b4c697f6-ddcc-48cd-9294-fb86d9b1899f",
          lastName: "Chiozza"
        },
        {
          firstName: "Ish",
          id: "05a90cd6-73de-43d5-9d30-bc2588d03262",
          lastName: "Smith"
        },
        {
          firstName: "Buddy",
          id: "795f46f2-c78d-4f1d-9ee2-4331c1cc8184",
          lastName: "Hield"
        },
        {
          firstName: "Ricky",
          id: "a3531f82-7374-41e7-ac71-ef5071ad2a12",
          lastName: "Rubio"
        },
        {
          firstName: "Thomas",
          id: "030424b9-7367-45e1-b9d4-c8dee3a89e53",
          lastName: "Bryant"
        },
        {
          firstName: "Bryn",
          id: "ca784446-05be-4f5e-8108-d7bb1736005a",
          lastName: "Forbes"
        },
        {
          firstName: "Derrick",
          id: "48341095-ae5a-4d61-bcc8-1b0ceed870b2",
          lastName: "Rose"
        },
        {
          firstName: "Jake",
          id: "ce08115e-5e01-4fdc-991d-5d0f4db3eb9f",
          lastName: "Layman"
        },
        {
          firstName: "Wenyen",
          id: "2bf24df1-604d-4eca-b3f3-f5691f4b99b6",
          lastName: "Gabriel"
        },
        {
          firstName: "Isaac",
          id: "2c5b32a1-53c3-4403-b579-c6126c7584a7",
          lastName: "Bonga"
        },
        {
          firstName: "Michael",
          id: "be636d59-b33d-4297-b4b6-5a7f4937c8ee",
          lastName: "Frazier"
        },
        {
          firstName: "Stephen",
          id: "8ec91366-faea-4196-bbfd-b8fab7434795",
          lastName: "Curry"
        },
        {
          firstName: "Rajon",
          id: "977b67b1-4665-4f97-ba3b-7d7778efecdb",
          lastName: "Rondo"
        },
        {
          firstName: "Josh",
          id: "1938fb4b-347a-43fd-ba41-1abdb9540699",
          lastName: "Okogie"
        },
        {
          firstName: "Zhaire",
          id: "3c029ea2-2a9e-4a03-82fa-000bd231119a",
          lastName: "Smith"
        },
        {
          firstName: "Kyle",
          id: "4fae86e2-4f99-4247-af85-d917b4389d31",
          lastName: "Kuzma"
        },
        {
          firstName: "JJ",
          id: "c67a37c2-660c-4da9-90c3-95db43613038",
          lastName: "Redick"
        },
        {
          firstName: "Juan",
          id: "d1a3371b-8e83-4e52-910d-82e67efb64dd",
          lastName: "Toscano-Anderson"
        },
        {
          firstName: "Michael",
          id: "1f5e7dfc-225d-4a25-8857-e6f8192b4c44",
          lastName: "Carter-Williams"
        },
        {
          firstName: "Ty",
          id: "03cf6eb6-688a-49b1-a4cc-f10c39c21725",
          lastName: "Jerome"
        },
        {
          firstName: "RJ",
          id: "42c5f009-dfd2-4a94-a750-0943791e138e",
          lastName: "Barrett"
        },
        {
          firstName: "Talen",
          id: "b0b79700-15f3-4981-8d81-73534bbdd0ab",
          lastName: "Horton-Tucker"
        },
        {
          firstName: "LeBron",
          id: "0afbe608-940a-4d5d-a1f7-468718c67d91",
          lastName: "James"
        },
        {
          firstName: "Jimmy",
          id: "0e163d44-67a7-4107-9421-5333600166bb",
          lastName: "Butler"
        },
        {
          firstName: "Thanasis",
          id: "64c0e4e5-8711-4b86-8072-745f6084df73",
          lastName: "Antetokounmpo"
        },
        {
          firstName: "Malik",
          id: "d3392ee6-cbe4-419e-bbd5-1b658d83e10e",
          lastName: "Beasley"
        },
        {
          firstName: "Brook",
          id: "c179fb5c-9845-4e37-aef7-6e00d97548eb",
          lastName: "Lopez"
        },
        {
          firstName: "Moritz",
          id: "f1f258c2-9bcf-4e33-ba9e-563e95084893",
          lastName: "Wagner"
        },
        {
          firstName: "Mike",
          id: "7c636961-816a-4b44-8991-671df9d91d9c",
          lastName: "Muscala"
        },
        {
          firstName: "Myles",
          id: "323f9ef8-ecdd-41a7-859e-dd3db48ba913",
          lastName: "Turner"
        },
        {
          firstName: "Donte",
          id: "9cfad453-b323-43dc-a066-6cd0a21745ad",
          lastName: "DiVincenzo"
        },
        {
          firstName: "Jonathan",
          id: "776679a3-c1d8-4463-99b1-61024008a3ed",
          lastName: "Isaac"
        },
        {
          firstName: "Kevin",
          id: "ca5ad700-2ed9-453a-9abe-08eb8edb601c",
          lastName: "Porter"
        },
        {
          firstName: "Jerome",
          id: "befc2559-ffb9-46ab-b3cb-2a9844c5fe4d",
          lastName: "Robinson"
        },
        {
          firstName: "Kyle",
          id: "e58427b6-c42e-4bee-9556-4eed421d1cf7",
          lastName: "O'Quinn"
        },
        {
          firstName: "Tomas",
          id: "a190e528-a18c-4682-beeb-e0f7360c3e06",
          lastName: "Satoransky"
        },
        {
          firstName: "Caleb",
          id: "f72b2025-d6e9-48b2-a1ba-62cf8a58aa6f",
          lastName: "Swanigan"
        },
        {
          firstName: "John",
          id: "c555e067-c4d5-43f6-99af-716b6005cbba",
          lastName: "Henson"
        },
        {
          firstName: "Marcus",
          id: "af460d21-b1d8-46bb-a228-61ac4fb9ccf9",
          lastName: "Smart"
        },
        {
          firstName: "JaMychal",
          id: "2bd97a34-ced9-4413-bfaa-94dbafaa0fdd",
          lastName: "Green"
        },
        {
          firstName: "Rayjon",
          id: "847ab791-26a2-439e-9c66-0c4a77a93b82",
          lastName: "Tucker"
        },
        {
          firstName: "Lauri",
          id: "583d7994-36f9-4a9a-b527-c18704406981",
          lastName: "Markkanen"
        },
        {
          firstName: "Charles",
          id: "c64b2514-98dc-4cd9-a920-5b36abb7c252",
          lastName: "Brown"
        },
        {
          firstName: "Dennis",
          id: "8bfafad0-c7ac-4eca-8bba-60cf72180545",
          lastName: "Smith"
        },
        {
          firstName: "Pat",
          id: "298852ca-299d-4cb9-a9e5-6ac909582f78",
          lastName: "Connaughton"
        },
        {
          firstName: "Vincent",
          id: "2a890c03-d0d5-4eec-a488-d2cc34fa2ade",
          lastName: "Poirier"
        },
        {
          firstName: "Norman",
          id: "e1e4c26d-ab5c-4bd7-886a-812854466bb8",
          lastName: "Powell"
        },
        {
          firstName: "Aaron",
          id: "877eb456-2827-475f-b858-2bc00480e24f",
          lastName: "Holiday"
        },
        {
          firstName: "Bruce",
          id: "fc058e75-1015-4bbe-8fab-925d5f6d83fb",
          lastName: "Brown"
        },
        {
          firstName: "Alec",
          id: "73fcf334-2088-4862-b83b-66eae415cf87",
          lastName: "Burks"
        },
        {
          firstName: "Anthony",
          id: "33a91bda-9f4d-4f80-97d8-9bc574f6afc2",
          lastName: "Tolliver"
        },
        {
          firstName: "Austin",
          id: "34a159c8-9fe6-4386-bf01-3446f4248bcb",
          lastName: "Rivers"
        },
        {
          firstName: "Reggie",
          id: "7b745dde-a011-45a8-98a8-460a9facb3ce",
          lastName: "Jackson"
        },
        {
          firstName: "Kyle",
          id: "ba1b12c1-ee81-47d2-9f02-56110ff2a318",
          lastName: "Korver"
        },
        {
          firstName: "Kevin",
          id: "7d615ccd-db96-42a3-9a6c-7f18ea25634e",
          lastName: "Love"
        },
        {
          firstName: "Terrance",
          id: "c68679e2-2631-43b4-96b2-4287d6a0c45d",
          lastName: "Ferguson"
        },
        {
          firstName: "Russell",
          id: "74a45eed-f2b0-4886-ae71-d04cf7d59528",
          lastName: "Westbrook"
        },
        {
          firstName: "Michael",
          id: "ea8a18e4-1341-48f1-b75d-5bbac8d789d4",
          lastName: "Kidd-Gilchrist"
        },
        {
          firstName: "Sir'Dominic",
          id: "9ef6814d-8bd9-495e-804a-959c1cdb3e99",
          lastName: "Pointer"
        },
        {
          firstName: "Allonzo",
          id: "cf8bc0a2-f8a8-4aa7-a3d2-151a907ff95c",
          lastName: "Trier"
        },
        {
          firstName: "Theo",
          id: "9be260cc-fa70-4fea-b789-eec17268657c",
          lastName: "Pinson"
        },
        {
          firstName: "Jordan",
          id: "03d77214-5780-4715-8df2-13de3af5ea2d",
          lastName: "Clarkson"
        },
        {
          firstName: "Garrett",
          id: "ee2644c1-1260-4bf4-9c70-7c5b0cee4770",
          lastName: "Temple"
        },
        {
          firstName: "JaVale",
          id: "34ff5b55-42ef-40c0-a2c4-9c28b5476a03",
          lastName: "McGee"
        },
        {
          firstName: "Donta",
          id: "85e8f802-bcbe-434b-a833-4b20adefd78e",
          lastName: "Hall"
        },
        {
          firstName: "Cheick",
          id: "74cddaf3-0435-4adb-83fe-d44ae35e7e4b",
          lastName: "Diallo"
        },
        {
          firstName: "Richaun",
          id: "e96ef8d2-192f-47a3-a6ad-876603de1907",
          lastName: "Holmes"
        },
        {
          firstName: "Joel",
          id: "bf9ad0fd-0cb8-4360-8970-5f1b5cf3fa8d",
          lastName: "Embiid"
        },
        {
          firstName: "Delon",
          id: "1db0df17-b3d5-4ddb-98d0-8f86239347bf",
          lastName: "Wright"
        },
        {
          firstName: "Alen",
          id: "c68be35a-1173-4d26-bdfb-495a3904fa46",
          lastName: "Smailagic"
        },
        {
          firstName: "Trey",
          id: "55f10af0-4b71-4693-aa82-435e958ab560",
          lastName: "Lyles"
        },
        {
          firstName: "Sheldon",
          id: "b4dbe3f9-3bc5-45df-b720-10571da8e0db",
          lastName: "Mac"
        },
        {
          firstName: "Ja",
          id: "9983bed6-e53c-4c65-a90a-51546a0e3352",
          lastName: "Morant"
        },
        {
          firstName: "Terry",
          id: "d1ee8ac8-f550-4269-ab4f-604b7bba441a",
          lastName: "Rozier"
        },
        {
          firstName: "Jacob",
          id: "a5828e4a-7844-4e9c-ba68-6698094e7284",
          lastName: "Evans"
        },
        {
          firstName: "Jeremy",
          id: "8d80f6fc-a7ac-48cf-bcd8-516d57acbbfe",
          lastName: "Lamb"
        },
        {
          firstName: "Caris",
          id: "c34996e5-8be6-4053-a2f2-0acb0155e18c",
          lastName: "LeVert"
        },
        {
          firstName: "Louis",
          id: "3946a42e-7989-4c32-835c-789b50a01152",
          lastName: "King"
        },
        {
          firstName: "Kevin",
          id: "239f0ff0-3d09-4991-bb67-ad8c8b7fd0cb",
          lastName: "Knox"
        },
        {
          firstName: "Derrick",
          id: "ad354ebb-88e5-46e4-ad79-f7188ee1f6c2",
          lastName: "Favors"
        },
        {
          firstName: "Enes",
          id: "5fb038ef-a3bf-4f52-afce-4f5bd074bb88",
          lastName: "Kanter"
        },
        {
          firstName: "Donovan",
          id: "b6dde96e-3748-4cbe-86d2-798d5dffb3c0",
          lastName: "Mitchell"
        },
        {
          firstName: "Glenn",
          id: "7f462af0-2ac8-4ca5-aa5a-17b37dc5001b",
          lastName: "Robinson"
        },
        {
          firstName: "Ersan",
          id: "a519659f-7cc0-40ee-8c49-1bb0b9ca5b13",
          lastName: "Ilyasova"
        },
        {
          firstName: "Caleb",
          id: "566685c7-ff63-439a-8888-5278904835fa",
          lastName: "Martin"
        },
        {
          firstName: "Joakim",
          id: "b6eee153-eac4-41e5-afcb-ab46cf7a8ba8",
          lastName: "Noah"
        },
        {
          firstName: "Ray",
          id: "89797d2a-8257-4b70-bc98-3bb0cec9dac0",
          lastName: "Spalding"
        },
        {
          firstName: "Chris",
          id: "f01d5d8d-f949-437a-a23f-3835c0939ced",
          lastName: "Boucher"
        },
        {
          firstName: "Bruno",
          id: "2ef47392-9f85-47e7-a844-b5d97cf412c9",
          lastName: "Fernando"
        },
        {
          firstName: "Josh",
          id: "d6fbf8f8-bb4a-43f7-95f6-498a5e042138",
          lastName: "Hart"
        },
        {
          firstName: "Chimezie",
          id: "72a69d30-cf07-4b5f-94ad-9c76832788bc",
          lastName: "Metu"
        },
        {
          firstName: "Kenrich",
          id: "9318b4c1-49d0-40eb-8b76-1098e28133d2",
          lastName: "Williams"
        },
        {
          firstName: "Lonnie",
          id: "d58cf16b-7bf5-4fed-8b1e-61bad46fa43e",
          lastName: "Walker"
        },
        {
          firstName: "Dario",
          id: "06255060-3d3d-44f6-a776-2aab8e57584a",
          lastName: "Saric"
        },
        {
          firstName: "Gordon",
          id: "a1ddebee-950c-497d-9acd-b5061360b464",
          lastName: "Hayward"
        },
        {
          firstName: "Carsen",
          id: "d1340a44-b873-425e-a1c6-2545a0ef8398",
          lastName: "Edwards"
        },
        {
          firstName: "Skal",
          id: "a10131d5-a2b6-45a5-bde1-f6c4cdfd328a",
          lastName: "Labissiere"
        },
        {
          firstName: "Vince",
          id: "fa1c4130-38de-4ea1-b93a-4c3c962473e6",
          lastName: "Carter"
        },
        {
          firstName: "Admiral",
          id: "ddebd1eb-4298-449d-850a-4dd5f84da05c",
          lastName: "Schofield"
        },
        {
          firstName: "Tariq",
          id: "9d96565b-ad4e-407c-8bfa-4c8c3ce7b889",
          lastName: "Owens"
        },
        {
          firstName: "Kevin",
          id: "435f01d1-10c2-4dab-bd2a-1f50c0834490",
          lastName: "Hervey"
        },
        {
          firstName: "Kelan",
          id: "ee25478a-0855-4f35-8e0d-2c4eb3466015",
          lastName: "Martin"
        },
        {
          firstName: "Tacko",
          id: "24052c17-95a8-4905-9ecf-5e8ef4ceccc4",
          lastName: "Fall"
        },
        {
          firstName: "Ignas",
          id: "0c7bd636-5280-47f4-a7df-cedf5c1d921a",
          lastName: "Brazdeikis"
        },
        {
          firstName: "Jakob",
          id: "e1b3d3d5-b4b1-481a-b5b9-efe4231f48bf",
          lastName: "Poeltl"
        },
        {
          firstName: "Shake",
          id: "5722e429-752c-41f7-9b75-e3fc712f14f1",
          lastName: "Milton"
        },
        {
          firstName: "Isaiah",
          id: "38745a56-7472-4844-a2dc-f61d3bcd941f",
          lastName: "Hartenstein"
        },
        {
          firstName: "George",
          id: "6e566165-6674-4306-9994-470f60720a2c",
          lastName: "Hill"
        },
        {
          firstName: "Steven",
          id: "a208e22a-6b63-45f9-b7c6-bf913a68f3df",
          lastName: "Adams"
        },
        {
          firstName: "Zach",
          id: "db72e294-1c54-454a-96b9-0b4fd2f38112",
          lastName: "LaVine"
        },
        {
          firstName: "Jevon",
          id: "79cd9581-3aaa-484c-a8b1-a349cdc5c34c",
          lastName: "Carter"
        },
        {
          firstName: "Marvin",
          id: "e17a3191-b05c-4878-8be6-21028b8ec007",
          lastName: "Williams"
        },
        {
          firstName: "John",
          id: "28a2e698-9f33-4d4d-9a5d-9bea66ee42a1",
          lastName: "Collins"
        },
        {
          firstName: "Mike",
          id: "e3c8bfbe-086f-4bbf-be9b-38accc5d5037",
          lastName: "Scott"
        },
        {
          firstName: "Tristan",
          id: "335097c3-7919-49d5-80b0-8062d5d3e89c",
          lastName: "Thompson"
        },
        {
          firstName: "Thabo",
          id: "ad0aa3eb-81c3-4688-b769-e0375cdb5c13",
          lastName: "Sefolosha"
        },
        {
          firstName: "Vlatko",
          id: "957e63a8-d87d-47d2-89cc-416afa292d80",
          lastName: "Cancar"
        },
        {
          firstName: "Max",
          id: "f6aff1dc-15b9-4c89-a2fb-746f4cf78890",
          lastName: "Strus"
        },
        {
          firstName: "Ante",
          id: "f3edc230-a6f4-49f0-ad96-deebb00db0d1",
          lastName: "Zizic"
        },
        {
          firstName: "Grayson",
          id: "ffa9a64f-d624-4033-bd23-59dcfd805175",
          lastName: "Allen"
        },
        {
          firstName: "Edmond",
          id: "a53b857f-2454-445a-8f71-aabbfe5b49f7",
          lastName: "Sumner"
        },
        {
          firstName: "Danny",
          id: "478e5e20-5d59-402f-a901-b8e78f3e9508",
          lastName: "Green"
        },
        {
          firstName: "T.J.",
          id: "e3dfa2a2-6272-4f3f-adf0-dd5dadea9481",
          lastName: "McConnell"
        },
        {
          firstName: "Markieff",
          id: "25c4a949-c310-4bd3-af3f-10441215b323",
          lastName: "Morris"
        },
        {
          firstName: "Karl-Anthony",
          id: "ab532a66-9314-4d57-ade7-bb54a70c65ad",
          lastName: "Towns"
        },
        {
          firstName: "Wilson",
          id: "db90c8f4-5d2a-4ff9-8f57-1fc44a253dcf",
          lastName: "Chandler"
        },
        {
          firstName: "P.J.",
          id: "ee06e9d2-98bf-487d-96a5-4954c25b75ef",
          lastName: "Dozier"
        },
        {
          firstName: "Dewayne",
          id: "b8a77045-a325-4ac1-ad9c-d065ec1f41a4",
          lastName: "Dedmon"
        },
        {
          firstName: "Jaren",
          id: "3e492a6a-ed3c-499d-b3f5-ff68ca16f6fd",
          lastName: "Jackson"
        },
        {
          firstName: "De'Andre",
          id: "a4a75d83-54b5-4dca-913e-44ab04288446",
          lastName: "Hunter"
        },
        {
          firstName: "Danilo",
          id: "47cd6421-0ce1-431e-9b9c-a8d9bfd0eb04",
          lastName: "Gallinari"
        },
        {
          firstName: "Frank",
          id: "c9b1c381-e0ac-4618-9887-ce3e8993b265",
          lastName: "Kaminsky"
        },
        {
          firstName: "Gary",
          id: "955fe0fb-3ca2-49c0-9a19-922d8349f13c",
          lastName: "Payton II"
        },
        {
          firstName: "Kyrie",
          id: "dd146010-902b-4ad7-b98c-650d0363a2f0",
          lastName: "Irving"
        },
        {
          firstName: "Cameron",
          id: "0e04a935-33a2-4426-84a7-41b39854a57a",
          lastName: "Reynolds"
        },
        {
          firstName: "Naz",
          id: "823b2161-0c34-494c-9d7c-b438152f4f4d",
          lastName: "Reid"
        },
        {
          firstName: "Paul",
          id: "59f6f688-7000-4cf5-a27f-a1980dd86d93",
          lastName: "Millsap"
        },
        {
          firstName: "Trevor",
          id: "9392d5b6-3dbf-4375-8fdd-4dafaae6ede4",
          lastName: "Ariza"
        },
        {
          firstName: "Jarrett",
          id: "a3fff5c7-19b6-4dac-bd75-11b944bea505",
          lastName: "Allen"
        },
        {
          firstName: "Isaiah",
          id: "bde20b39-128b-4224-a36c-e23abc623446",
          lastName: "Roby"
        },
        {
          firstName: "Mitchell",
          id: "97e25d19-7c5c-49f9-91c0-5cd9b9cebdcb",
          lastName: "Robinson"
        },
        {
          firstName: "Kevon",
          id: "ebb50069-6fdf-4c07-9a21-a63d5c814536",
          lastName: "Looney"
        },
        {
          firstName: "Rui",
          id: "5bfc9a4c-deb7-4f37-a784-5d99ada863cb",
          lastName: "Hachimura"
        },
        {
          firstName: "DeMar",
          id: "5e86a9c3-b4d0-4fe1-a551-acd83e5d60eb",
          lastName: "DeRozan"
        },
        {
          firstName: "OG",
          id: "9474fa0a-70dd-44c4-9751-dac5839ae7f3",
          lastName: "Anunoby"
        },
        {
          firstName: "Zach",
          id: "b5310b38-a378-464f-b344-928adee0ed00",
          lastName: "Collins"
        },
        {
          firstName: "Wayne",
          id: "47e00cc4-53ca-453b-993a-0f58279e2a94",
          lastName: "Ellington"
        },
        {
          firstName: "Andre",
          id: "440b769d-2b8b-477f-80d7-cb21d83c0d52",
          lastName: "Drummond"
        },
        {
          firstName: "Marko",
          id: "cee5186a-56f4-42d1-bc5a-2e02422bf583",
          lastName: "Guduric"
        },
        {
          firstName: "Jaylen",
          id: "0ff2f0c4-9adb-4965-a8f2-d34e9f565e5f",
          lastName: "Hoard"
        },
        {
          firstName: "Jeff",
          id: "b9155864-4192-4ad7-8652-57a0844c87b3",
          lastName: "Green"
        },
        {
          firstName: "Kendrick",
          id: "d63b17e9-59a5-44e0-9bf9-4ad454052b10",
          lastName: "Nunn"
        },
        {
          firstName: "Will",
          id: "85e1279a-77c4-49a7-bfa0-7699e64b581f",
          lastName: "Barton"
        },
        {
          firstName: "Derrick",
          id: "9bcd5cff-4a1c-4454-89b6-a5899b0c6bcc",
          lastName: "White"
        },
        {
          firstName: "Thaddeus",
          id: "31a50d54-ef46-47a8-863c-6f4d4e5aa184",
          lastName: "Young"
        },
        {
          firstName: "Josh",
          id: "ef11cca9-6605-44e8-943e-193c7b821465",
          lastName: "Richardson"
        },
        {
          firstName: "Al-Farouq",
          id: "56ff7cb8-4828-4aaa-8f95-0bf569a0786d",
          lastName: "Aminu"
        },
        {
          firstName: "Kyle",
          id: "d12b3608-14dd-404e-8063-d822f1b2fbd5",
          lastName: "Guy"
        },
        {
          firstName: "Cody",
          id: "e1ce75b8-44ce-4086-b2e1-d2e22efc86ff",
          lastName: "Zeller"
        },
        {
          firstName: "Danuel",
          id: "14dee36c-97c6-4668-8f4e-2833967e6ada",
          lastName: "House"
        },
        {
          firstName: "Malcolm",
          id: "860e358a-9494-4f49-94a5-651168f66676",
          lastName: "Miller"
        },
        {
          firstName: "Rudy",
          id: "37fbc3a5-0d10-4e22-803b-baa2ea0cdb12",
          lastName: "Gobert"
        },
        {
          firstName: "Avery",
          id: "b23917d2-bb0d-49fa-a384-80d994561d0c",
          lastName: "Bradley"
        },
        {
          firstName: "Wes",
          id: "1aeb42f8-f283-45bf-b627-a318f7b246b2",
          lastName: "Iwundu"
        },
        {
          firstName: "Johnathan",
          id: "190c3a54-357c-4aed-8b82-737c57255bc3",
          lastName: "Motley"
        },
        {
          firstName: "Deonte",
          id: "a61a1458-1481-4474-8c30-bf4c3430050d",
          lastName: "Burton"
        },
        {
          firstName: "Jeff",
          id: "9cf99a61-6b51-4aed-8940-0480dc512b36",
          lastName: "Teague"
        },
        {
          firstName: "Kyle",
          id: "8c090758-6baa-468d-82fd-d47e17d5091b",
          lastName: "Lowry"
        },
        {
          firstName: "Keldon",
          id: "190797ba-a6f4-4286-9d5e-d157ff834829",
          lastName: "Johnson"
        },
        {
          firstName: "Udonis",
          id: "ed343fa6-397c-4456-9f3f-63efee6706b5",
          lastName: "Haslem"
        },
        {
          firstName: "Tyus",
          id: "cbc0a3b2-985e-4484-9cb6-6891337b18b7",
          lastName: "Jones"
        },
        {
          firstName: "Jarrett",
          id: "48a26195-2be6-4c2d-ba55-81c8126e9774",
          lastName: "Culver"
        },
        {
          firstName: "Cristiano",
          id: "3f64e9a6-6e1e-499b-aec8-764c99f634b2",
          lastName: "Felicio"
        },
        {
          firstName: "Dante",
          id: "0d187d04-4cd9-44b3-9a29-408fac5b011e",
          lastName: "Exum"
        },
        {
          firstName: "Evan",
          id: "ca4f6af4-c203-41d0-97a3-0286710710b6",
          lastName: "Turner"
        },
        {
          firstName: "Yuta",
          id: "c7900e6e-e5ea-4670-a7bf-cb097f041b25",
          lastName: "Watanabe"
        },
        {
          firstName: "Domantas",
          id: "22038780-8c50-4211-a99e-656d983e5207",
          lastName: "Sabonis"
        },
        {
          firstName: "Dylan",
          id: "870310f0-9480-453a-8b33-a62f283c5eda",
          lastName: "Windler"
        },
        {
          firstName: "Abdel",
          id: "d21c7f7b-c1aa-4b52-9371-a399cfcabfdd",
          lastName: "Nader"
        },
        {
          firstName: "Anfernee",
          id: "632adcc4-97f1-4e67-a132-e0b79f013c67",
          lastName: "Simons"
        },
        {
          firstName: "Maxi",
          id: "3ef70a50-cd0d-4148-a1ad-ca830a1a9046",
          lastName: "Kleber"
        },
        {
          firstName: "Fred",
          id: "45f17314-918c-49bd-a482-adc171859025",
          lastName: "VanVleet"
        },
        {
          firstName: "Furkan",
          id: "e558bede-02a3-4e10-993b-39033809c82a",
          lastName: "Korkmaz"
        },
        {
          firstName: "Serge",
          id: "0afca4ef-6ad4-4f96-8cd2-b20b59c6ce90",
          lastName: "Ibaka"
        },
        {
          firstName: "DeAndre'",
          id: "db42a3d8-e493-4f0e-aa9f-149397877fea",
          lastName: "Bembry"
        },
        {
          firstName: "James",
          id: "1f0687ca-c8f2-4c71-8306-8a18cbf6cc60",
          lastName: "Johnson"
        },
        {
          firstName: "Luguentz",
          id: "3f7e2350-e208-4791-98c2-684b53bb5a9a",
          lastName: "Dort"
        },
        {
          firstName: "Mike",
          id: "460b7264-b98f-483e-b841-59a18c2e4d67",
          lastName: "Conley"
        },
        {
          firstName: "Cedi",
          id: "d8570bcf-9513-47d6-8f21-2f86625e58df",
          lastName: "Osman"
        },
        {
          firstName: "Bogdan",
          id: "b4282659-dd1a-4042-a075-7df4890858e7",
          lastName: "Bogdanovic"
        },
        {
          firstName: "Boban",
          id: "24c17409-ac10-4859-be6c-59d6cc6b5810",
          lastName: "Marjanovic"
        },
        {
          firstName: "William",
          id: "1d4ea978-fbaa-4231-9258-856bd7f3f7a8",
          lastName: "Howard"
        },
        {
          firstName: "Mo",
          id: "a6bf9402-7f41-49a9-ab28-fe0bdffb5060",
          lastName: "Bamba"
        },
        {
          firstName: "Marco",
          id: "385f6a05-7dfb-4fc8-afed-b6a4f141100c",
          lastName: "Belinelli"
        },
        {
          firstName: "KZ",
          id: "77dc9e11-c422-4c1b-9545-0f487095891e",
          lastName: "Okpala"
        },
        {
          firstName: "Luke",
          id: "a537047d-c29f-4dfe-99b0-3bac4e258dc7",
          lastName: "Kennard"
        },
        {
          firstName: "Michael",
          id: "3a7d6510-00e9-4265-81df-864a1f547269",
          lastName: "Porter"
        },
        {
          firstName: "Willy",
          id: "5e365d31-3524-45d1-8327-50e7ff7e1dab",
          lastName: "Hernangomez"
        },
        {
          firstName: "Darius",
          id: "ef98a67f-6d45-45af-be21-23fc07eb3f17",
          lastName: "Miller"
        },
        {
          firstName: "Khyri",
          id: "17541179-e1c9-4191-aefb-63f4c20daf48",
          lastName: "Thomas"
        },
        {
          firstName: "Justin",
          id: "81d3ce4b-c47a-46f2-87aa-282cf4a6e82a",
          lastName: "Wright-Foreman"
        },
        {
          firstName: "Nicolas",
          id: "288519dc-eae8-4daf-afa4-c86322b7460e",
          lastName: "Claxton"
        },
        {
          firstName: "Jae",
          id: "db74c5dd-08bd-41a5-99ba-328e9b18aeb5",
          lastName: "Crowder"
        },
        {
          firstName: "De'Aaron",
          id: "cfc1e41b-74ab-45ee-8132-aaf9ca7f8163",
          lastName: "Fox"
        },
        {
          firstName: "Langston",
          id: "138f5c1f-b8e6-4e7c-b8ef-ecb7faa7b936",
          lastName: "Galloway"
        },
        {
          firstName: "E'Twaun",
          id: "5a854508-5f41-4009-8986-a162224c511d",
          lastName: "Moore"
        },
        {
          firstName: "Anzejs",
          id: "aae3125e-9077-42d8-b714-601bbc1eeae4",
          lastName: "Pasecniks"
        },
        {
          firstName: "Lonzo",
          id: "0f1de951-5a0e-4bc7-977c-8dafd0fbf121",
          lastName: "Ball"
        },
        {
          firstName: "Denzel",
          id: "036f914a-aad0-4ff1-9771-54f9e963d1b8",
          lastName: "Valentine"
        },
        {
          firstName: "Dennis",
          id: "a2c6a907-282f-4172-9d60-42d03987da0e",
          lastName: "Schroder"
        },
        {
          firstName: "Jordan",
          id: "8f6cd02e-f153-4fd6-ae64-5de2e3d677af",
          lastName: "McRae"
        },
        {
          firstName: "Alfonzo",
          id: "cba64aec-adb0-4ff4-a59f-fa3fd61418d7",
          lastName: "McKinnie"
        },
        {
          firstName: "Javonte",
          id: "252f4b13-6abb-45dc-ae85-f822b817cb51",
          lastName: "Green"
        }
      ]
    }
  }
};

/* Amplify Params - DO NOT EDIT
	API_BBALLSTATZGRAPHQLAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_BBALLSTATZGRAPHQLAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async event => {
  //const currentPlayers = await getPlayersFromDb();
  currentPlayers = playerData.data.listPlayers.items;
  const newPlayers = await getPlayerFromBallDontLie(currentPlayers);
  //console.log(newPlayers);
  await deletePlayersFromDb(currentPlayers);
  await addPlayersToDb(newPlayers);

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!")
  };
  return response;
};

const year = new Date().getFullYear() - 1;
const graphQLEndpoint = `https://w2wrfg6k7resbmq2w2tih6geye.appsync-api.us-east-1.amazonaws.com/graphql`;
const graphQLAPIKey = `da2-bzu5b7llwbf6tmaw2azs2mpvnu`;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getPlayersFromDb() {
  const listPlayers = gql`
    query ListPlayers($limit: Int) {
      listPlayers(limit: $limit) {
        items {
          firstName
          id
          lastName
        }
      }
    }
  `;

  const graphqlData = await axios({
    url: `http://10.0.0.212:20002/graphql`,
    method: "post",
    headers: {
      "x-api-key": `da2-fakeApiId123456`
    },
    data: {
      query: print(listPlayers),
      variables: {
        limit: 1000
      }
    }
  });

  //console.log(graphqlData.data.data.listPlayers);
  return graphqlData.data.data.listPlayers.items;
}

async function getPlayerFromBallDontLie(currentPlayers) {
  let newPlayers = [];

  for (const player of currentPlayers) {
    await sleep(1001);
    const ballDontLieData = await axios.get(
      `https://www.balldontlie.io/api/v1/players?search=${player.firstName} ${player.lastName}`
    );
    const ballDontLiePlayer = ballDontLieData.data.data[0];
    if (!ballDontLiePlayer) continue;
    const newPlayer = {
      id: ballDontLiePlayer.id,
      firstName: ballDontLiePlayer.first_name,
      lastName: ballDontLiePlayer.last_name
    };
    newPlayers.push(newPlayer);
    console.log("added player");
    console.log(newPlayer);
  }

  return newPlayers;
}

async function deletePlayersFromDb(players) {
  const deletePlayer = gql`
    mutation Delete($input: DeletePlayerInput!) {
      deletePlayer(input: $input) {
        id
      }
    }
  `;

  console.log(`about to delete ${players.length} player from DB`);
  for (const player of players) {
    console.log(
      `about to delete ${player.firstName} ${player.lastName} from DB`
    );
    await sleep(100);
    const graphqlData = await axios({
      url: graphQLEndpoint,
      method: "post",
      headers: {
        "x-api-key": graphQLAPIKey
      },
      data: {
        query: print(deletePlayer),
        variables: {
          input: {
            id: player.id
          }
        }
      }
    });
    console.log("result");
    console.log(graphqlData.data.data);
    if (graphqlData.data.errors && graphqlData.data.errors.length > 0) {
      console.log(
        `Failed to delete player ${player.firstName} ${player.lastName} with the following error(s)`
      );
      graphqlData.data.errors.forEach(error =>
        console.log("Error type: " + error.errorType)
      );
    }
  }
}

async function addPlayersToDb(players) {
  const createPlayer = gql`
    mutation CreatePlayer($input: CreatePlayerInput!) {
      createPlayer(input: $input) {
        firstName
        id
        lastName
      }
    }
  `;

  console.log(`about to add ${players.length} player to DB`);
  for (const player of players) {
    console.log(`about to add ${player.firstName} ${player.lastName} to DB`);
    await sleep(100);
    const graphqlData = await axios({
      url: graphQLEndpoint,
      method: "post",
      headers: {
        "x-api-key": graphQLAPIKey
      },
      data: {
        query: print(createPlayer),
        variables: {
          input: {
            ...player
          }
        }
      }
    });
    console.log("result");
    console.log(graphqlData.data.data);
    if (graphqlData.data.errors && graphqlData.data.errors.length > 0) {
      console.log(
        `Failed to insert player ${player.firstName} ${player.lastName} with the following error(s)`
      );
      graphqlData.data.errors.forEach(error =>
        console.log("Error type: " + error.errorType)
      );
    }
  }
}
