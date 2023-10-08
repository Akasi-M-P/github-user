/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // State variables for user data and related functionality
  const [userData, setUserData] = useState(null); // Holds user data
  const [userSearched, setUserSearched] = useState(false); // Tracks whether a user has been searched
  const [loading, setLoading] = useState(false); // Tracks whether data is being loaded
  const [error, setError] = useState(false); // Tracks if there was an error while fetching user data
  const [userName, setUserName] = useState(""); // Holds the username to be searched
  const [showLoader, setShowLoader] = useState(false); // Tracks whether to show the loader

  // Function to set user data and update the userSearched state
  const setUser = (data) => {
    setUserData(data); // Set user data
    setUserSearched(true); // Set userSearched to true when a user is searched
  };
  // Function to handle searching for a user by making an API request
  const handleUserName = async () => {
    setLoading(true); // Set loading to true while the request is in progress
    setShowLoader(true); // Show the loader when loading begins

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (response.ok) {
        // If the API response is successful (status code 200), parse and set user data
        const userData = await response.json();
        setUser(userData);
        setError(false); // Reset the error state
      } else {
        setError(true); // Set error state to true if the API response is not successful
        setUser(null); // Reset user data
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false); // Set loading back to false after the request is complete
      setShowLoader(false); // Hide the loader
      setUserName(""); // Set the user name
    }
  };

  // Provide the user data and related functions to the context
  return (
    <UserContext.Provider
      value={{
        userData, // User data
        setUser, // Function to set user data
        userSearched, // Whether a user has been searched
        handleUserName, // Function to search for a user
        setLoading, // Set loading state
        loading, // Loading state
        error, // Error state
        setError, // Set error state
        setUserName, // Set username state
        showLoader, // Show loader state
      }}
    >
      {children} {/* Render the child components */}
    </UserContext.Provider>
  );
};
