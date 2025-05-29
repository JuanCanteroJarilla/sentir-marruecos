import "./styles.scss";
import getRuta from "./getData";
import RutaCliente from "../RutasClient";

export default async function Ruta(props: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await props.params;
  const decodedLocation = decodeURIComponent(location);
  const locationWithoutAccents = decodedLocation
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(", ", "-");
  const locationWithHyphens = locationWithoutAccents.replaceAll(" ", "-");

  const response = await getRuta(locationWithHyphens);

  return (
    <>
      <div className="mainDiv"></div>
      <RutaCliente response={response} locationParam={location} />
    </>
  );
}
