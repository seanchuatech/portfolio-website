import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const Users = () => {
  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
          const response = await axiosPrivate.get('/users', {
            signal: controller.signal
          });
          console.log(response.data);
          isMounted && setUsers(response.data);
      } catch (err) {
          console.error(err);
          navigate('/login', { state: { from: location }, replace: true });
      }
    }

    getUsers();

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
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              First name
            </th>
            <th scope="col" className="px-6 py-3">
              Last name
            </th>
            <th scope="col" className="px-6 py-3">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? ( // Correct conditional check
            users.map(user => (
              <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.firstname}</td>
                <td className="px-6 py-4">{user.lastname}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4">
                    <Link to={`/admin/users/details/${user._id}`}>
                      <BsInfoCircle />
                    </Link>
                    <Link to={`/admin/users/edit/${user._id}`}>
                      <AiOutlineEdit />
                    </Link>
                    <Link to={`/admin/users/delete/${user._id}`}>
                      <MdOutlineDelete />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <p>No users to display</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
}
export default Users;