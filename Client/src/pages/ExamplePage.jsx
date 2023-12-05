const ExamplePage = () => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7bd73518-9fc0-4388-8818-8353f55922bd/width=720/9.jpeg" alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by @user
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              21
            </li>
            <li>
              <strong>Downloads: </strong>
              21
            </li>
            <li>
              <strong>Likes: </strong>
              21
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Sharks</span>
        </div>
      </div>
    )
  }
  

  
export default ExamplePage