const UploadInput = () => {
  return (
    <div>
      <p className="mb-4 text-xl">Upload avatar</p>
      <label
        className="border-3 border-dashed border-Neutral-0 px-4 py-3 block w-full 
      bg-neutral-700/50 hover:bg-Neutral-700 rounded-xl cursor-pointer mb-2"
      >
        <input className="hidden" type="file" />
        <div
          className="bg-Neutral-700 size-12.5 grid place-content-center rounded-xl 
        border-Neutral-500 mb-2 mx-auto"
        >
          <img src="/assets/images/icon-upload.svg" alt="icon-upload" />
        </div>
        <p className="text-center text-gray-500 text-sm">
          Drag and drop or click to upload
        </p>
      </label>
      <div className="flex gap-2">
        <img src="/assets/images/icon-info.svg" alt="icon-info" />
        <p className="text-sm">SVG, PNG, JPG or FIG (MAX. 800X400)</p>
      </div>
    </div>
  );
};

export default UploadInput;
