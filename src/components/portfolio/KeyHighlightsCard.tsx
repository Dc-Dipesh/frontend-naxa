import { formatDate } from "../../lib/helper"
import { IProject } from "../../types"

const KeyHighlightsCard = ({ project,setActiveProjectId }: { project: IProject, setActiveProjectId: (id: number) => void }) => {
  return (
    <div
      className="hover:-translate-y-4 transition-all duration-300 border p-5 rounded-md  "
      style={{
        order: project?.project_order,
      }}
      onClick={() => setActiveProjectId(project.id)}
    >
      <div>
        <h2 className="text-base md:text-2xl">{project.title}</h2>

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

      <div className="mt-10">
        <img
          src={project?.photo}
          alt={project?.title}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default KeyHighlightsCard
