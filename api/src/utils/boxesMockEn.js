const { Box, Products, Provider, Category } = require("../database/index");

const boxes = [
  {
    name: "Bodegones",
    Categories: [{ name: "Gastronomia", id: "2" }],
    price: 5600,
    ranking: 4.45,
    expiration_date: "2022-04-10",
    person: 2,
    detail:
      "This Bigbox offers the possibility of choosing among the most outstanding Bodegones from the city of Buenos Aires.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvd4yFVtaN0FzSv1pCtG3iQOlY9_pskFDkA&usqp=CAU",
    Products: [
      {
        name: "Encuentro Nativo",
        description:
          "You'll experience the gastronomy, art and culture of our country. Tango Show and folklore with live musicians, Argentinian regional dances and exhibition of paintings from local painters.",
        price: 5600,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/13d1eb9b-d97b-49d2-aeae-b481d63979cb.jpg",
        Provider: {
          name: "Provider Nativo",
          phone: "5465456",
          address: "cll 45 n 38 45",
          email: "nativo@gmail.com",
        },
      },
      {
        name: "Beba Cocina",
        description:
          "Enjoy dishes that will make you remmeber grandma's homemade food, but with an extra twist.",
        price: 5600,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/9655defc-8270-46cd-9079-ab783129ff8c.jpeg",
        Provider: {
          name: "Provider Cocina",
          phone: "54654454",
          address: "cll 42 n 34 4",
          email: "cocina@gmail.com",
        },
      },
      {
        name: "Bodegón La Pipeta",
        description:
          "Go down the stairs and you'll find the Bodegón more experienced of city of Buenos Aires.",
        price: 5600,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/e8acdf92-301a-4e20-a667-3ab6fe290af9.jpg",
        Provider: {
          name: "Provider Pipeta",
          phone: "58854454",
          address: "cll 44 n 34 4",
          email: "pipeta@gmail.com",
        },
      },
      {
        name: "Pulpería Quilapán",
        description:
          "A unique place, with history and tradition Argentinan. The best quality and exquisite original wine make of this place, a date you cannot miss.",
        price: 5600,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/0818e9f3-4a79-4f3e-b238-b9042f4cfb70.jpg",
        Provider: {
          name: "Provider Pulperia",
          phone: "884654454",
          address: "cll 4 n 38 2",
          email: "pulperia@gmail.com",
        },
      },
    ],
  },
  {
    name: "Veggie",
    Categories: [{ name: "Gastronomia", id: "2" }],
    price: 4350,
    ranking: 4.66,
    expiration_date: "2022-04-10",
    person: 2,
    detail:
      "Give away unique Gastronomic Experiences. This Bigbox, for two, offers the possibility of choosing among the best vegan and vegetarian dishes of the city.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjosdJu2ms3hnuMSYBqFCDB-zNZWzNDV9F0w&usqp=CAU",
    Products: [
      {
        name: "B-Fresh",
        description:
          "Enjoy the pleasure of eating something tasty,healthy and nutritious! Discover our options of organic fruits and vegetables.",
        price: 4350,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/e97c6dc6-b2f0-4b75-b0e7-16e20b0f4a2a.jpg",
        Provider: {
          name: "Provider Fresh",
          phone: "8465456",
          address: "cll 12 n 08 22",
          email: "fresh@gmail.com",
        },
      },
      {
        name: "Fifi Almacen",
        description:
          "Enjoy plant-based cooking, unique flavors and totally natural.",
        price: 4350,
        location: "CABA",
        image:
          "https://previews.123rf.com/images/mizina/mizina1608/mizina160800119/63623934-ensalada-de-vegetales-org%C3%A1nicos-frescos-con-alforf%C3%B3n-para-almuerzo-vegetariano-saludable.jpg",
        Provider: {
          name: "Provider Fifi",
          phone: "12154454",
          address: "cll 5 n 3 42",
          email: "fifi@gmail.com",
        },
      },
      {
        name: "Fauna",
        description:
          "Colombian coffee, fresh vegetables and healthy food are waiting for you at Fauna. Discover this coffee and fall in love with it!",
        price: 4350,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/c0944929-23d1-4705-a68d-0818a5619971.jpg",
        Provider: {
          name: "Provider Fauna",
          phone: "99854454",
          address: "cll 4 n 34 24",
          email: "faunaa@gmail.com",
        },
      },
      {
        name: "Alchemy",
        description:
          "Enjoy excellent pizzas accompanied with Palermo's most original ice cream.",
        price: 4350,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/aa707450-2005-406c-bc78-2516e70ab81e.jpeg",
        Provider: {
          name: "Provider Alchemy",
          phone: "834754454",
          address: "cll 45 n 8 2",
          email: "alchemy@gmail.com",
        },
      },
    ],
  },
  {
    name: "Tentacion",
    Categories: [{ name: "Gastronomia", id: "2" }],
    price: 2100,
    ranking: 4.71,
    expiration_date: "2022-04-10",
    person: 3,
    detail:
      "Give away unique experiences. This Bigbox offers delicious desserts and ice creams to enjoy in the comfort of your home.",
    image:
      "https://heladitos.com/wp-content/uploads/2018/01/helado_extravagante.jpg",
    Products: [
      {
        name: "Podio",
        description:
          "With more than 40 years of experience, Podio's ice cream will surprise you with his unique flovors.",
        price: 2100,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/0db6cff5-50c2-45b1-810b-c4374d64d35e.jpg",
        Provider: {
          name: "Provider Podio",
          phone: "998465456",
          address: "cll 1 n 108 22",
          email: "podio@gmail.com",
        },
      },
      {
        name: "Occo",
        description:
          "Are you ready to discover the flavors Occo has to offer you? Ice cream at any time of the day.",
        price: 2100,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/68aa5794-116c-4a01-b7b2-c36274d7444b.jpg",
        Provider: {
          name: "Provider Occo",
          phone: "155154454",
          address: "cll 15 n 13 2",
          email: "occo@gmail.com",
        },
      },
      {
        name: "D-Pop",
        description:
          "The best dessert, premium quality and on an stick, ideal for celebrations or any ocation!",
        price: 2100,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/a062a034-83b4-4a73-a4f6-db4eb3b9fc1b.jpg",
        Provider: {
          name: "Provider Pop",
          phone: "79857454",
          address: "cll 24 n 24 24",
          email: "pop@gmail.com",
        },
      },
      {
        name: "Krim",
        description:
          "Enjoy excellent pizzas accompanied with Palermo's most original ice cream.",
        price: 2100,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/7cc4632b-a42c-4bfc-8d33-b0b17b7b8bfd.jpg",
        Provider: {
          name: "Provider Krim",
          phone: "22234754454",
          address: "cll 5 n 48 2",
          email: "Krim@gmail.com",
        },
      },
    ],
  },
  {
    name: "To the Water",
    Categories: [{ name: "Aventura", id: "4" }],
    price: 8300,
    ranking: 5,
    expiration_date: "2022-04-10",
    person: 2,
    detail:
      "Give away unique experiences. This Bigbox offers the possibility of enjoy of fun activities involving getting in contact with water!",
    image:
      "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2020/07/15/wakeboard.jpg",
    Products: [
      {
        name: "Journey in Kayak",
        description: "Get ready, the journey is about to begin!",
        price: 8300,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/0ba7a3c0-7c3c-4a9f-9803-12f0bd3e95d3.jpg",
        Provider: {
          name: "Provider Kayak",
          phone: "995565456",
          address: "cll 14 n 18 2",
          email: "kayak@gmail.com",
        },
      },
      {
        name: "Journey in SUP",
        description: "Are you ready to test your skills on the water?!",
        price: 8300,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/56b187bf-7828-434a-96a1-12121c4c23e7.jpg",
        Provider: {
          name: "Provider SUP",
          phone: "555154454",
          address: "cll 5 n 3 12",
          email: "sup@gmail.com",
        },
      },
      {
        name: "Kayak by the Lakes",
        description:
          "Get ready to enjoy of a unique landscape, in the middle of the lake surrounded by nature",
        price: 8300,
        location: "Rio Negro",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/0a2ec939-8321-4afa-9750-c55eb2c0717b.jpg",
        Provider: {
          name: "Provider Lagos",
          phone: "7985755",
          address: "cll 22 n 21 22",
          email: "rionegro@gmail.com",
        },
      },
      {
        name: "Baptism Dive",
        description:
          "We are waiting for you to immerse in an underwater world",
        price: 8300,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/c9f43e4f-d3c1-463f-ad15-0ee20fe74757.jpg",
        Provider: {
          name: "Provider Buceo",
          phone: "234754454",
          address: "cll 15 n 8 22",
          email: "buceo@gmail.com",
        },
      },
    ],
  },
  {
    name: "Modo Travesía",
    Categories: [{ name: "Aventura", id: "4" }],
    price: 8300,
    ranking: 4.8,
    expiration_date: "2022-04-10",
    person: 2,
    detail:
      "Give away unique experiences. This Bigbox offers the possibility of live different excursions around our country.",
    image:
      "https://cdn.britannica.com/94/125794-050-FB09B3F4/Hikers-Gore-Range-Mountains-Denver.jpg",
    Products: [
      {
        name: "Hiking in Laguna de los Padres",
        description:
          "Renewing experience, where you will walk observing and learning about all kind of fauna and flora!",
        price: 8300,
        location: "Mar del Plata",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/590736ba-b019-4215-a845-7bdce53ee28a.jpg",
        Provider: {
          name: "Provider Laguna Padres",
          phone: "8895565456",
          address: "cll 24 n 28 2",
          email: "lagunapadres@gmail.com",
        },
      },
      {
        name: "Trekking in La Cumbrecita",
        description: "Tour among elves and  and waterfalls by La Cumbrecita",
        price: 8300,
        location: "Cordoba",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/937bb13a-da50-4d65-b19f-da5892c3ee31.jpg",
        Provider: {
          name: "Provider Cumbrecita",
          phone: "554454454",
          address: "cll 45 n 34 12",
          email: "cumbrecita@gmail.com",
        },
      },
      {
        name: "Ascent to Cerro Mogote",
        description:
          "Discover Córdoba from a different view and enjoy this amazing ascent",
        price: 8300,
        location: " Villa Carlos Paz",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/5e11c891-4833-45e7-b530-9a10b823a56b.jpg",
        Provider: {
          name: "Provider Mogote",
          phone: "997985755",
          address: "cll 24 n 81 2",
          email: "mogote@gmail.com",
        },
      },
      {
        name: "Bike Tour in Cascada de La Gloria",
        description:
          "An adventure that combine cycling and trekking in the mountains of Cordoba.",
        price: 8300,
        location: "Mina Clavero",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/08a341d1-560e-4c5b-ad5f-639e854ab8c2.jpg",
        Provider: {
          name: "Provider Gloria",
          phone: "554754454",
          address: "cll 55 n 81 22",
          email: "gloria@gmail.com",
        },
      },
    ],
  },
  {
    name: "Road Trip",
    Categories: [{ name: "Estadia", id: "3" }],
    price: 64000,
    ranking: 4.7,
    expiration_date: "2022-04-10",
    person: 2,
    detail:
      "Give away unique experiences. This Bigbox offers the possibility of enjoy the amazing roads of our contry  and rest in the best accommodations.",
    image: "https://www.clarin.com/img/2018/12/27/fgVkRFEtg_1256x620__1.jpg",
    Products: [
      {
        name: "Hathor Mendoza",
        description:
          "The road of the sunsets and good wine. A stay that you will remember for the rest of your life.",
        price: 64000,
        location: "Uspallata",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/09257ded-5086-40f7-a677-4d9f039f116d.jpg",
        Provider: {
          name: "Provider Hathor",
          phone: "85565456",
          address: "cll 4 n 48 42",
          email: "hathor@gmail.com",
        },
      },
      {
        name: "Rochester Calafate",
        description:
          "The land of imposing ice and unforgettable landscapes. Discover la Patagonia on his wildest side.",
        price: 64000,
        location: "Cordoba",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/080ad89b-7075-4387-9710-256a02e78013.jpg",
        Provider: {
          name: "Provider Rochester",
          phone: "8854454454",
          address: "cll 85 n 31 22",
          email: "rochester@gmail.com",
        },
      },
      {
        name: "Dazzler Rosario",
        description:
          "Discover Córdoba from a different view and enjoy this amazing ascent",
        price: 64000,
        location: " Villa Carlos Paz",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4m0lL54TShxw8EQ9mVpYUFuZLnZMHK15Sw&usqp=CAU",
        Provider: {
          name: "Provider Dazzler",
          phone: "99785755",
          address: "cll 4 n 8 25",
          email: "dazzler@gmail.com",
        },
      },
      {
        name: "Recoleta Grand",
        description:
          "Eclectic and cosmopolitan.The capital of tango, night plans and high quality gastronomy!",
        price: 64000,
        location: " Recoleta",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/f4b3a3a3-b868-4a1f-8783-9f5642fee40b.jpg",
        Provider: {
          name: "Provider Recoleta",
          phone: "224754454",
          address: "cll 55 n 81 22",
          email: "recoleta@gmail.com",
        },
      },
    ],
  },
  {
    name: "Weekend",
    Categories: [{ name: "Estadia", id: "3" }],
    price: 64000,
    ranking: 4.5,
    expiration_date: "2022-03-11",
    person: 2,
    detail:
      "Give away unique experiences. This Bigbox offers the possibility of enojoy the best inns, stays and hotels of the country.",
    image:
      "https://www.hiltongrandvacations.com/-/media/images/main/blogs/2020/10/if-youve-got-three-days-weve-got-8-weekend-getaway-travel-destinationsheaderoctober20/image.jpg?h=501&w=892&hash=3ECD1E8A4E1D34FDB1CF0E45172F8689",
    Products: [
      {
        name: "Tres Cruces Wine Lodge",
        description:
          "A night like no other, overlooking the mountains of La rioja, under the light of the stars.",
        price: 64000,
        location: "La Rioja",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/bb08aae2-ea14-41e0-b413-8dfe612a4d51.jpg",
        Provider: {
          name: "Provider Wine",
          phone: "555565456",
          address: "cll 54 n 45 42",
          email: "winecruces@gmail.com",
        },
      },
      {
        name: "Hotel Emperador",
        description:
          "A unique mix between style and comfort. Enjoy one the best hotels of Buenos Aires!",
        price: 64000,
        location: "Buenos Aires",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/c4cf7f94-f79c-4bbb-a52a-7c6e53397e8a.jpeg",
        Provider: {
          name: "Provider Emperador",
          phone: "4454454454",
          address: "cll 22 n 31 72",
          email: "emperador@gmail.com",
        },
      },
      {
        name: "Meliá Buenos Aires",
        description:
          "In the heart of the city, luxyry and comfort of Meliá to have an amazing stay.",
        price: 64000,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/6529ac0f-6808-4982-b8a6-53532d85c3c1.jpg",
        Provider: {
          name: "Provider Melia",
          phone: "997855755",
          address: "cll 2 n 28 25",
          email: "melia@gmail.com",
        },
      },
      {
        name: "Hilton Pilar",
        description:
          "A place with style and an incredible view to one of Argentina best golf course. A refuge near the city!",
        price: 64000,
        location: "Pilar",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/4f155735-8f30-41e9-a4ab-5da29c626993.jpg",
        Provider: {
          name: "Provider Hilton",
          phone: "2555454",
          address: "cll 5 n 1 552",
          email: "hilton@gmail.com",
        },
      },
    ],
  },
  {
    name: "Disconnect",
    Categories: [{ name: "Estar bien", id: "5" }],
    price: 3200,
    ranking: 4.4,
    expiration_date: "2022-03-11",
    person: 2,
    detail:
      "This Bigbox offers the possibility to disconnect from the routine with a moment of insight and relaxation with activities invloving yoga, meditation and other practices.",
    image: "https://fundaciondelcorazon.com/images/Blog/iStock-1028900652.jpg",
    Products: [
      {
        name: "Raja Yoga - Meditation",
        description:
          "Have you ever wonder what is exactly meditation?",
        price: 3200,
        location: "Online only",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/27fa31a2-b39f-4e6a-be3b-3917219fc1e6.jpg",
        Provider: {
          name: "Provider Raja",
          phone: "4445565456",
          address: "cll 544 n 445 442",
          email: "rajayoga@gmail.com",
        },
      },
      {
        name: "Meditation for beginners",
        description:
          "Learn the secrest of meditation and how to implement them in your rutine!",
        price: 3200,
        location: "Formato online",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKqm6L9y-XxhETr_ctvk7-eh2ZjeslooOhA&usqp=CAU",
        Provider: {
          name: "Provider Meditar",
          phone: "445554454",
          address: "cll 252 n 331 72",
          email: "meditacionprincipiantes@gmail.com",
        },
      },
      {
        name: "Zentropy",
        description:
          "Connect with your interiro: Meditation and astrological session.",
        price: 3200,
        location: "Palermo",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/36a7f36d-87d1-4d06-af2a-ce900b8e7b67.jpg",
        Provider: {
          name: "Provider Zentropia",
          phone: "997852255",
          address: "cll 22 n 48 15",
          email: "zentropia@gmail.com",
        },
      },
      {
        name: "Pawa Terapy",
        description:
          "Pawa Terapy offers a prodund and changing experience through Reiki with a reading of your energy.",
        price: 3200,
        location: "Belgrano",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/851a7cbb-7ae4-4d77-9109-f93bedeb0cd8.jpg",
        Provider: {
          name: "Provider Pawa",
          phone: "288888555454",
          address: "cll 58 n 12 2552",
          email: "pawa@gmail.com",
        },
      },
    ],
  },
  {
    name: "Duo Therapy",
    Categories: [{ name: "Estar bien", id: "5" }],
    price: 19100,
    ranking: 4.68,
    expiration_date: "2022-12-11",
    person: 2,
    detail:
      "Give away unique experiences. This Bigbox offers the best treatment for the body with the most elegants, prestigious spas and beauty centers of Argentina",
    image:
      "https://classpass.com/blog/wp-content/uploads/2021/12/Couples-Massage-Explained-ClassPass-1200x800.jpg",
    Products: [
      {
        name: "Alvear Icon",
        description:
          "A deep bodily experience in a space of total comfort.",
        price: 19100,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/871ce28e-384e-4c67-808f-35547ac67cd3.jpg",
        Provider: {
          name: "Provider Alvear",
          phone: "225565456",
          address: "cll 514 n 45 42",
          email: "alvear@gmail.com",
        },
      },
      {
        name: "Grand Brizo Spa",
        description:
          "Relax, armony and tranquility. A moment of peace in the city!",
        price: 19100,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/1c64d8a4-0982-4488-a9bd-8416f9953c47.jpg",
        Provider: {
          name: "Provider Grand",
          phone: "1122254454",
          address: "cll 524 n 431 72",
          email: "brizo@gmail.com",
        },
      },
      {
        name: "Villa Isidro",
        description:
          "A unique moment of relax at Villa Isidro!",
        price: 19100,
        location: "CABA",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/22b2cb0a-8687-4594-a137-8dbc58522e0b.jpeg",
        Provider: {
          name: "Provider Villa Isidro",
          phone: "9999852255",
          address: "cll 292 n 498 15",
          email: "isidro@gmail.com",
        },
      },
      {
        name: "Las Dalias",
        description:
          "Put a smile in your face, a moment of armony to renew your energy.",
        price: 19100,
        location: "Belgrano",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/851a7cbb-7ae4-4d77-9109-f93bedeb0cd8.jpg",
        Provider: {
          name: "Provider Dalias",
          phone: "288888555454",
          address: "cll 528 n 122 2552",
          email: "dalias@gmail.com",
        },
      },
    ],
  },
  {
    name: "Atelier",
    Categories: [{ name: "Cursos y Talleres", id: "1" }],
    price: 2680,
    ranking: 4.35,
    expiration_date: "2022-01-12",
    person: 1,
    detail:
      "Offers the possiblity of choosing between a selection of courses y workshops, to develop your creativity to its maximun expression.",
    image:
      "https://cdn.pixabay.com/photo/2019/01/04/16/20/paint-3913465__340.jpg",
    Products: [
      {
        name: "Experimental illustration workshop",
        description:
          "A place where you can choose between lessons of Ilustration, experimental tecniques and watercolor lessons.",
        price: 2680,
        location: " Florida",
        image:
          "https://cdn.pixabay.com/photo/2016/11/19/17/28/art-1840481__340.jpg",
        Provider: {
          name: "Ilustration",
          phone: "1023514154541",
          address: "Rue de Lyon 109, Florida",
          email: "cursito@gmail.com",
        },
      },
      {
        name: "Singing lessons",
        description:
          "Would you like to explore your passion for singing? Here you will take lessons to help you take your first stpes. It doesn't matters if you don't know how to sing.",
        price: 2680,
        location: " Miami",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/1c64d8a4-0982-4488-a9bd-8416f9953c47.jpg",
        Provider: {
          name: "Little music",
          phone: "102351414265",
          address: "2228 Willow Ln, Miami",
          email: "musiquita@gmail.com",
        },
      },
      {
        name: "Pottery Workshop El Fango",
        description:
          "Let your hands make wonderful things with pottery! Experince it in El Fango Pottery Workshop.",
        price: 2680,
        location: "Florida",
        image:
          "https://cdn.pixabay.com/photo/2018/03/04/19/47/ceramics-3199006__340.jpg",
        Provider: {
          name: "El Fango",
          phone: "1023514352665",
          address: " 53rd St Miami, Florida",
          email: "elfango@gmail.com",
        },
      },
    ],
  },
  {
    name: "Tech Culture",
    Categories: [{ name: "Cursos y Talleres", id: "1" }],
    price: 4500,
    ranking: 4.15,
    expiration_date: "2022-15-12",
    person: 1,
    detail:
      "Offers a variety of live online courses to train you in the future tendencies and master the necesary tools to enhance your creativity.",
    image:
      "https://cdn.pixabay.com/photo/2014/11/16/23/39/superhero-534120__340.jpg",
    Products: [
      {
        name: "UX/UI Desing",
        description:
          "Learn everything you need to know to master the art of UX/UI Desing.",
        price: 4500,
        location: " Florida",
        image:
          "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg",
        Provider: {
          name: "Desing Inc",
          phone: "10235635636541",
          address: " 60th St Miami, Florida",
          email: "desinginc@gmail.com",
        },
      },
      {
        name: "E-commerce",
        description:
          "Learn the keys to manage and E-commerce",
        price: 4500,
        location: "Florida",
        image:
          "https://web-bigbox.storage.googleapis.com/uploads/activity/1c64d8a4-0982-4488-a9bd-8416f9953c47.jpg",
        Provider: {
          name: "Musiquita",
          phone: "102351414265",
          address: "166th St Miami, Florida",
          email: "Webschool@gmail.com",
        },
      },
      {
        name: "Product Manager",
        description:
          "Learn how to make and manage digital products with the course Product Manager",
        price: 4500,
        location: "Louisiana",
        image:
          "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
        Provider: {
          name: "Manager SA",
          phone: "102586322665",
          address: "519 Fred Scott Rd Pollock, Louisiana",
          email: "managersa@gmail.com",
        },
      },
      {
        name: "WordPress",
        description:
          "Learn how to make web sites in a simple way for your business or your client's!",
        price: 4500,
        location: "Louisiana",
        image:
          "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600",
        Provider: {
          name: "Code Tech",
          phone: "16544986366588",
          address: "310 Palmetto St Bunkie, Louisiana",
          email: "codetech@gmail.com",
        },
      },
    ],
  },
  {
    name: "Flavores from the World",
    Categories: [{ name: "Gastronomia", id: "2" }],
    price: 8100,
    ranking: 4.8,
    expiration_date: "2022-24-10",
    person: 2,
    detail:
      "Find out what country you like its culture and gastronomy",
    image:
      "https://myhomeschoolproject.com.mx/wp-content/uploads/2021/01/sabores-1024x1024.png",
    Products: [
      {
        name: "Mexican Food",
        description: "Mexican food of the greatest quality",
        price: 8100,
        location: " Florida",
        image:
          "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/07/museo-comida-mexicana.jpg",
        Provider: {
          name: "Guadalupe",
          phone: "99235635636541",
          address: "cll 45 n 38 45",
          email: "guadalupe@gmail.com",
        },
      },
      {
        name: "Venezuelan Food",
        description: "Venezuelan food of the greatest quality",
        price: 8100,
        location: "Gale Terrace",
        image:
          "https://venezuelaquerida.com/wp-content/uploads/2019/05/vene-1024x555.jpg",
        Provider: {
          name: "losChamos",
          phone: "88351414265",
          address: "cll 80 n 22 50",
          email: "loschamos@gmail.com",
        },
      },
      {
        name: "Colombian Dinner",
        description: "Enjoy of a wondeful dinner with the best colombian food.",
        price: 8100,
        location: "CABA",
        image:
          "https://www.rociococinaencasa.com/wp-content/uploads/2020/07/arepas-comida-colombiana.png",
        Provider: {
          name: "Recetas Colombia",
          phone: "877586322665",
          address: "cll 10 n 21 85",
          email: "rColombia@gmail.com",
        },
      },
    ],
  },
  {
    name: "Flavors of the Coffee",
    Categories: [{ name: "Gastronomia", id: "2" }],
    price: 8100,
    ranking: 4.75,
    expiration_date: "2022-15-10",
    person: 2,
    detail:
      "For the lovers of this centennial infusion, coffee represents a world of smells and flavors like no other.",
    image: "https://blog.legis.com.co/hubfs/Exportaci%C3%B3n-de-caf%C3%A9.jpg",
    Products: [
      {
        name: "Love Coffee",
        description: "The best coffe to enjoy in the company of the person you love the most.",
        price: 8100,
        location: "Florida",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62as_rtXu-JXXl1-doSYVkT2dtRr0IjP04Q&usqp=CAU",
        Provider: {
          name: "Coffe and love",
          phone: "9635635636541",
          address: "cll 5 n 44 45",
          email: "Coffe@gmail.com",
        },
      },
      {
        name: "The smell of Coffee",
        description: "Enjoy the coffee with the greatest quelity you'll find in the city.",
        price: 8100,
        location: "Santa Fe",
        image:
          "https://images.hola.com/imagenes/cocina/escuela/2017042093556/consejos-como-elegir-mejor-cafe-etiquetas/0-439-527/elegir_cafe_consejos_t-t.jpg?tx=w_360",
        Provider: {
          name: "Coffe Shop Santa Fe",
          phone: "888351414265",
          address: "cll 66 n 22 55",
          email: "Aroma&Café@gmail.com",
        },
      },
      {
        name: "Coffee And Hearts",
        description: "The best coffee and the best company all in one place",
        price: 8100,
        location: "CABA",
        image:
          "https://euskovazza.com/wp-content/uploads/2019/07/identificar-buen-cafe.jpg",
        Provider: {
          name: "Coffee Shop Buenos Aires",
          phone: "81586322665",
          address: "cll 33 n 22 85",
          email: "lTacos@gmail.com",
        },
      },
    ],
  },
  {
    name: "Extreme",
    Categories: [{ name: "Aventura", id: "4" }],
    price: 12000,
    ranking: 4.75,
    expiration_date: "2022-15-10",
    person: 3,
    detail:
      "Give away unique experiences. This Bigbox offers the possibility of choosing an original and challenching..",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d6/36/7e.jpg",
    Products: [
      {
        name: "Safari Ruta 40",
        description:
          "Are you ready to live an amazing experice in Salta all day?",
        price: 12000,
        location: "Salta",
        image:
          "https://www.saltabiking.com/img/circuitos/cuesta-del-obispo-2.jpg",
        Provider: {
          name: "Tastil Turismo",
          phone: "9635635636541",
          address: "EN OFICINA MOVITRACK, CASEROS 468",
          email: "tastil_turismo@email.com",
        },
      },
      {
        name: "Canopy en el Cerro Lopéz",
        description: "You won't find many expriences as fun as this one!",
        price: 12000,
        location: "Mitre",
        image:
          "https://heymondo.es/blog/wp-content/uploads/2017/06/shutterstock_154191794_opt.jpg",
        Provider: {
          name: "Bastion Travel",
          phone: "+54 9 294 453 7024",
          address: "Mitre 442",
          email: "reservas@bastiontravel.com",
        },
      },
      {
        name: "Rafting in the Villegas river",
        description:
          "To the adrenaline of going down at full speed in the river, is added an imponent mountainous lanscape.",
        price: 12000,
        location: "CABA",
        image:
          "https://kayakk1.com/wp-content/uploads/2020/02/KAYAK-DE-MAR-PREFERENTE-2.jpg",
        Provider: {
          name: "Aguas Blancas",
          phone: "(02944) 432 799",
          address: "San Carlos de Bariloche, Parque Nacional Nahuel Huapí",
          email: "reservas@aguasblancas.com",
        },
      },
    ],
  },
  {
    name: "To Fly",
    Categories: [{ name: "Aventura", id: "4" }],
    price: 12000,
    ranking: 4.75,
    expiration_date: "2022-17-10",
    person: 2,
    detail:
      "Give away unique experiences. This Bigbox offers the possibility to feel the true adrenaline of freefalling, enjoying amazing landscapes.",
    image:
      "https://images.hola.com/imagenes/estar-bien/20180629126400/perder-miedo-volar/0-580-765/como-superar-el-miedo-a-volar-1-t.jpg",
    Products: [
      {
        name: "Pilote for one day",
        description:
          "Live the unique and exlcusive experience of what it feel to be a 'Pilote for one day'",
        price: 12000,
        location: "Buenos Aires",
        image:
          "https://www.qualityfly.com/wp-content/uploads/slide-4-new-generation-fleet-768x512.jpg",
        Provider: {
          name: " Fly On BA",
          phone: "549 11-3644-3445",
          address: "EN OFICINA MOVITRACK, ruta 202",
          email: "fly_onBa@email.com",
        },
      },
      {
        name: "Skydiving Rosario",
        description:
          "If you like adrenaline you cannot miss this experience of what it feels to fly!",
        price: 12000,
        location: "Rosario",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Bnt4EgnfWpSUOmTEKxJN5mdp5fIX4hdmNA&usqp=CAU",
        Provider: {
          name: "Paracaidismo Rosario",
          phone: "+54 341 309-1808",
          address: "Ruta 9 Km 374",
          email: " info@paracaidismorosario.com.ar",
        },
      },
      {
        name: "Romantic Fly",
        description:
          "A date for the skies of the city and enjoy of a romantic couple moment.",
        price: 12000,
        location: "CABA",
        image:
          "https://www.parquedasaves.com.br/wp-content/uploads/2019/06/img01.jpg",
        Provider: {
          name: "Fly on Ba",
          phone: "+549 11-3644-3445",
          address: "EN OFICINA MOVITRACK, ruta 202",
          email: "fly_onBa@email.com",
        },
      },
    ],
  },
  {
    name: "Relax",
    Categories: [{ name: "Estar bien", id: "5" }],
    price: 4320,
    ranking: 4.2,
    expiration_date: "2022-17-10",
    person: 1,
    detail:
      "Give away unique experiences. This Bigbox offers massage sessions and body treatments in the best spas of Argentina",
    image:
      "https://www.guia-estetica.com.ar/wp-content/uploads/2013/09/Foto-Tratamientos-Faciales.jpg",
    Products: [
      {
        name: "Shizendo Center",
        description:
          "Oriental Therapies for relaxing, improve your health and have a great time.",
        price: 4320,
        location: "Buenos Aires",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjxb4r7AN3Zyuu3DOY3a1ISAjoEuVtPardw&usqp=CAU",
        Provider: {
          name: "Terapia asiatica",
          phone: "23221858384",
          address: "cll 45 n 8 55",
          email: "terapiAsiatica@gmail.com",
        },
      },
      {
        name: "Heaven & Earth Spa",
        description:
          "Discover a true armony between mind and body and renew your energy.",
        price: 4320,
        location: "Rosario",
        image:
          "https://www.guia-estetica.com.ar/wp-content/uploads/2013/09/Foto-Tratamientos-Faciales.jpg",
        Provider: {
          name: "Spa center",
          phone: "+54 341 309-55508",
          address: "Ruta 9 Km 37455",
          email: "spaCenter@gmail.com",
        },
      },
      {
        name: "Spa El Roble, Villa Isidro",
        description:
          "An Experience specially designed for your body mind and soul.",
        price: 4320,
        location: "CABA",
        image:
          "https://cdn.colombia.com/sdi/2018/07/25/cinco-razones-por-los-que-debes-ir-a-un-spa-658055.jpg",
        Provider: {
          name: "sociedad villa",
          phone: "+549 11-3554-3445",
          address: "cll 225 n 28 15",
          email: "sociedad-villa@gmail.com",
        },
      },
    ],
  },
  {
    name: "Look & Style",
    Categories: [{ name: "Estar bien", id: "5" }],
    price: 3520,
    ranking: 4,
    expiration_date: "2022-17-10",
    person: 1,
    detail:
      "Give away unique experiences. This Bigbox offers beaty lessons, image advice and complete sessions in the best beauty centers of the city.",
    image:
      "https://media.revistaad.es/photos/60c75796a82d4e5d216c703b/master/w_1800,h_1200,c_limit/31828.jpg",
    Products: [
      {
        name: "Beauty Break",
        description:
          "The time has come to give your hands the care and love they need!",
        price: 3520,
        location: "Buenos Aires",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWYxYlj9v6xDYdoec9jIH8_7BwAA5peqoNw&usqp=CAU",
        Provider: {
          name: "Sociedad beauty",
          phone: "288888664",
          address: "cll 11 n 8 55",
          email: "sociedad_beauty@gmail.com",
        },
      },
      {
        name: "Plan D",
        description:
          "A new concept of beauty. Dare to dicover your look!",
        price: 3520,
        location: "Rosario",
        image:
          "https://www.comunicare.es/wp-content/uploads/2021/01/Publicidad-para-barberia.jpg",
        Provider: {
          name: "Peluqueria Center",
          phone: "+54 3551 309-5555508",
          address: "Ruta 19 Km 371455",
          email: "peluqueria@gmail.com",
        },
      },
      {
        name: "Roho Hair Boutique",
        description:
          "An Experience specially designed for you and your look.",
        price: 3520,
        location: "CABA",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz7cw9wRGvC1kfFH91UI8CsMPrfETSxR6dw&usqp=CAU",
        Provider: {
          name: "Boutique Center",
          phone: "+549 11-3554-3445",
          address: "cll 25 n 218 15",
          email: "boutique@gmail.com",
        },
      },
      {
        name: "Beauty  Rafaela",
        price: 3520,
        description:
          "Renew the beauty of your hands in one of the best beatuy centers of Rafaela",
        image:
          "https://media.revistaad.es/photos/60c75796a82d4e5d216c703b/master/w_1800,h_1200,c_limit/31828.jpg",
        location: "CABA",
        Provider: {
          name: "Sociedad Estetica",
          phone: "99988855455",
          address: "cll 15 n 18 25",
          email: "sociedad-estetica@gmail.com",
        },
      },
    ],
  },
  {
    name: "Field Day",
    price: 24000,
    Categories: [{ id: "3", name: "Stay" }],
    ranking: 4.8,
    person: "2",
    expiration_date: "22-10-02",
    details:
      "Give unique experiences. This Bigbox offers the opportunity to escape from routine and enjoy a day in the country in the best estancias and lodges in the country.",
    image:
      "https://revista-lagunas.s3.us-east-2.amazonaws.com/2021/10/311-7-lugares-perfectos-para-un-dia-de-campo-en-buenos-aires-124-big.jpg",
    Products: [
      {
        name: "Estancia Old Post",
        price: 24000,
        description:
          "Come and enjoy the best Argentine customs with an exceptional field day!",
        image:
          "https://www.infocanuelas.com/app/media/puesto-viejo-resto-01.jpeg",
        location: "GBA South",
        Provider: {
          name: "Provider old stay",
          phone: "1111888888",
          address: "cll 4 n 37 40",
          email: "puestoviejo@gmail.com",
        },
      },
      {
        name: "Estancia La Candelaria",
        price: 24000,
        description:
          "Connect with nature, breathe fresh air and get to know the tradition of the Argentine countryside.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/44/17/1a/estancia-candelaria.jpg",
        location: "Buenos Aires Province",
        Provider: {
          name: "Provider the candelaria ",
          phone: "111145445",
          address: "cll 7 n 7 40",
          email: "candelaria@gmail.com",
        },
      },
      {
        name: "Estancia La Alameda",
        price: 24000,
        description:
          "History, nature, tradition, sport, culture and gastronomy are combined in a perfect plan.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/0d/6e/9a/b6/hotel-boutiqe-estancia.jpg",
        location: "Buenos Aires Provincia",
        Provider: {
          name: "Provider the mall ",
          phone: "12245445",
          address: "cll 8 n 2 12",
          email: "alameda@gmail.com",
        },
      },
      {
        name: "Estancia La Sistina",
        price: 24000,
        description: "A picnic on an island far from everything.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/cb/15/25/estancia-la-sistina.jpg?w=1000&h=-1&s=1",
        location: "CABA",
        Provider: {
          name: "provider the sistine",
          phone: "4545456",
          address: "cll 78 n 112 5", 
          email: "sistina@gmail.com",
        },
      },
    ],
  },
  {
    name: "Urban Hotels",
    price: 18000,
    Categories: [
      {
        id: "3",
        name: "Stay",
      },
    ],
    ranking: 3.8,
    person: "3",
    expiration_date: "02-12-22",
    details:
      "Give unique experiences. This Bigbox offers the possibility of enjoying a different night in the most outstanding urban hotels in the country.",
    image:
      "https://media-magazine.trivago.com/wp-content/uploads/2019/10/03101635/hoteles-urbanos-ayre-hotel-sevilla-fachada.jpg",
      Products: [
        {
          name: "Dazzler Rosario",
          price: 1800,
          description:
            "Located in the La Refinería neighborhood, one of the most modern in Rosario, a hotel made to measure for you.",
        image:
          "https://media.cdn.puntobiz.com.ar/122017/1617315859528.webp?cw=984&ch=553&extw=jpg",
          location: "Santa Fe",
          Provider: {
            name: "Rosario Center",
            phone: "11451848",
            address: "cll 7 n 18 01",
          email: "rosario@gmail.com",
        },
      },
      {
        name: "Savoy Splendor",
        price: 1800,
        description:
          "A historic building, a unique proposal that invites guests to feel like protagonists of their trip.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/23/e4/97/f4/exterior.jpg",
        location: "Santa Fe",
        Provider: {
          name: "Savoy Stay",
          phone: "178148845",
          address: "cll 75 n 45 4",
          email: "savoy@gmail.com",
        },
      },
      {
        name: "Howard Johnson Plaza Buenos Aires",
        price: 1800,
        description:
          "In the epicenter of the city of Buenos Aires, a place to relax and enjoy a night of wellness.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/0d/6e/9a/b6/hotel-boutiqe-estancia.jpg",
        location: "CABA",
        Provider: {
          name: "Provider howard ",
          phone: "88245525",
          address: "cll 1 n 55 72",
          email: "howard@gmail.com",
        },
      },
      {
        name: "Argenta Suites Hotel",
        price: 1800,
        description: "Escape from the routine in the middle of the city!",
        image:
          "https://www.atrapalo.pe/hoteles/picture/l/1718/9/8/413790377.jpg",
        location: "CABA",
        Provider: {
          name: "provider suites ",
          phone: "878284256",
          address: "cll 15 n 40 5",
          email: "suites@gmail.com",
        },
      },
    ],
  },
  {
    name: "Blend",
    price: 3000,
    Categories: [
      {
        id: "6",
        name: "Mix",
      },
    ],
    ranking: "4.65",
    person: "2",
    expiration_date: "2022-31-10",
    details:
      "This Bigbox offers the possibility of enjoying an experience of adventure, wellness, gastronomy or a selection of courses and workshops throughout Argentina.",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQEeSryTWln3tg/company-logo_200_200/0/1646434511596?e=2147483647&v=beta&t=Tbxnhn5Sq4YCLs8kbsMl4t4oMPFNwg5t7trkHvg4t34",
      Products: [
        {
          name: "Cavalcade, Estancia Las Carreras",
          price: "3000",
          description:
            "The old manor house was built by the Jesuits in 1718, becoming a historical place in Latin America.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/02/35/13/c2/le-patio-interieur.jpg",
          location: "Provincial route 325 Km. 13. Tafi del Valle.",
          Provider: {
            name: "Stay the Races",
            phone: "1023214154541",
            address: "1963 Adams Drive",
          email: "estancialascarreras@gmail.com",
        },
      },
      {
        name: "Hotel Patagonia",
        price: "3000",
        description:
          "If you are looking for a moment of relaxation, do not hesitate to ask about this experience. Without a doubt, the water circuit will leave you speechless.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/ce/0c/66/frente-nocturno.jpg?w=1200&h=-1&s=1",
          location: "Fagnano 54. Rio Gallegos.",
          Provider: {
            name: "Hotel Patagonia",
            phone: "1023514321541",
            address: "885 Spring Street",
          email: "lagoclaro@gmail.com",
        },
      },
      {
        name: "Plan D, Hair Salon",
        price: "3000",
        description:
          "A new concept of beauty indoors. Go ahead and discover your look!",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlC5hxBQ9UhrrSZ3M3yNETvBw9HHFWrDc9JQ&usqp=CAU",
        location: "Villa Crespo",
        Provider: {
          idProvider: "8761123",
          name: "villa crespo hairdresser",
          phone: "1023514153211",
          address: "3429 Nixon Avenue",
          email: "villacrespo123@gmail.com",
        },
      },
    ],
  },
];

async function loadMockBoxes() {
  try {
    await Box.bulkCreate(boxes, {
      include: [
        {
          model: Products,
          include: Provider,
        },
        { model: Category, ignoreDuplicates: true },
      ],
    });

    console.log("Boxes loaded to DB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  loadMockBoxes,
};
