// // delete user

// const deleteUser = ({ userId }) => {
//   const [error, setError] = useState(null);

//   const handleDeleteUser = async () => {
//     try {
//       const response = await DeleteUser(userId);

//       console.log("User deleted successfully");
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       setError("Failed to delete user. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Delete User</h2>
//       <button onClick={handleDeleteUser}>Delete User</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };
