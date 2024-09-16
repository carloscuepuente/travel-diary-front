import { useEffect } from "react";
import { useState } from "react";

function useFetch(url) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [url]);

  return content;
}

export default useFetch;
