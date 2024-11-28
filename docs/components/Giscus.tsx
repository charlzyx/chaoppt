import GiscusComponent from "@giscus/react";
import { useEffect, useState } from "react";

const should = () => {
  const len = window.location.pathname.length;
  return len > 1;
};

const sty: React.CSSProperties = {
  position: "relative",
  display: "none",
  minHeight: "60px",
};

const loadingSty: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "45px",
  margin: "auto",
};

export const Giscus = () => {
  const [show, setShow] = useState(false);
  const [box, setBox] = useState<HTMLDivElement | null>();

  useEffect(() => {
    const on = () => setShow(should());
    on();

    window.onpaste = on;
    const oPush = window.history.pushState;
    const oReplace = window.history.replaceState;
    window.history.pushState = (...args) => {
      setTimeout(() => {
        on();
      });
      return oPush(...args);
    };
    window.history.replaceState = (...args) => {
      setTimeout(() => {
        on();
      });
      return oReplace(...args);
    };
  }, []);

  useEffect(() => {
    if (!box) return;
    const listen = () => {
      box.style.display = show ? "block" : "none";
    };
    const ob = new MutationObserver(listen);
    ob.observe(box, { childList: true });

    return () => {
      ob.disconnect();
    };
  }, [box, show]);

  return (
    <div style={sty} ref={(dom) => setBox(dom)}>
      <GiscusComponent
        repo="charlzyx/charlzyx"
        repoId="R_kgDOLInvNg"
        category="Announcements"
        categoryId="DIC_kwDOLInvNs4CdvQF"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
      <img style={loadingSty} src="/mona-loading-default.gif" alt="loading" />
    </div>
  );
};
