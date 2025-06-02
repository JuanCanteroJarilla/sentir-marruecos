import ActividadClient from "./ActivityClient";

type PageProps = {
  params: {
    activity: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { activity } = await params;
  return <ActividadClient activity={activity} />;
}
