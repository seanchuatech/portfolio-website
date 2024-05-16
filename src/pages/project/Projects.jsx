import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProjects = async () => {
      try {
          const response = await axiosPrivate.get('/projects', {
            signal: controller.signal
          });
          console.log(response.data);
          isMounted && setProjects(response.data);
      } catch (err) {
          console.error(err);
          navigate('/login', { state: { from: location }, replace: true });
      }
    }

    getProjects();

    return () => {
      isMounted = false;
      setTimeout(() => {
        controller.abort();
      }, 500); // Delay abort slightly
    }
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Image URL
            </th>
            <th scope="col" className="px-6 py-3">
              Github URL
            </th>
            <th scope="col" className="px-6 py-3">
              Technology
            </th>
            <th scope="col" className="px-6 py-3">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {projects && projects.length > 0 ? ( // Correct conditional check
            projects.map(project => (
              <tr key={project._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{project.title}</td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">{project.imageUrl}</td>
                <td className="px-6 py-4">{project.githubUrl}</td>
                <td className="px-6 py-4">{project.techStack}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4">
                    <Link to={`/admin/projects/details/${project._id}`}>
                      <BsInfoCircle />
                    </Link>
                    <Link to={`/admin/projects/edit/${project._id}`}>
                      <AiOutlineEdit />
                    </Link>
                    <Link to={`/admin/projects/delete/${project._id}`}>
                      <MdOutlineDelete />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <p>No projects to display</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
}
export default Projects;