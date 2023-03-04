import Layout from "../components/layout";

import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from "react";

export default function Term() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // https://dsclabel.notion.site/TERMS-89b9c6408d854f3c9d347003e6a63bf8
    const NOTION_PAGE_ID = "89b9c6408d854f3c9d347003e6a63bf8";
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
      <div className="relative w-[466px] h-[810px] -top-[90px] bg-cover overflow-y-scroll scrollbar-hide">
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
