
import Layout from "../components/layout";

import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
import React, { useState, useEffect } from "react";

export default function Greeting() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    // https://dsclabel.notion.site/ABOUT-3c3fc05b21174bf48e70293ac115f96a
    const NOTION_PAGE_ID = "3c3fc05b21174bf48e70293ac115f96a";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <Layout>
    <div className="cali">
      <div className="notionBackground">
      <div className="notionPosition">
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
