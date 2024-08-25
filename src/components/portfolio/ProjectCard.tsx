import { formatDate } from "../../lib/helper"
import { IProject } from "../../types"

const ProjectCard = ({
  project,
  setActiveProjectId,
}: {
  project: IProject
  setActiveProjectId: (id: number) => void
}) => {
  return (
    <div
    onClick={() => setActiveProjectId(project.id)}
      className="hover:bg-white transition-all duration-300 border p-5 rounded-md gap-10 grid grid-cols-1 md:grid-cols-5 bg-gray-100 "
      style={{
        order: project?.project_order,
      }}
    >
      <div className="md:col-span-2">
        <img
          src={project?.photo}
          alt={project?.title}
          className=" object-cover rounded-md w-full aspect-[7/4]"
        />
      </div>
      <div className="md:col-span-3">
        <h2 className="text-base md:text-2xl">{project?.title}</h2>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{
            __html: project?.subtitle,
          }}
        />
        <div className="flex justify-between p-5">
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm text-custom-200 ">Clients</span>
            <span className="text-xs md:text-sm">{project?.clients}</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm text-custom-200 ">
              Time Duration
            </span>
            <span className="text-xs md:text-sm">
              {formatDate(project?.start_date)}- {formatDate(project?.end_date)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
