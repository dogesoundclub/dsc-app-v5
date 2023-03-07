
import Layout from "../components/layout";

import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from "react";

export default function Fiction() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // https://dsclabel.notion.site/FICTION-b2306331d42e40c8afc056b414bcb9fa
    const NOTION_PAGE_ID = "b2306331d42e40c8afc056b414bcb9fa";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <Layout>
    <div className="relative h-[120px] top-[210px]">
      <div className="relative w-[466px] -top-[780px] bg-[#000000] opacity-90">
      <div className="relative w-[466px] h-[792px] -top-[90px] bg-cover overflow-y-scroll scrollbar-hide">
        <NotionRenderer
          // blockMap={staticResponse}
          blockMap={response}
          fullPage={true}
          hideHeader={true}
        />
      </div>
      </div>
    </div>
    </Layout>
  );
}
