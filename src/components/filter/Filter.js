import React from 'react';

export default function Filter({ displayIdea, setDisplayIdea, option, setOption }) {
  return (
    <div className=" w-[55vw]   m-4">
      <div className="border-b-2 mx-auto flex justify-between">
        <div>
          <h1>Filter</h1>
        </div>
        <div>
          <select name="sort_likes" id="sort_likes" onChange={(e) => setOption(e.target.value)}>
            <option value="" defaultValue>
              Sort by Likes
            </option>
            <option value="most">Most Liked</option>
            <option value="least">Least Liked</option>
          </select>
          <select
            name="sort_order"
            id="sort_likes"
            onChange={(e) => {
              setOption(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="" defaultValue>
              Sort by Date
            </option>
            <option value="old">Old</option>
            <option value="new">New</option>
          </select>
        </div>
      </div>
    </div>
  );
}
// Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur sequi illo, repudiandae dolorum dignissimos optio, beatae eveniet molestiae quasi at. Dolor sed veritatis cumque nulla iure corporis ipsam reprehenderit.
