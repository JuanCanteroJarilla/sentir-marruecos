import "./styles.scss";
import RutaCliente from "../RutasClient";

export default async function Ruta(props: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await props.params;

  return (
    <>
      <div className="mainDiv"></div>
      <RutaCliente locationParam={location} />
    </>
  );
}
