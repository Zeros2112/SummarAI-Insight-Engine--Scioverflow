// Importing image assets for icons and loader
import { copy, linkIcon, loader, tick, searchicon2 } from "../assets";

// Importing the custom hook for fetching article summaries from the service
import { useLazyGetSummaryQuery } from "../services/article";
// List of supported languages for article summarization
const languages = [
  { code: "ar", label: "Arabic" },
  { code: "am", label: "Amharic" },
  { code: "bn", label: "Bengali" },
  { code: "ca", label: "Catalan" },
  { code: "de", label: "German" },
  { code: "el", label: "Greek" },
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fa", label: "Persian (Farsi)" },
  { code: "fi", label: "Finnish" },
  { code: "fr", label: "French" },
  { code: "gu", label: "Gujarati" },
  { code: "he", label: "Hebrew" },
  { code: "hi", label: "Hindi" },
  { code: "hu", label: "Hungarian" },
  { code: "id", label: "Indonesian" },
  { code: "it", label: "Italian" },
  { code: "ja", label: "Japanese" },
  { code: "jv", label: "Javanese" },
  { code: "ko", label: "Korean" },
  { code: "lt", label: "Lithuanian" },
  { code: "mr", label: "Marathi" },
  { code: "my", label: "Burmese" },
  { code: "nl", label: "Dutch" },
  { code: "pa", label: "Punjabi" },
  { code: "pl", label: "Polish" },
  { code: "pt", label: "Portuguese" },
  { code: "ro", label: "Romanian" },
  { code: "ru", label: "Russian" },
  { code: "sk", label: "Slovak" },
  { code: "sv", label: "Swedish" },
  { code: "ta", label: "Tamil" },
  { code: "te", label: "Telugu" },
  { code: "th", label: "Thai" },
  { code: "tr", label: "Turkish" },
  { code: "uk", label: "Ukrainian" },
  { code: "ur", label: "Urdu" },
  { code: "vi", label: "Vietnamese" },
  { code: "zh", label: "Mandarin Chinese" },
];
// Main component for the article summarization demo
const Demo = () => {
  // State variables for managing the article, user input, and history
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Lazy query hook for fetching article summaries using Redux Toolkit Query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on component mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  // Handle form submission to fetch and display article summaries
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the article URL is already in the history
    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    // If it exists, set the existing article's summary
    if (existingArticle) return setArticle(existingArticle);

    // Fetch the article summary using the lazy query hook
    const { data, error } = await getSummary({
      articleUrl: article.url,
      language: selectedLanguage,
    });

    // If the summary is available, update the state and local storage
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      // Update state and local storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  // Copy the article URL to the clipboard and toggle the copy icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  // Handle keydown events, e.g., pressing Enter to submit the form
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search Form */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          {/* Link icon */}
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          {/* Input for article URL */}
          <input
            type="url"
            placeholder="Paste the article link"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            onKeyDown={handleKeyDown}
            required
            className="url_input peer"
          />

          {/* Dropdown for selecting the language */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="ml-1 mr-12 p-2 border rounded"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>

          {/* Submit button */}
          <button type="submit" className="ml-10 submit_btn p-2 h-7">
            {/* Search icon */}
            <img
              src={searchicon2}
              alt="search-icon3"
              className="absolute left-0 my-3 ml-2 w-5 h-5"
            />
          </button>
        </form>

        {/* Browse History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {/* Display article history with copy functionality */}
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              {/* Copy button with copy feedback */}
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              {/* Display the URL with truncation for long URLs */}
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Result */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {/* Loading spinner or error message */}
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Sorry, that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          // Display article summary if available
          article.summary && (
            <div className="flex flex-col gap-3">
              {/* Heading for the article summary result */}
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span>Summary Result</span>
              </h2>

              {/* Container for the article summary */}
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

// Export the Demo component as the default export
export default Demo;
