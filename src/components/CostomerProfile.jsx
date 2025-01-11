import React, { useState } from 'react';

const CustomerProfile = () => {
  // State to manage user profile information
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    location: 'New York, USA',
    phone: '123-456-7890',
    address: '123 4th Ave, New York, NY 10003',
    dob: '1990-01-01',
    gender: 'Male',
  });

  // State to toggle between view and edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes during editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle save action
  const handleSave = (e) => {
    e.preventDefault();
    // Here you can add API call to save updated information
    console.log('Updated Profile:', profile);
    setIsEditing(false); // Switch back to view mode
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      {/* If in edit mode, show form to edit profile */}
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="text-lg font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Address:</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Gender:</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>

          <button 
            type="button" 
            className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsEditing(false)} // Cancel edit mode
          >
            Cancel
          </button>
        </form>
      ) : (
        // View mode - display profile info
        <div>
          <div className="mb-4">
            <label className="text-lg font-semibold">Name:</label>
            <p className="text-gray-700">{profile.name}</p>
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Email:</label>
            <p className="text-gray-700">{profile.email}</p>
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Phone:</label>
            <p className="text-gray-700">{profile.phone}</p>
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Address:</label>
            <p className="text-gray-700">{profile.address}</p>
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Date of Birth:</label>
            <p className="text-gray-700">{profile.dob}</p>
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Gender:</label>
            <p className="text-gray-700">{profile.gender}</p>
          </div>

          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsEditing(true)} // Switch to edit mode
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerProfile;