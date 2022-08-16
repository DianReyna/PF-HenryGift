const {User, OrderDetail, Authentication, Gift} = require("../database/index")

const users = [{
  "email": "drowet0@4shared.com",
  "dateBirth": "1982-09-26",
  "first_name": "Dasie",
  "last_name": "Rowet",
  "access_level": true,
  "phone": "4788653120"
}, {
  "email": "lchalker1@scribd.com",
  "dateBirth": "1996-12-05",
  "first_name": "Lindon",
  "last_name": "Chalker",
  "access_level": true,
  "phone": "4549891206"
}, {
  "email": "kmansel2@blogger.com",
  "dateBirth": "1992-07-11",
  "first_name": "Kip",
  "last_name": "Mansel",
  "access_level": false,
  "phone": "5539105730"
}, {
  "email": "ptriggs3@nbcnews.com",
  "dateBirth": "1995-04-13",
  "first_name": "Penrod",
  "last_name": "Triggs",
  "access_level": true,
  "phone": "8977183265"
}, {
  "email": "gmcguigan4@wordpress.org",
  "dateBirth": "1992-04-24",
  "first_name": "George",
  "last_name": "McGuigan",
  "access_level": true,
  "phone": "8084436152"
}, {
  "email": "tnolleth5@google.es",
  "dateBirth": "1990-01-18",
  "first_name": "Terrijo",
  "last_name": "Nolleth",
  "access_level": true,
  "phone": "2596115600"
}, {
  "email": "jdines6@flavors.me",
  "dateBirth": "1985-11-09",
  "first_name": "Justus",
  "last_name": "Dines",
  "access_level": false,
  "phone": "5283798488"
}, {
  "email": "tastupenas7@lycos.com",
  "dateBirth": "1980-12-02",
  "first_name": "Teodoor",
  "last_name": "Astupenas",
  "access_level": false,
  "phone": "9941970499"
}, {
  "email": "sconwell8@ihg.com",
  "dateBirth": "1989-10-29",
  "first_name": "Shaina",
  "last_name": "Conwell",
  "access_level": true,
  "phone": "4522723937"
}, {
  "email": "bculham9@is.gd",
  "dateBirth": "1983-06-20",
  "first_name": "Burke",
  "last_name": "Culham",
  "access_level": false,
  "phone": "8076638390"
}, {
  "email": "zwardingtona@globo.com",
  "dateBirth": "1984-03-22",
  "first_name": "Zared",
  "last_name": "Wardington",
  "access_level": true,
  "phone": "8775715935"
}, {
  "email": "mgairdnerb@netlog.com",
  "dateBirth": "1989-07-07",
  "first_name": "Mikey",
  "last_name": "Gairdner",
  "access_level": true,
  "phone": "9986436690"
}, {
  "email": "abridgmanc@studiopress.com",
  "dateBirth": "1983-05-13",
  "first_name": "Adrea",
  "last_name": "Bridgman",
  "access_level": false,
  "phone": "8668461727"
}, {
  "email": "ggoldthorped@plala.or.jp",
  "dateBirth": "1993-11-07",
  "first_name": "Graham",
  "last_name": "Goldthorpe",
  "access_level": false,
  "phone": "5364955207"
}, {
  "email": "wornelese@blinklist.com",
  "dateBirth": "1987-08-13",
  "first_name": "Wendall",
  "last_name": "Orneles",
  "access_level": true,
  "phone": "4221223263"
}, {
  "email": "ddelahayf@pen.io",
  "dateBirth": "1998-02-06",
  "first_name": "Del",
  "last_name": "De La Hay",
  "access_level": true,
  "phone": "3254619994"
}, {
  "email": "pvanbrughg@cpanel.net",
  "dateBirth": "1985-07-11",
  "first_name": "Preston",
  "last_name": "VanBrugh",
  "access_level": true,
  "phone": "8922422135"
}, {
  "email": "gmessitth@loc.gov",
  "dateBirth": "1984-01-03",
  "first_name": "Gusti",
  "last_name": "Messitt",
  "access_level": true,
  "phone": "3182528572"
}, {
  "email": "iigguldeni@domainmarket.com",
  "dateBirth": "1991-07-09",
  "first_name": "Isiahi",
  "last_name": "Iggulden",
  "access_level": false,
  "phone": "6761833746"
}, {
  "email": "ldewburyj@ucsd.edu",
  "dateBirth": "1992-04-22",
  "first_name": "Lorry",
  "last_name": "Dewbury",
  "access_level": false,
  "phone": "5626406778"
}, {
  "email": "mvautierk@un.org",
  "dateBirth": "1985-10-11",
  "first_name": "Melli",
  "last_name": "Vautier",
  "access_level": false,
  "phone": "8903062388"
}, {
  "email": "abrinsfordl@comsenz.com",
  "dateBirth": "1986-09-16",
  "first_name": "Anna-maria",
  "last_name": "Brinsford",
  "access_level": true,
  "phone": "3149449931"
}, {
  "email": "mstanleym@msu.edu",
  "dateBirth": "1987-10-10",
  "first_name": "Minta",
  "last_name": "Stanley",
  "access_level": false,
  "phone": "9446325154"
}, {
  "email": "abummfreyn@springer.com",
  "dateBirth": "1993-09-04",
  "first_name": "Audra",
  "last_name": "Bummfrey",
  "access_level": false,
  "phone": "7047428987"
}, {
  "email": "oellenso@berkeley.edu",
  "dateBirth": "1996-08-12",
  "first_name": "Oswell",
  "last_name": "Ellens",
  "access_level": false,
  "phone": "3329327191"
}, {
  "email": "shazelbyp@quantcast.com",
  "dateBirth": "1999-07-15",
  "first_name": "Sigismond",
  "last_name": "Hazelby",
  "access_level": true,
  "phone": "8809066855"
}, {
  "email": "csportonq@hostgator.com",
  "dateBirth": "1996-04-08",
  "first_name": "Coralyn",
  "last_name": "Sporton",
  "access_level": false,
  "phone": "6111924012"
}, {
  "email": "ffriattr@imdb.com",
  "dateBirth": "1980-12-14",
  "first_name": "Freddie",
  "last_name": "Friatt",
  "access_level": false,
  "phone": "8168645152"
}, {
  "email": "alegrices@independent.co.uk",
  "dateBirth": "1998-04-23",
  "first_name": "Alon",
  "last_name": "Le Grice",
  "access_level": false,
  "phone": "5763151587"
}, {
  "email": "vvaunt@wikimedia.org",
  "dateBirth": "1994-10-12",
  "first_name": "Valene",
  "last_name": "Vaun",
  "access_level": true,
  "phone": "9166087064"
}, {
  "email": "bsuffieldu@bbc.co.uk",
  "dateBirth": "1985-01-06",
  "first_name": "Berny",
  "last_name": "Suffield",
  "access_level": true,
  "phone": "1767865525"
}, {
  "email": "amogiev@sun.com",
  "dateBirth": "1981-07-06",
  "first_name": "Ahmed",
  "last_name": "Mogie",
  "access_level": false,
  "phone": "4339762824"
}, {
  "email": "bfrantzeniw@prlog.org",
  "dateBirth": "1999-12-30",
  "first_name": "Belva",
  "last_name": "Frantzeni",
  "access_level": false,
  "phone": "4175512568"
}, {
  "email": "gpaulinx@latimes.com",
  "dateBirth": "1982-05-07",
  "first_name": "Garvin",
  "last_name": "Paulin",
  "access_level": false,
  "phone": "1021175126"
}, {
  "email": "rmoizery@liveinternet.ru",
  "dateBirth": "1997-06-06",
  "first_name": "Russ",
  "last_name": "Moizer",
  "access_level": false,
  "phone": "3085849288"
}, {
  "email": "mglennyz@nydailynews.com",
  "dateBirth": "1988-10-27",
  "first_name": "Mohammed",
  "last_name": "Glenny",
  "access_level": false,
  "phone": "5381167429"
}, {
  "email": "dravel10@deliciousdays.com",
  "dateBirth": "1986-02-22",
  "first_name": "Daryl",
  "last_name": "Ravel",
  "access_level": true,
  "phone": "1709548090"
}, {
  "email": "korigan11@jalbum.net",
  "dateBirth": "1993-06-15",
  "first_name": "Kenna",
  "last_name": "Origan",
  "access_level": false,
  "phone": "3974513257"
}, {
  "email": "bfawcus12@dagondesign.com",
  "dateBirth": "1981-04-05",
  "first_name": "Bearnard",
  "last_name": "Fawcus",
  "access_level": true,
  "phone": "5088849639"
}, {
  "email": "icastanho13@washingtonpost.com",
  "dateBirth": "1996-11-18",
  "first_name": "Ivie",
  "last_name": "Castanho",
  "access_level": false,
  "phone": "3608921795"
}, {
  "email": "awharram14@uiuc.edu",
  "dateBirth": "1986-10-14",
  "first_name": "Antoni",
  "last_name": "Wharram",
  "access_level": false,
  "phone": "5835355526"
}, {
  "email": "aleebeter15@sohu.com",
  "dateBirth": "2000-06-11",
  "first_name": "Amil",
  "last_name": "Leebeter",
  "access_level": true,
  "phone": "7859734944"
}, {
  "email": "ablack16@weebly.com",
  "dateBirth": "1997-01-21",
  "first_name": "Auroora",
  "last_name": "Black",
  "access_level": true,
  "phone": "8745074667"
}, {
  "email": "eskettles17@cdc.gov",
  "dateBirth": "1984-06-05",
  "first_name": "Electra",
  "last_name": "Skettles",
  "access_level": true,
  "phone": "3956295094"
}, {
  "email": "awolfers18@fda.gov",
  "dateBirth": "1987-05-22",
  "first_name": "Arly",
  "last_name": "Wolfers",
  "access_level": true,
  "phone": "5127534667"
}, {
  "email": "fmelwall19@wp.com",
  "dateBirth": "1985-05-10",
  "first_name": "Faber",
  "last_name": "Melwall",
  "access_level": true,
  "phone": "6192330804"
}, {
  "email": "glamasna1a@drupal.org",
  "dateBirth": "1996-09-05",
  "first_name": "Gabey",
  "last_name": "Lamasna",
  "access_level": false,
  "phone": "5279064284"
}, {
  "email": "nmccrea1b@virginia.edu",
  "dateBirth": "1997-11-07",
  "first_name": "Natty",
  "last_name": "McCrea",
  "access_level": false,
  "phone": "8748488254"
}, {
  "email": "aciani1c@vk.com",
  "dateBirth": "1987-02-25",
  "first_name": "Ardine",
  "last_name": "Ciani",
  "access_level": false,
  "phone": "5502649178"
}, {
  "email": "xevitt1d@ft.com",
  "dateBirth": "1985-04-19",
  "first_name": "Xenos",
  "last_name": "Evitt",
  "access_level": true,
  "phone": "7199559502"
}, {
  "email": "tamaraber9@gmail.com",
  "dateBirth": "20-11-1988",
  "first_name": "Tamara",
  "last_name": "Berim",
  "access_level": true,
  "phone": "111111111"
}]

  async function loadMockUsers(){

    try {
  
      await User.bulkCreate(users, {
        include: [{
          model: OrderDetail,
        },{
          model:Authentication,
        },{
          model:Gift,
        }],
      })
  
     console.log("Users loaded to DB")
  
    } catch (error) {
      console.log(error)
    }
  }

module.exports={
  loadMockUsers
}
