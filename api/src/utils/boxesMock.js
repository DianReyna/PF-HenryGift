const {Box,Products,Provider,Category} = require("../database/index")

const boxes = [
  {
    name : "Bodegones",
    Categories:[{name:"Gastronomia",id:"2"}],
    price: 5600,
    ranking: 4.45,
    expiration_date: "04/10/2022",
    person:2,
    detail:"Esta Bigbox ofrece la posibilidad de elegir entre los más destacados Bodegones de la Ciudad Porteña.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvd4yFVtaN0FzSv1pCtG3iQOlY9_pskFDkA&usqp=CAU",
    Products:[
      {
        name:"Encuentro Nativo",
        description:"Aquí podrán encontrarse con la gastronomía, el arte y la cultura de nuestro país. Show de tango y folklore con músicos en vivo, bailarines que exhiben danzas autóctonas argentinas y exposición de cuadros de pintores locales.",
        price:5600,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/13d1eb9b-d97b-49d2-aeae-b481d63979cb.jpg",
        Provider:{
          name:"Provider Nativo",
          phone:"5465456",
          address:"cll 45 n 38 45",
          email:"nativo@gmail.com"
        }
      },
      {
        name:"Beba Cocina",
        description:"Disfrutá de platos que remiten a la comida casera de la abuela, pero con una vuelta de tuerca más.",
        price:5600,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/9655defc-8270-46cd-9079-ab783129ff8c.jpeg",
        Provider:{
          name:"Provider Cocina",
          phone:"54654454",
          address:"cll 42 n 34 4",
          email:"cocina@gmail.com"
        }
      },
      {
        name:"Bodegón La Pipeta",
        description:"Baja las escaleras para encontrarte con el bodegón más canchero del microcentro.",
        price:5600,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/e8acdf92-301a-4e20-a667-3ab6fe290af9.jpg",
        Provider:{
          name:"Provider Pipeta",
          phone:"58854454",
          address:"cll 44 n 34 4",
          email:"pipeta@gmail.com"
        }
      },
      {
        name:"Pulpería Quilapán",
        description:"Lugar distinto, con historia y tradición Argentina. Excelente calidad y un exquisito vino de autor hacen de esta pulpería, una cita obligada.",
        price:5600,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/0818e9f3-4a79-4f3e-b238-b9042f4cfb70.jpg",
        Provider:{
          name:"Provider Pulperia",
          phone:"884654454",
          address:"cll 4 n 38 2",
          email:"pulperia@gmail.com"
        }
      }
    ]

  },
  {
    name : "Veggie",
    Categories:[{name:"Gastronomia",id:"2"}],
    price: 4350,
    ranking: 4.66,
    expiration_date: "04/10/2022",
    person:2,
    detail:"Regalá experiencias gastronómicas únicas. Esta Bigbox, para dos personas, ofrece la posibilidad de elegir entre los mejores platos veganos y vegetarianos de la ciudad.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjosdJu2ms3hnuMSYBqFCDB-zNZWzNDV9F0w&usqp=CAU",
    Products:[
      {
        name:"B-Fresh",
        description:"Disfruta del bienestar de alimentarte rico, sano y nutritivo! Conoce las opciones de frutas y verduras orgánicas",
        price:4350,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/e97c6dc6-b2f0-4b75-b0e7-16e20b0f4a2a.jpg",
        Provider:{
          name:"Provider Fresh",
          phone:"8465456",
          address:"cll 12 n 08 22",
          email:"fresh@gmail.com"
        }
      },
      {
        name:"Fifi Almacen",
        description:"Cocina a base de plantas, sabores únicos y totalmente naturales.",
        price:4350,
        location:"CABA",
        image:"https://previews.123rf.com/images/mizina/mizina1608/mizina160800119/63623934-ensalada-de-vegetales-org%C3%A1nicos-frescos-con-alforf%C3%B3n-para-almuerzo-vegetariano-saludable.jpg",
        Provider:{
          name:"Provider Fifi",
          phone:"12154454",
          address:"cll 5 n 3 42",
          email:"fifi@gmail.com"
        }
      },
      {
        name:"Fauna",
        description:"Café colombiano, plantas y sustentabilidad te esperan en Fauna. Descubrí este café fusión y enamorate!",
        price:4350,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/c0944929-23d1-4705-a68d-0818a5619971.jpg",
        Provider:{
          name:"Provider Fauna",
          phone:"99854454",
          address:"cll 4 n 34 24",
          email:"faunaa@gmail.com"
        }
      },
      {
        name:"Alchemy",
        description:"Disfruta de unas excelentes pizzas acompañadas del helado mas original de Palermo",
        price:4350,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/aa707450-2005-406c-bc78-2516e70ab81e.jpeg",
        Provider:{
          name:"Provider Alchemy",
          phone:"834754454",
          address:"cll 45 n 8 2",
          email:"alchemy@gmail.com"
        }
      }
    ]

  },
  {
    name : "Tentacion",
    Categories:[{name:"Gastronomia",id:"2"}],
    price: 2100,
    ranking: 4.71,
    expiration_date: "04/10/2022",
    person:3,
    detail:"Regalá o regalate experiencias únicas. Esta Bigbox ofrece deliciosos postres y helados para disfrutar en la comodidad de tu casa.",
    image:"https://heladitos.com/wp-content/uploads/2018/01/helado_extravagante.jpg",
    Products:[
      {
        name:"Podio",
        description:"Con mas de 40 años de experiencia, podio helado genuino te va a sorprender con sus distinguidos sabores.",
        price:2100,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/0db6cff5-50c2-45b1-810b-c4374d64d35e.jpg",
        Provider:{
          name:"Provider Podio",
          phone:"998465456",
          address:"cll 1 n 108 22",
          email:"podio@gmail.com"
        }
      },
      {
        name:"Occo",
        description:"¿Listo para descubrir los sabores que occo tiene para ofrecerte? Helado a cualquier hora del día.",
        price:2100,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/68aa5794-116c-4a01-b7b2-c36274d7444b.jpg",
        Provider:{
          name:"Provider Occo",
          phone:"155154454",
          address:"cll 15 n 13 2",
          email:"occo@gmail.com"
        }
      },
      {
        name:"D-Pop",
        description:"El mejor postre calidad premium y en palito, ideal para festejar y disfrutar!",
        price:2100,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/a062a034-83b4-4a73-a4f6-db4eb3b9fc1b.jpg",
        Provider:{
          name:"Provider Pop",
          phone:"79857454",
          address:"cll 24 n 24 24",
          email:"pop@gmail.com"
        }
      },
      {
        name:"Krim",
        description:"Disfruta de unas excelentes pizzas acompañadas del helado mas original de Palermo",
        price:2100,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/7cc4632b-a42c-4bfc-8d33-b0b17b7b8bfd.jpg",
        Provider:{
          name:"Provider Krim",
          phone:"22234754454",
          address:"cll 5 n 48 2",
          email:"Krim@gmail.com"
        }
      }
    ]

  },
  {
    name : "Al Agua",
    Categories:[{name:"Aventura",id:"4"}],
    price: 8300,
    ranking: 5,
    expiration_date: "04/10/2022",
    person:2,
    detail:"Regala experiencias únicas. Esta bigbox ofrece la posibilidad de disfrutar divertidas actividades en contacto con el agua!",
    image:"https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2020/07/15/wakeboard.jpg",
    Products:[
      {
        name:"Travesía en Kayak",
        description:"Preparense, porque la travesía está por comenzar!",
        price:8300,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/0ba7a3c0-7c3c-4a9f-9803-12f0bd3e95d3.jpg",
        Provider:{
          name:"Provider Kayak",
          phone:"995565456",
          address:"cll 14 n 18 2",
          email:"kayak@gmail.com"
        }
      },
      {
        name:"Travesía en SUP",
        description:"Pongan a prueba toda su destreza sobre el agua!",
        price:8300,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/56b187bf-7828-434a-96a1-12121c4c23e7.jpg",
        Provider:{
          name:"Provider SUP",
          phone:"555154454",
          address:"cll 5 n 3 12",
          email:"sup@gmail.com"
        }
      },
      {
        name:"Kayak por los lagos",
        description:"Preparate para disfrutar un paisaje único, en el medio lago rodeado de naturaleza",
        price:8300,
        location:"Rio Negro",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/0a2ec939-8321-4afa-9750-c55eb2c0717b.jpg",
        Provider:{
          name:"Provider Lagos",
          phone:"7985755",
          address:"cll 22 n 21 22",
          email:"rionegro@gmail.com"
        }
      },
      {
        name:"Buceo de bautismo",
        description:"Los esperamos para sumergirse en el increíble mundo submarino",
        price:8300,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/c9f43e4f-d3c1-463f-ad15-0ee20fe74757.jpg",
        Provider:{
          name:"Provider Buceo",
          phone:"234754454",
          address:"cll 15 n 8 22",
          email:"buceo@gmail.com"
        }
      }
    ]

  },
  {
    name : "Modo Travesía",
    Categories:[{name:"Aventura",id:"4"}],
    price: 8300,
    ranking: 4.8,
    expiration_date: "04/10/2022",
    person:2,
    detail:"Regala experiencias únicas. Esta bigbox ofrece la posibilidad de vivir distintas excursiones alrededor de todo nuestro país",
    image:"https://cdn.britannica.com/94/125794-050-FB09B3F4/Hikers-Gore-Range-Mountains-Denver.jpg",
    Products:[
      {
        name:"Senderismo en Laguna de los Padres",
        description:"Experiencia renovadora, donde caminarás aprendiendo y observando todo tipo de flora y fauna!",
        price:8300,
        location:"Mar del Plata",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/590736ba-b019-4215-a845-7bdce53ee28a.jpg",
        Provider:{
          name:"Provider Laguna Padres",
          phone:"8895565456",
          address:"cll 24 n 28 2",
          email:"lagunapadres@gmail.com"
        }
      },
      {
        name:"Trekking en La Cumbrecita",
        description:"Recorrido Entre duendes y cascadas por La Cumbrecita",
        price:8300,
        location:"Cordoba",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/937bb13a-da50-4d65-b19f-da5892c3ee31.jpg",
        Provider:{
          name:"Provider Cumbrecita",
          phone:"554454454",
          address:"cll 45 n 34 12",
          email:"cumbrecita@gmail.com"
        }
      },
      {
        name:"Ascenso al Cerro Mogote",
        description:"Conocé Córdoba desde otra perspectiva disfrutando de este increíble ascenso",
        price:8300,
        location:" Villa Carlos Paz",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/5e11c891-4833-45e7-b530-9a10b823a56b.jpg",
        Provider:{
          name:"Provider Mogote",
          phone:"997985755",
          address:"cll 24 n 81 2",
          email:"mogote@gmail.com"
        }
      },
      {
        name:"Bike Tour a la Cascada de La Gloria",
        description:"Una aventura que combina ciclismo y trekking por las sierras cordobesas.",
        price:8300,
        location:"Mina Clavero",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/08a341d1-560e-4c5b-ad5f-639e854ab8c2.jpg",
        Provider:{
          name:"Provider Gloria",
          phone:"554754454",
          address:"cll 55 n 81 22",
          email:"gloria@gmail.com"
        }
      }
    ]

  },
  {
    name : "Viaje en Ruta",
    Categories:[{name:"Estadia",id:"3"}],
    price: 64000,
    ranking: 4.7,
    expiration_date: "04/10/2022",
    person:2,
    detail:"Regalá experiencias únicas. Esta Bigbox ofrece la posibilidad de disfrutar las encantadoras rutas de nuestro país en auto junto a Hertz y descansar en los mejores alojamientos.",
    image:"https://www.clarin.com/img/2018/12/27/fgVkRFEtg_1256x620__1.jpg",
    Products:[
      {
        name:"Hathor Mendoza",
        description:"El camino de los atardeceres y el buen vino. Una estadía que vas a recordar por el resto de tu vida.",
        price:64000,
        location:"Uspallata",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/09257ded-5086-40f7-a677-4d9f039f116d.jpg",
        Provider:{
          name:"Provider Hathor",
          phone:"85565456",
          address:"cll 4 n 48 42",
          email:"hathor@gmail.com"
        }
      },
      {
        name:"Rochester Calafate",
        description:"Tierra de imponentes hielos y paisajes inolvidables. Conocé la Patagonia en su lado más salvaje.",
        price:64000,
        location:"Cordoba",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/080ad89b-7075-4387-9710-256a02e78013.jpg",
        Provider:{
          name:"Provider Rochester",
          phone:"8854454454",
          address:"cll 85 n 31 22",
          email:"rochester@gmail.com"
        }
      },
      {
        name:"Dazzler Rosario",
        description:"Conocé Córdoba desde otra perspectiva disfrutando de este increíble ascenso",
        price:64000,
        location:" Villa Carlos Paz",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4m0lL54TShxw8EQ9mVpYUFuZLnZMHK15Sw&usqp=CAU",
        Provider:{
          name:"Provider Dazzler",
          phone:"99785755",
          address:"cll 4 n 8 25",
          email:"dazzler@gmail.com"
        }
      },
      {
        name:"Recoleta Grand",
        description:"Ecléctica y cosmopolita. La capital del tango, los planes nocturnos y la alta gastronomía!",
        price:64000,
        location:" Recoleta",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/f4b3a3a3-b868-4a1f-8783-9f5642fee40b.jpg",
        Provider:{
          name:"Provider Recoleta",
          phone:"224754454",
          address:"cll 55 n 81 22",
          email:"recoleta@gmail.com"
        }
      }
    ]

  },
  {
    name : "Weekend",
    Categories:[{name:"Estadia",id:"3"}],
    price: 64000,
    ranking: 4.5,
    expiration_date: "03/11/2022",
    person:2,
    detail:"Regalá experiencias únicas. Esta Bigbox ofrece la posibilidad de disfrutar de las mejores hosterías, estancias y hoteles más encantadores del país.",
    image:"https://www.hiltongrandvacations.com/-/media/images/main/blogs/2020/10/if-youve-got-three-days-weve-got-8-weekend-getaway-travel-destinationsheaderoctober20/image.jpg?h=501&w=892&hash=3ECD1E8A4E1D34FDB1CF0E45172F8689",
    Products:[
      {
        name:"Tres Cruces Wine Lodge",
        description:"Una noche sin igual con vista a la cordillera riojana, bajo la luz de las estrellas.",
        price:64000,
        location:"La Rioja",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/bb08aae2-ea14-41e0-b413-8dfe612a4d51.jpg",
        Provider:{
          name:"Provider Wine",
          phone:"555565456",
          address:"cll 54 n 45 42",
          email:"winecruces@gmail.com"
        }
      },
      {
        name:"Hotel Emperador",
        description:"Una unión única entre estilo y confort. Disfrutá de uno de los mejores hoteles de Buenos Aires!",
        price:64000,
        location:"Cordoba",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/c4cf7f94-f79c-4bbb-a52a-7c6e53397e8a.jpeg",
        Provider:{
          name:"Provider Emperador",
          phone:"4454454454",
          address:"cll 22 n 31 72",
          email:"emperador@gmail.com"
        }
      },
      {
        name:"Meliá Buenos Aires",
        description:"En pleno centro porteño, el lujo y la comodidad de Meliá para que tengas una estadía excepcional.",
        price:64000,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/6529ac0f-6808-4982-b8a6-53532d85c3c1.jpg",
        Provider:{
          name:"Provider Melia",
          phone:"997855755",
          address:"cll 2 n 28 25",
          email:"melia@gmail.com"
        }
      },
      {
        name:"Hilton Pilar",
        description:"Espacios con estilo y vistas increíbles a uno de los campos de golf más importantes de Argentina. ¡Un refugio cerca de la ciudad!",
        price:64000,
        location:"Pilar",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/4f155735-8f30-41e9-a4ab-5da29c626993.jpg",
        Provider:{
          name:"Provider Hilton",
          phone:"2555454",
          address:"cll 5 n 1 552",
          email:"hilton@gmail.com"
        }
      }
    ]

  },
  {
    name : "(Des) Conectar",
    Categories:[{name:"Estar bien",id:"5"}],
    price: 3200,
    ranking: 4.4,
    expiration_date: "03/11/2022",
    person:2,
    detail:"Esta Bigbox ofrece la posibilidad de desconectar de la rutina con un momento de introspección y relajación a través de actividades de yoga, meditación y otras prácticas.",
    image:"https://fundaciondelcorazon.com/images/Blog/iStock-1028900652.jpg",
    Products:[
      {
        name:"Raja Yoga - Meditación",
        description:"¿Alguna vez te has preguntado qué es exactamente la meditación?",
        price:3200,
        location:"Formato online",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/27fa31a2-b39f-4e6a-be3b-3917219fc1e6.jpg",
        Provider:{
          name:"Provider Raja",
          phone:"4445565456",
          address:"cll 544 n 445 442",
          email:"rajayoga@gmail.com"
        }
      },
      {
        name:"Meditación para principiantes",
        description:"Aprendé los secretos de la meditación y finalizá la experiencia implementándolos!",
        price:3200,
        location:"Formato online",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKqm6L9y-XxhETr_ctvk7-eh2ZjeslooOhA&usqp=CAU",
        Provider:{
          name:"Provider Meditar",
          phone:"445554454",
          address:"cll 252 n 331 72",
          email:"meditacionprincipiantes@gmail.com"
        }
      },
      {
        name:"Zentropía",
        description:"Conectate con tu interior: Meditación y sesión astrológica.",
        price:3200,
        location:"Palermo",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/36a7f36d-87d1-4d06-af2a-ce900b8e7b67.jpg",
        Provider:{
          name:"Provider Zentropia",
          phone:"997852255",
          address:"cll 22 n 48 15",
          email:"zentropia@gmail.com"
        }
      },
      {
        name:"Pawa Terapias",
        description:"Pawa Terapias te propone una experiencia profunda y transformadora a través del Reiki con una lectura energética. Veni armonizate",
        price:3200,
        location:"Belgrano",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/851a7cbb-7ae4-4d77-9109-f93bedeb0cd8.jpg",
        Provider:{
          name:"Provider Pawa",
          phone:"288888555454",
          address:"cll 58 n 12 2552",
          email:"pawa@gmail.com"
        }
      }
    ]

  },
  {
    name : "Duo Therapy",
    Categories:[{name:"Estar bien",id:"5"}],
    price: 19100,
    ranking: 4.68,
    expiration_date: "12/11/2022",
    person:2,
    detail:"Regalá experiencias únicas. Esta Bigbox ofrece los mejores tratamientos corporales en los más elegantes y prestigiosos spas y centros de estética de Argentina",
    image:"https://classpass.com/blog/wp-content/uploads/2021/12/Couples-Massage-Explained-ClassPass-1200x800.jpg",
    Products:[
      {
        name:"Alvear Icon",
        description:"Una profunda experiencia sensorial en un espacio de total tranquilidad.",
        price:19100,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/871ce28e-384e-4c67-808f-35547ac67cd3.jpg",
        Provider:{
          name:"Provider Alvear",
          phone:"225565456",
          address:"cll 514 n 45 42",
          email:"alvear@gmail.com"
        }
      },
      {
        name:"Grand Brizo Spa",
        description:"Relax, armonía y tranquilidad. Un momento de paz en la ciudad!",
        price:19100,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/1c64d8a4-0982-4488-a9bd-8416f9953c47.jpg",
        Provider:{
          name:"Provider Grand",
          phone:"1122254454",
          address:"cll 524 n 431 72",
          email:"brizo@gmail.com"
        }
      },
      {
        name:"Villa Isidro",
        description:"Un momento único de relax para compartir en Villa Isidro!",
        price:19100,
        location:"CABA",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/22b2cb0a-8687-4594-a137-8dbc58522e0b.jpeg",
        Provider:{
          name:"Provider Villa Isidro",
          phone:"9999852255",
          address:"cll 292 n 498 15",
          email:"isidro@gmail.com"
        }
      },
      {
        name:"Las Dalias",
        description:"Poné una sonrisa en tu rostro, armonía en tu cuerpo y renová tus energías.",
        price:19100,
        location:"Belgrano",
        image:"https://web-bigbox.storage.googleapis.com/uploads/activity/851a7cbb-7ae4-4d77-9109-f93bedeb0cd8.jpg",
        Provider:{
          name:"Provider Dalias",
          phone:"288888555454",
          address:"cll 528 n 122 2552",
          email:"dalias@gmail.com"
        }
      }
    ]

  }
]

async function loadMockBoxes(){

  try {

    await Box.bulkCreate(boxes,{

      include: [{
        model: Products,
        include: Provider
      },{model:Category,ignoreDuplicates: true} ],
      
     
      
    })

   console.log("Boxes loaded to DB")

  } catch (error) {
    console.log(error)
  }
}

module.exports={
  loadMockBoxes
}

