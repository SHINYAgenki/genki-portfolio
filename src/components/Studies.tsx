import { useState } from "react";

type Tab = "internal" | "external";

function Studies() {
  const [activeTab, setActiveTab] = useState<Tab>("internal");

  return (
    <section>
      <h2>STUDIES</h2>
      <div>
        <button onClick={() => setActiveTab("internal")}>学内</button>
        <button onClick={() => setActiveTab("external")}>学外</button>
      </div>

      {activeTab === "internal" && (
        <div>
          <h3>大学での学び</h3>
          <p>研究内容をここに書く</p>
        </div>
      )}
      {activeTab === "external" && (
        <div>
          <h3>学外での学び</h3>
          <p>PSSでのエンジニアアルバイト・インターンの参加歴などをここに書く</p>
        </div>
      )}
    </section>
  );
}

export default Studies;
