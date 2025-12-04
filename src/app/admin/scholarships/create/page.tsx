export default function CreateScholarship() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Scholarship</h1>

      <form className="bg-white p-8 rounded-xl shadow max-w-3xl space-y-6">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="DAAD Scholarship"
          />
        </div>

        <div>
          <label className="block font-medium">Provider</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-medium">Level</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-medium">Deadline</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            className="w-full p-2 border rounded h-24"
            placeholder="Write a short overview"
          ></textarea>
        </div>

        <div>
            <label className="block font-medium">Application Link</label>
            <input type="text" className="w-full p-2 border rounded" />
        </div>
        
        <button className="px-6 py-2 bg-teal-700 text-white rounded hover:bg-teal-800">
          Create Scholarship
        </button>
      </form>
    </div>
  );
}