import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "./About.css";
import CartTeam from "./CartTeam/CartTeam";

export default function About() {
  return (
    <Box className="containerAbout">
      <div className="containerContent">
        <div className="aboutTitle">
          <Typography variant="h2">
            Hola! conoce un poco mas sobre nosotros
          </Typography>
          <img
            className="img"
            src="https://wp.es.aleteia.org/wp-content/uploads/sites/7/2018/06/web3-woman-holding-small-gift-present-shutterstock_739730530-j-chizhe-ai.jpg?w=620&h=348&crop=1"
            alt="gift"
          />
        </div>
        <div className="containerWho">
          <Typography sx={{ marginBottom: 3 }} variant="h3" color="primary">
            Quienes somos?
          </Typography>
          <Typography variant="body1">
            Una Ecommerce diferente pensada para ayudarte a encontrar un regalo
            especial para ti o para algun ser querido, donde podrás encontrar
            las mejores alternativas para que tus regalos sean originales,
            puedes escojer entre ir a una cena, disfrutar un delicioso
            masaje,una noche en algun hotel que prefieras, entre otras.
          </Typography>
        </div>

        <div className="containerWhy">
          <Typography sx={{ marginBottom: 3 }} variant="h3" color="primary">
            Porque Creamos HenryGift?
          </Typography>
          <Typography variant="body1">
            Partimos desde la idea de crear algo diferente para que las personas
            pudieran regalar algo fuera de lo comun y poder tener acceso a
            diferentes opciones de regalo sin tener que hacer largas filas o
            preocuparse por buscar algun proveedor. Pensamos tambien en ser el
            intermediario entre las personas y los servicios para darles a los
            pequeños o grandes empresas una coneccion con otros clientes y asi
            nacio HenryGift
          </Typography>
        </div>

        <div>
          <div className="containerTeam">
            <Typography variant="h3" sx={{ marginBottom: 3 }}>
              Conoce a nuestro equipo
            </Typography>
          </div>
          <div className="containerCartTeam" id="team">
            <CartTeam
              img={"https://avatars.githubusercontent.com/u/98038883?v=4"}
              name={"Jose Manuel"}
              country={"Argentina"}
              git={"https://github.com/josetucu92"}
              linked={"https://www.linkedin.com/in/josemanuelseguro-webdev/"}
            />
            <CartTeam
              img={
                "https://media-exp1.licdn.com/dms/image/C4E03AQGRgo6rdvFs_g/profile-displayphoto-shrink_800_800/0/1661831290699?e=1667433600&v=beta&t=W3WfQV07y3Gc2KVMi1pzydBiq8VDcyt-2IPf7ysAKY0"
              }
              name={"Dianeth Reyna"}
              country={"México"}
              git={"https://github.com/DianReyna"}
              linked={"https://www.linkedin.com/in/dianethreyna/"}
            />
            <CartTeam
              img={
                "https://media-exp1.licdn.com/dms/image/C4D03AQH8hgdDwQvm8w/profile-displayphoto-shrink_800_800/0/1632853485008?e=1667433600&v=beta&t=Aj6sSfmWaQW0uF_hywF5QgLrrxcHWy_FCKqhOkQtTY0"
              }
              name={"Tamara  Berim"}
              country={"Argentina"}
              git={"https://github.com/tamarab9"}
              linked={"https://www.linkedin.com/in/tamara-berim/"}
            />
            <CartTeam
              img={"https://avatars.githubusercontent.com/u/102451698?v=4"}
              name={"Alberto Fernandez"}
              country={"Perú"}
              git={"https://github.com/Ajota88"}
              linked={"https://www.linkedin.com/in/albertofernandezav/"}
            />
            <CartTeam
              img={
                "https://media-exp1.licdn.com/dms/image/C4D03AQHnGYmRT1KjlA/profile-displayphoto-shrink_800_800/0/1661885391429?e=1667433600&v=beta&t=nbO_gSr6sYuv33KHO3H9jtNAgVxZpgn0sKV3GkaQNFU"
              }
              name={"Patricio Baez"}
              country={"Argentina"}
              git={"https://github.com/patriciobaez"}
              linked={"https://www.linkedin.com/in/patriciobaezbuchanan/"}
            />
            <CartTeam
              img={
                "https://media-exp1.licdn.com/dms/image/C4E03AQH_qCFkUXWpcA/profile-displayphoto-shrink_800_800/0/1661833530786?e=1667433600&v=beta&t=4GjXuOU8-Fh1bb-cAvQWKL1o3mm6jyUqVW7ThlKRg2U"
              }
              name={"Deysi Cisneros"}
              country={"Perú"}
              git={"https://github.com/DaybelCR"}
              linked={"https://www.linkedin.com/in/daysi-cisneros/"}
            />
            <CartTeam
              img={
                "https://media-exp1.licdn.com/dms/image/C4D03AQEJJkXphOcxsA/profile-displayphoto-shrink_800_800/0/1645516202582?e=1667433600&v=beta&t=AAInBBp9NbfITB0n_mRCYq-3KCSi9MssKLUOCvObpto"
              }
              name={"Michael Vasquez"}
              country={"Colombia"}
              git={"https://github.com/Mayk0ll"}
              linked={
                "https://www.linkedin.com/in/michael-alexis-vasquez-lopera-9756b4166/"
              }
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
