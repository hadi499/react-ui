import { useEffect, useState } from "react";
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = () => {};
  return (
    <div className="mt-8 w-[600px] mx-auto">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 bg-blue-200 p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-center text-2xl my-2">Create Post</h1>
        <label htmlFor="title" className="text-lg font-semibold">
          Title
        </label>
        <input
          type="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-1 rounded-lg"
        />
        <label htmlFor="content" className="text-lg font-semibold">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="px-3 py-1 rounded-lg"
        ></textarea>
        <div className="mt-3">
          <button className="px-3 py-1 bg-slate-700 hover:opacity-80 text-white rounded-lg">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
