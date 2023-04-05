function TextField() {
  return (
    <form>
      <div class="w-full mb-4 rounded-lg">
        <div class="px-3 py-2">
          <div class="border border-theme-purple bg-theme-lightpurple p-1.5 rounded-lg">
            <label for="editor" class="sr-only">
              Check Plagiarism
            </label>
            <textarea
              id="editor"
              rows="8"
              class="block w-full p-2 text-sm bg-theme-lightpurple border-0 rounded-lg"
              placeholder="Paste your article here."
              required
            ></textarea>
          </div>
        </div>
      </div>
      {/*  */}
    </form>
  );
}

export default TextField;