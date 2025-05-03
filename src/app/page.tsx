
export default function Home() {
  return (
    <>
      {/* <Header alwaysVisible={false} /> */}
      <div className="mainBox flex items-center justify-center h-screen">
        <div className="mainText text-center" style={{ maxWidth: "68vw", position: "relative", top: "-10vh" }}>
          <p className="text-xl ">
            Descubre Marruecos con la Agencia Sentir Marruecos, líder en
            experiencias de viaje excepcionales. Sumérgete en la rica historia,
            los diversos paisajes y la vibrante cultura de Marruecos con
            nuestros tours cuidadosamente diseñados.
          </p>
          <p className="mainText2">
            ¡Viaja con nosotros y siente Marruecos como nunca antes!
          </p>
        </div>
      </div>
    </>
  );
}
