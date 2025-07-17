import "./styles.scss";
import Image from "next/image";
function SobreNosotros() {
  return (
    <>
      <div className="bg-[#bedcfd] h-[240vh] w-full">
        <div className="mainDivSobreNosotros flex flex-col items-start h-screen">
          <div className="bg-white mt-[20rem] max-w-[24rem] ml-4 sm:ml-16 md:ml-32 lg:ml-56 rounded-[3rem] pt-4 pl-4 pr-4 shadow-lg">
            <p className="titleSobreNosotros text-5xl">
              Bienvenidos a Sentir Marruecos Viajes.
            </p>
            <p className="subtitleTitleSobreNosotros">
              Esta agencia nace de años de experiencia, dedicación y un profundo
              amor por la cultura y las tradiciones de nuestro país.
            </p>
          </div>
        </div>
        {/* <div className="h-screen w-full flex flex-row justify-center gap-4">
        <div className="mt-86 max-w-[60vw]">
          <p className="salemText ">
            Soy Salem, un bereber del desierto de Merzouga. Nací y crecí en el
            corazón del Sáhara, en una familia nómada que ha recorrido sus dunas
            durante generaciones. <br />
            Mi infancia transcurrió entre caravanas de dromedarios, cielos
            estrellados y la sabiduría de un pueblo que vive en armonía con la
            tierra. Fue ahí donde aprendí a amar profundamente nuestra cultura y
            la hospitalidad que nos define. Con el tiempo, me adentré en el
            mundo del turismo. Trabajé en distintas áreas, conociendo cada
            rincón del desierto, sus paisajes, sus historias y todo lo que hace
            única a la cultura bereber. Esa experiencia despertó en mí el deseo
            de crear algo propio. Así nació Sentir Marruecos Viajes, con la
            misión de compartir con viajeros de todo el mundo la esencia y los
            valores de mi tierra. Aquí, cada viaje es más que una ruta: es una
            oportunidad de conectar con nuestra comunidad, nuestra historia y
            nuestras tradiciones. Este proyecto es posible gracias a un equipo
            excepcional, formado por amigos y locales que comparten mi pasión
            por mostrar un Marruecos auténtico y cercano. También se han sumado
            personas nuevas que aportan sus ganas, su energía, talento y el amor
            por nuestra tierra.
          </p>
        </div>
        
      </div> */}
        <div className=" w-[86vw] flex flex-row justify-center items-start mt-[45vh] bg-white mx-auto rounded-[3rem] shadow-lg">
          <div className="flex items-center justify-center w-[950px] h-[500px] overflow-hidden">
            <Image
              src={"/images/salem.png"}
              alt={`Rutas`}
              width={950}
              height={348}
              className="rounded-[3rem] w-full h-full object-cover"
            />
          </div>
          <div className="gap-4 p-12 w-[100vw]">
            <p className="salemTitle">
              Soy Salem, un bereber del desierto de Merzouga. Nací y crecí en el
              corazón del Sáhara, en una familia nómada que ha recorrido sus
              dunas durante generaciones. <br />
            </p>
            <p className="salemSubtitle pt-20">
              Mi infancia transcurrió entre caravanas de dromedarios, cielos
              estrellados y la sabiduría de un pueblo que vive en armonía con la
              tierra. Fue ahí donde aprendí a amar profundamente nuestra cultura
              y la hospitalidad que nos define. Con el tiempo, me adentré en el
              mundo del turismo. Trabajé en distintas áreas, conociendo cada
              rincón del desierto, sus paisajes, sus historias y todo lo que
              hace única a la cultura bereber.
            </p>
          </div>
        </div>
        <div className=" w-[86vw] flex flex-row justify-center items-start mt-[20vh] mb-[2vh] bg-white mx-auto rounded-[3rem] shadow-lg">
          <div className="gap-4 p-12 w-[100vw]">
            <p className="salemTitle">
              Aquí, cada viaje es más que una ruta: es una oportunidad de
              conectar con nuestra comunidad, nuestra historia y nuestras
              tradiciones. <br />
            </p>
            <p className="salemSubtitle pt-32">
              Este proyecto es posible gracias a un equipo excepcional, formado
              por amigos y locales que comparten mi pasión por mostrar un
              Marruecos auténtico y cercano. También se han sumado personas
              nuevas que aportan sus ganas, su energía, talento y el amor por
              nuestra tierra.
            </p>
          </div>
          <div className="flex items-center justify-center w-[950px] h-[500px] overflow-hidden">
            <Image
              src={"/images/Campamento Merzouga.jpg"}
              alt={`Rutas`}
              width={950}
              height={348}
              className="rounded-[3rem] w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreNosotros;
