import ActividadClient from "./ActivityClient";

export default async function Page({
  params,
}: {
  params: Promise<{ activity: string }>;
}) {
  const { activity } = await params;
  return <ActividadClient activity={activity} />;
}
