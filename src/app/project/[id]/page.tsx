import ProjectDetailPage from '@/featured/pages/ProjectDetailPage/ProjectDetailPage'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <ProjectDetailPage id={id} />
}
