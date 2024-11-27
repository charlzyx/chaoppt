import { Giscus } from "./components/Giscus";

export default function Footer() {
  return (
    <>
      <div>
        <Giscus />
      </div>
      <div>
        {/* <div>Released under the MIT License.</div> */}
        <div>
          Copyright © 2022-present charlzyx@qq.com.
          <br />
          Powerd by{" "}
          <a
            className="vocs_Anchor vocs_Link vocs_Link_accent_underlined"
            href="https://vocs.dev"
          >
            vocs.dev
          </a>
        </div>
      </div>
    </>
  );
}
