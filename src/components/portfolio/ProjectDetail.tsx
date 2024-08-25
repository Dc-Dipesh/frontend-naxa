import { formatDate } from "../../lib/helper"
import { IProject } from "../../types"

const ProjectDetail = ({
  projects,
  activeProjectId,
  setActiveProjectId
}: {
  projects: IProject[]
  setActiveProjectId: (id: number) => void
  activeProjectId: number
}) => {
  const ActiveProject = projects.find((project) => project.id === activeProjectId)!
  return (
    <div className="fixed inset-0 bg-black/40 z-10 transition-all duration-500 shadow-lg ">
      <div className="absolute top-32 left-1/2 -translate-x-1/2  w-full max-w-7xl h-4/5  bg-white">
        <div className="flex justify-end p-0 absolute w-full right-0">
          <button
            className="text-2xl font-semibold w-7 h-7 rounded-full bg-white flex items-center justify-center -mt-10"
            onClick={() => setActiveProjectId(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="h-full overflow-auto custom-scrollbar ">
          <div
            className="hover:bg-white transition-all duration-300 border p-5 rounded-md gap-10 grid grid-cols-1 md:grid-cols-5 bg-gray-100 "
            style={{
              order: ActiveProject?.project_order,
            }}
          >
            <div className="md:col-span-2">
              <img
                src={ActiveProject?.photo}
                alt={ActiveProject?.title}
                className=" object-cover rounded-md w-full aspect-[7/4]"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-base md:text-2xl">{ActiveProject?.title}</h2>
              <div
                className="mt-5 space-y-5"
                dangerouslySetInnerHTML={{
                  __html: ActiveProject?.subtitle || "",
                }}
              />
              <div className="flex justify-between p-5">
                <div className="flex flex-col gap-3">
                  <span className="text-xs md:text-sm text-custom-200 ">
                    Clients
                  </span>
                  <span className="text-xs md:text-sm">
                    {ActiveProject?.clients}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xs md:text-sm text-custom-200 ">
                    Time Duration
                  </span>
                  <span className="text-xs md:text-sm">
                    {formatDate(ActiveProject.start_date)}-{" "}
                    {formatDate(ActiveProject.end_date)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 p-4 text-xs md:text-base more-info ">
            <div
              dangerouslySetInnerHTML={{
                __html: ActiveProject?.description || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
