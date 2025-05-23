import "./styles.scss";
import getRuta from "./getData";
import RutaCliente from "../RutasClient";

export default async function Ruta(props: { params: Promise<{ location: string }> }) {
  const { location } = await props.params;
  const response = await getRuta();

  return (
    <>
      <div className="mainDiv"></div>
      <RutaCliente response={response} locationParam={location} />
    </>
  );
}