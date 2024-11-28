import { useEffect, useState } from "react";

const list = [
  {
    name: "safeline",
    local: "http://10.5.6.7:9443",
    link: "https://safeline.chaogpt.space",
  },
  {
    name: "pve",
    local: "http://10.5.6.66:9443",
    link: "https://pve.chaogpt.space",
  },
  {
    name: "fnos",
    local: "http://10.5.6.3",
    link: "https://fnos.chaogpt.space",
  },
  {
    name: "ds",
    local: "http://10.5.6.4",
    link: "https://ds.chaogpt.space",
  },
  {
    name: "dpanel",
    local: "http://10.5.6.7:8808",
    link: "https://dpanel.chaogpt.space",
  },
  {
    name: "webdav",
    local: "http://10.5.6.7:5005",
    link: "https://webdav.chaogpt.space",
  },
];
export const Links = () => {
  const [isLAN, setIsLAN] = useState(false);
  useEffect(() => {
    "use client";
    const lan = () => /localhost|(\d+.){3}\d+$/.test(window.location.host);
    setIsLAN(lan);
  }, []);
  return (
    <div>
      <div className="vocs_Sponsors_title">chaogpt.space</div>
      <div
        className="vocs_Sponsors"
        style={{
          display: "grid",
          marginTop: "4px",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {list.map((item) => {
          return (
            <div>
              <a
                className="vocs_Sponsors_column vocs_Sponsors_sponsor vocs_Link "
                href={isLAN ? item.local : item.link}
              >
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
