import React, { useContext, useEffect } from 'react';

import { UserContext } from '../../context/UserContext';

//images
import Fill from '../../assets/fill.png';
import Empty from '../../assets/empty.png';

export default function IdeaList({ displayIdea, setDisplayIdea }) {
  const context = useContext(UserContext);

  const handleLikeClick = (index) => {
    let obj = context.ideas[index];
    if (!obj.likes.includes(context.user)) {
      obj.likes.push(context.user);
    } else {
      let userindex = obj.likes.indexOf(context.user);
      obj.likes.splice(userindex, 1);
    }
    context.ideas[index] = obj;
    context.setIdeas([...context.ideas]);
  };
  useEffect(() => {
    setDisplayIdea(context.ideas);
  }, [context.ideas, setDisplayIdea]);

  return (
    <div className="w-[60vw] mx-auto ">
      {displayIdea &&
        displayIdea.map((data, index) => (
          <div
            key={index}
            className="w-[55vw] min-h-[30vh] border-2  m-4 rounded-md odd:bg-blue even:bg-yellow odd:border-blue even:border-yellow odd:text-blue even:text-yellow p-4 relative shadow-xl"
          >
            <div className="flex flex-col items-start text-left text-2xl text-white">
              <strong>Title: </strong>
              <span className="text-lg">{data.title}</span>
              <strong>Description: </strong>
              <span className="text-lg">{data.description}</span>
            </div>
            <div className="flex flex-col items-start text-2xl ">
              <strong className="text-white">Tags: </strong>
              <ul className="flex mt-2 text-sm ">
                {data.tags &&
                  data.tags.map((data, index) => (
                    <li key={index} className="mr-2  bg-white px-2 py-1 rounded-[100px] border-1">
                      #{data}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="absolute top-0 right-6 flex flex-col ">
              <div
                onClick={() => handleLikeClick(index)}
                className=" cursor-pointer bg-white h-8 w-8  px-1 pt-[0.1rem] rounded-full shadow-md  "
              >
                <img src={data.likes.includes(context.user) ? Fill : Empty} alt="likes" />
              </div>
              <span className=" text-white">{data.likes.length}</span>
            </div>
            <div className="absolute text-white bottom-0 right-6 text-right">
              <span>by {data.by}</span>
              <br />
              <span>{data.date.toLocaleString()}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur numquam delectus soluta quisquam deleniti, voluptates eos voluptatem, eaque velit aperiam voluptas, repellat non ipsa alias dignissimos magnam optio neque.
