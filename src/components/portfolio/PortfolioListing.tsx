
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { slugify } from "../../lib/helper"
import { Link, useParams } from "react-router-dom"
import { IProject } from "../../types"
import KeyHighlightsCard from "./KeyHighlightsCard"
import ProjectCard from "./ProjectCard"
import ProjectDetail from "./ProjectDetail"



const PortfolioListing = () => {
  const params = useParams() // Get URL parameters using useParams (e.g., for slug)
  const [activeProjectId, setActiveProjectId] = useState<number>(0) // State to track the active project ID
  const ActiveCategory = params.slug // Extract the category slug from the URL parameters
  const [FilteredProjects, setFilteredProjects] = useState<IProject[]>([]) // State to store filtered projects based on the active category

  // Initialize dispatch to trigger Redux actions
  const dispatch = useDispatch()

  // Extract projects, loading, and error states from the Redux store
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projects
  )

  // Fetch projects if not already loaded when the component mounts
  useEffect(() => {
    if (projects.length === 0 && !loading) {
      // Dispatch action to fetch projects from the API
      dispatch({ type: "projects/fetchProjectsRequest" })
    }
  }, [dispatch, projects, loading]) // Dependencies: dispatch, projects, loading

  // Create a list of unique categories by mapping and filtering the projects array
  const CategoryList = projects
    .flatMap((project) =>
      project.category.map((catId: number, index: number) => ({
        id: catId, // Category ID
        title: project.category_title[index], // Category title
        slug: slugify(project.category_title[index]), // Convert title to slug
        description: project.category_description[index], // Category description
      }))
    )
    .filter(
      (category, index: number, self) =>
        index === self.findIndex((cat) => cat.id === category.id) // Filter to ensure unique categories
    )

  // Find the active category ID based on the slug from the URL
  const ActiveCategoryId = CategoryList.find(
    (category) => category.slug === ActiveCategory
  )?.id

  // Filter projects based on the active category or key highlights
  useEffect(() => {
    if (ActiveCategoryId) {
      // If there's an active category, filter projects that belong to it
      setFilteredProjects(
        projects.filter((project) =>
          project.category.includes(ActiveCategoryId)
        )
      )
    } else {
      // If no category is selected, filter projects by the key highlight flag
      setFilteredProjects(
        projects.filter((project) => project.is_key_highlight)
      )
    }
  }, [ActiveCategoryId, projects]) // Dependencies: ActiveCategoryId, projects

  // Render loading, error, or filtered projects based on the state
  if (loading) {
    return <p>Loading...</p> // Show loading message while fetching projects
  }

  if (error) {
    return <p>Error: {error}</p> // Display error message if there is an error
  }
  return (
    <>
      {activeProjectId > 0 && (
        <ProjectDetail
          projects={projects}
          activeProjectId={activeProjectId}
          setActiveProjectId={setActiveProjectId}
        />
      )}

      <div className="max-w-7xl bg-white shadow-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-5 p-4 rounded-md -mt-16">
        <div
          className={`p-2 rounded-md ${
            ActiveCategory ? "bg-transparent" : "bg-custom-100"
          }`}
        >
          <Link to="/">Key Highlights</Link>
        </div>
        {CategoryList.map((category) => (
          <div
            key={category.id}
            className={`p-2 rounded-md ${
              category.slug === ActiveCategory
                ? "bg-custom-100"
                : "bg-transparent"
            }`}
          >
            <Link to={`/${category.slug}`} className="">
              {category.title}
            </Link>
          </div>
        ))}
      </div>
      {projects?.length > 0 && (
        <div className="max-w-7xl mx-auto px-2">
          {ActiveCategory ? (
            <div className=" p-2 mt-20">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    CategoryList.find(
                      (category) => category.slug === ActiveCategory
                    )?.description || "",
                }}
              />
              <div className="grid grid-cols-1 gap-5 mt-10">
                {FilteredProjects?.map((project) => (
                  <ProjectCard
                    setActiveProjectId={setActiveProjectId}
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mt-20">
              {FilteredProjects?.map((project) => (
                <KeyHighlightsCard
                  setActiveProjectId={setActiveProjectId}
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default PortfolioListing
