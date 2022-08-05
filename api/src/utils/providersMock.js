const {Provider} = require("../database/index")

const providers = [
 
  {
    "name": "cursitos",
          "phone": "1023514154541",
          "address": "Rue de Lyon 109, Florida",
          "email": "cursito@gmail.com"
  },
  {
    "name": "musiquita",
          "phone": "102351414265",
          "address": "2228 Willow Ln, Miami",
          "email": "musiquita@gmail.com"
  },
  {
    "name": "El Fango",
          "phone": "1023514352665",
          "address": " 53rd St Miami, Florida",
          "email": "elfango@gmail.com"
  },
  {
    "name": "Desing Inc",
    "phone": "10235635636541",
    "address": " 60th St Miami, Florida",
    "email": "desinginc@gmail.com"
  },
  {
    "name": "Web School",
    "phone": "102351414265",
    "address": "166th St Miami, Florida",
    "email": "Webschool@gmail.com"
  },
  {
    "name": "Manager SA",
    "phone": "102586322665",
    "address": "820 863rd Hwy Winnsboro, Louisiana",
    "email": "managersa@gmail.com"
  },
  {
    "name": "Code Tech",
    "phone": "165449863665",
    "address": "310 Palmetto St Bunkie, Louisiana",
    "email": "codetech@gmail.com"
  },
  {
    "name": "guadalupe",
    "phone": "1023514154541",
    "address": "cll 45 n 38 45",
    "email": "guadalupe@gmail.com"
  },
  {
    "name": "losChamos",
    "phone": "1023514154541",
    "address": "cll 80 n 38 45",
    "email": "loschamos@gmail.com"
  },
  {
    "name": "los Tacos",
    "phone": "1023514154541",
    "address": "cll 38 n 38 45",
    "email": "lTacos@gmail.com"
  },
  {
    "name": "Recetas Colombia",
    "phone": "1023514154541",
    "address": "cll 54 n 38 45",
    "email": "rColombia@gmail.com"
  },
  {
    "name": "Coffe and love",
    "phone": "1023514154541",
    "address": "cll 45 n 38 45",
    "email": "Coffe@gmail.com"
  },
  {
    "name": "Aroma y Café",
    "phone": "1023514154541",
    "address": "cll 80 n 38 45",
    "email": "Aroma&Café@gmail.com"
  },
  {
    "name": "cafe corazoncitos",
    "phone": "1023514154541",
    "address": "cll 15 n 38 45",
    "email": "lTacos@gmail.com"
  },
  {
    "name": "Bastion Travel",
          "phone": "+54 9 294 453 7024",
          "address": "Mitre 442",
          "email": "reservas@bastiontravel.com"
  },
  {
    "name": "Aguas Blancas",
    "phone": "(02944) 432 799",
    "address": "San Carlos de Bariloche, Parque Nacional Nahuel Huapí",
    "email": "reservas@aguasblancas.com"
  },
  {
    "name": " Fly On BA",
    "phone": "549 11-3644-3445",
    "address": "EN OFICINA MOVITRACK, ruta 202",
    "email": "fly_onBa@email.com"
  },
  {
    "name": "paracaidismo rosario",
    "phone": "+54 341 309-1808",
    "address": "Ruta 9 Km 374",
    "email": " info@paracaidismorosario.com.ar"
  },
  
  {
    "name": "sociedad relax",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "sociedad_relax@gmail.com"
  },
  {
    "name": "terapia asiatica",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "terapiAsiatica@gmail.com"
  },
  {
    "name": "spa center",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "spaCenter@gmail.com"
  },
  {
    "name": "sociedad villa",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "sociedad-villa@gmail.com"
  },
  {
    "name": "sociedad Hilton",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "sociedad-hilton@gmail.com"
  },
  {
    "name": "sociedad beauty",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "sociedad_beauty@gmail.com"
  },
  {
    "name": "peluqueria",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "peluqueria@gmail.com"
  },
  {
    "name": "boutique",
          "phone": "2384858384",
          "address": "cll 45 n 38 45",
          "email": "boutique@gmail.com"
  },
  {
    "name": "sociedad estetica",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "sociedad-estetica@gmail.com"
  },
  {
    "name": "dian",
    "phone": "2384858384",
    "address": "cll 45 n 38 45",
    "email": "std-dian@gmail.com"
  },
  {
    "name": "provider vieja estancia ",
    "phone": "1111888888",
    "address": "cll 4 n 37 40",
    "email": "puestoviejo@gmail.com"
  },
  {
    "name": "provider la candelaria ",
          "phone": "111145445",
          "address": "cll 7 n 7 40",
          "email": "candelaria@gmail.com"
  },
  {
    "name": "provider la alameda ",
    "phone": "12245445",
    "address": "cll 8 n 2 12",
    "email": "alameda@gmail.com"
  },
  {
    "name": "provider la sistina ",
    "phone": "4545456",
    "address": "cll 78 n 112 5",
    "email": "sistina@gmail.com"
  },
  {
    "name": "provider rosario ",
          "phone": "11451848",
          "address": "cll 7 n 18 01",
          "email": "rosario@gmail.com"
  },
  {
    "name": "provider savoy ",
    "phone": "178148845",
    "address": "cll 75 n 45 4",
    "email": "savoy@gmail.com"
  },
  {
    "name": "provider howard ",
    "phone": "88245525",
    "address": "cll 1 n 55 72",
    "email": "howard@gmail.com"
  },
  {
    "name": "provider suites ",
    "phone": "878284256",
    "address": "cll 15 n 40 5",
    "email": "suites@gmail.com"
  },
  {
    "name": "Estancia las Carreras",
    "phone": "1023214154541",
    "address": "1963 Adams Drive",
    "email": "estancialascarreras@gmail.com"
  },
  {
    "name": "Hotel Patagonia",
    "phone": "1023514321541",
    "address": "885 Spring Street",
    "email": "lagoclaro@gmail.com"
  },
  {
    "name": "villa crespo peluqueria",
    "phone": "1023514153211",
    "address": "3429 Nixon Avenue",
    "email": "villacrespo123@gmail.com"
  },
  {
    "name": "mojang",
    "phone": "1021234154541",
    "address": "3503 Hidden Pond Road",
    "email": "mojang@gmail.com"
  },
  {
    "name": "Mishiguene Toys",
    "phone": "1233514154541",
    "address": "336 River Road",
    "email": "cursito@gmail.com"
  },
  {
    "name": "Taller del sol",
    "phone": "1023514154123",
    "address": "4342 Kovar Road",
    "email": "cursito@gmail.com"
  }
 
];

async function loadMockProviders(){

  try {

    await Provider.bulkCreate(providers)

   console.log("Providers loaded to DB")

  } catch (error) {
    console.log(error)
  }
}

module.exports={
  loadMockProviders
}
