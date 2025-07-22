import "./styles.scss";
import Image from "next/image";
function SobreNosotros() {
  return (
    <>
      <div className="bg-[#fff] w-full">
        <div className="mainDivSobreNosotros flex flex-col items-start h-screen"></div>
        <div>
          <p className="titleSobreNosotros mt-12 xl:text-5xl lg:text-4xl">
            Bienvenidos a Sentir Marruecos Viajes.
          </p>
          <p className="subtitleTitleSobreNosotros">
            Esta agencia nace de años de experiencia, dedicación y un profundo
            amor por la cultura y las tradiciones de nuestro país.
          </p>
        </div>
        <div className="salemText pl-18 pr-18 pt-8 flex flex-row items-center justify-center mt-12">
          <Image
            src={"/images/salem.png"}
            alt={`Rutas`}
            width={950}
            height={348}
            className="rounded-[3rem] w-full h-full object-cover"
          />
          <p className="pl-8 2xl:text-[1.2rem] lg:text-[1rem]">
            Soy Salem, un bereber del desierto de Merzouga. Nací y crecí en el
            corazón del Sáhara, en una familia nómada que ha recorrido sus dunas
            durante generaciones. Mi infancia transcurrió entre caravanas de
            dromedarios, cielos estrellados y la sabiduría de un pueblo que vive
            en armonía con la tierra. Fue ahí donde aprendí a amar profundamente
            nuestra cultura y la hospitalidad que nos define. Con el tiempo, me
            adentré en el mundo del turismo. Trabajé en distintas áreas,
            conociendo cada rincón del desierto, sus paisajes, sus historias y
            todo lo que hace única a la cultura bereber. Esa experiencia
            despertó en mí el deseo de crear algo propio. Así nació Sentir
            Marruecos Viajes, con la misión de compartir con viajeros de todo el
            mundo la esencia y los valores de mi tierra. Aquí, cada viaje es más
            que una ruta: es una oportunidad de conectar con nuestra comunidad,
            nuestra historia y nuestras tradiciones. Este proyecto es posible
            gracias a un equipo excepcional, formado por amigos y locales que
            comparten mi pasión por mostrar un Marruecos auténtico y cercano.
            También se han sumado personas nuevas que aportan sus ganas, su
            energía, talento y el amor por nuestra tierra. Juntos, trabajamos
            para ofrecerte una experiencia real, cálida y enriquecedora. Te
            invitamos a vivir esta aventura con nosotros. A descubrir la magia
            de Marruecos, sus costumbres, su historia y la belleza de sus
            paisajes. Queremos que cada momento se convierta en un recuerdo
            inolvidable. ¡Bienvenidos a Sentir Marruecos Viajes!
          </p>
        </div>
        <p className="salemText pl-18 pr-18 pt-8 font-extrabold">
          <span>Te invitamos a vivir esta aventura con nosotros.</span> A
          descubrir la magia de Marruecos, sus costumbres, su historia y la
          belleza de sus paisajes. Queremos que cada momento se convierta en un
          recuerdo inolvidable.
          <br />{" "}
          <span className="text-[#1a2b49]">
            ¡Bienvenidos a Sentir Marruecos Viajes!
          </span>
        </p>
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
      {/* <div className=" w-[86vw] flex flex-row justify-center items-start 2xl:mt-[45vh] lg:mt-[54vh] bg-white mx-auto rounded-[3rem] shadow-lg">
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
            <p className="salemTitle lg:text-3xl 2xl:text-4xl">
              Soy Salem, un bereber del desierto de Merzouga. Nací y crecí en el
              corazón del Sáhara, en una familia nómada que ha recorrido sus
              dunas durante generaciones. <br />
            </p>
            <p className="salemSubtitle pt-20 2xl:text-[1.4rem] lg:text-[1rem]">
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
        <div className=" w-[86vw] flex flex-row justify-center items-start 2xl:mt-[20vh] lg:mt-[12vh] mb-[2vh] bg-white mx-auto rounded-[3rem] shadow-lg">
          <div className="gap-4 p-12 w-[100vw]">
            <p className="salemTitle lg:text-3xl 2xl:text-4xl">
              Aquí, cada viaje es más que una ruta: es una oportunidad de
              conectar con nuestra comunidad, nuestra historia y nuestras
              tradiciones. <br />
            </p>
            <p className="salemSubtitle pt-32 2xl:text-[1.4rem] lg:text-[1rem]">
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
        </div>*/}
    </>
  );
}

export default SobreNosotros;
