// dev.to posts

fetch(`https://dev.to/api/articles?username=r4nd3l`, {
  headers: { Accept: "application/json" },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
    const root = document.querySelector("#posts");
    let devToPosts = ""; // Initialize devToPosts with an empty string

    data.forEach((item) => {
      const tagsDiv = document.createElement("div");
      tagsDiv.classList.add(
        "flex",
        "whitespace-nowrap",
        "text-gray-400",
        "mr-4",
        "xl:mr-0",
        "xl:ml-4"
      );

      item.tag_list.forEach((tag) => {
        const tagElement = document.createElement("small");
        tagElement.classList.add(
          "flex",
          "whitespace-nowrap",
          "text-gray-400",
          "mr-4",
          "xl:mr-0",
          "xl:ml-4"
        );
        tagElement.innerHTML = `<i class="fas fa-hashtag py-0.5 text-teal ml-2"></i>${tag}`;
        tagsDiv.appendChild(tagElement);
      });

      devToPosts += `
        <div class="mb-4 bg-gray-50 rounded-lg border border-solid border-gray-100 hover:border-gray-300">
          <a href="${item.url}" target="_blank">
            <div class="p-4">
              <div class="grid lg:flex md:justify-between">
                <h2 class="text-2xl font-medium truncate" title="${item.title}">${item.title}</h2>
                <small class="text-gray-400 flex items-baseline">
                  <i class="far fa-calendar-check mr-1 text-teal"></i>
                  <p class="repo-date">${item.created_at}</p>
                </small>
              </div>
              <div class="grid xl:flex justify-between">
                <p class="truncate-2-line md:truncate-1-line h-full pr-4 xl:pr-16">${item.description}</p>
                <span class="flex flex-wrap xl:flex-nowrap items-end mt-2 xl:mt-0">
                  ${tagsDiv.outerHTML}
                </span>
              </div>
            </div>
          </a>
        </div>
      `;
    });

    root.innerHTML = devToPosts; // Set the content of #posts element

    function count(str, find) {
      let allPost = data.length;
      document.querySelector("#postsNumber").innerHTML = allPost;
    }

    count(devToPosts, ""); // Call the count function
  })
  .catch((error) => console.error(error));
