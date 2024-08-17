import { useEffect, useState } from "react";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setPageData(data[0]); // Assuming the data is an array with a single object
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 md:p-20 max-w-screen-xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        {pageData ? pageData.pageHeader : "Loading..."}
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div id="contact-detail" className="flex-1 mb-8 md:mb-0 flex flex-col">
          {pageData && (
            <p className="mb-4">
              {pageData.pageBody}
              <br /><br />
              Here are the different ways you can contact us.
            </p>
          )}
          {pageData && <ContactInfo contacts={pageData.contacts} />}
        </div>
        <div
          id="form"
          className="flex-1 flex flex-col bg-gray-100 justify-center items-center"
        >
          {'ContactForm'}
        </div>
      </div>
    </div>
  );
}
