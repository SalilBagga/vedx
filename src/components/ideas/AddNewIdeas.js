import React, { useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext';
export default function AddNewIdeas() {
  const context = useContext(UserContext);
  console.log(context.user);
  const [tags, setTags] = useState([]);
  const [tagName, setTagName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTags = (e) => {
    e.preventDefault();
    let temp = tagName.trim();
    if (temp) {
      setTags((prevtags) => [...prevtags, temp]);
      setTagName('');
    }
  };

  const handleAddIdeas = (e) => {
    e.preventDefault();
    let titletemp = title.trim();
    let descriptiontemp = description.trim();

    if (titletemp && descriptiontemp) {
      let obj = {
        title: titletemp,
        description: descriptiontemp,
        tags: tags,
        likes: [],
      };
      context.setIdeas((prevideas) => [...prevideas, obj]);
      setTitle('');
      setDescription('');
      setTags([]);
    }
  };

  return (
    <div className="w-[55vw] min-h-[30vh] border-2 border-light-green bg-light-green m-4 rounded-md">
      <div className="p-4">
        <div className="flex flex-col items-start">
          <strong className="text-2xl text-white ">Title</strong>
          <input
            type="text"
            className="border-1 rounded-md w-full"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <strong className="text-2xl text-white mt-4">Description</strong>
          <textarea
            name="description"
            id="description"
            rows="3"
            className="border-1 rounded-md w-full"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="flex flex-col items-start mt-4">
          <strong className="text-2xl text-white">Tags</strong>
          <input
            type="text"
            className="border-1 rounded-md w-full"
            onChange={(e) => setTagName(e.target.value)}
            value={tagName}
          />
          <button
            className="mt-4 border-2 px-2 py-1 text-white border-white rounded-md"
            onClick={handleAddTags}
          >
            Add Tags
          </button>
          <ul className="flex mt-2">
            {tags &&
              tags.map((data, index) => (
                <li
                  key={index}
                  className="ml-2 text-light-green bg-white px-2 py-1 rounded-[100px] border-1"
                >
                  #{data}
                </li>
              ))}
          </ul>
        </div>
        <button
          className="mt-4 border-2 px-2 py-1 text-white border-white rounded-md"
          onClick={handleAddIdeas}
        >
          Add Idea
        </button>
      </div>
    </div>
  );
}
