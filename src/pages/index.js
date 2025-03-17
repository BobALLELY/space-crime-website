import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div class="intro"></div>
    <div class="cards">
      <div class="background card">
        <div class="top">
          <div class="number">5</div>
          <StaticImage
            src="../images/alien.png"
            loading="eager"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <span class="label">Modes de jeu</span>
      </div>
      <div class="background card">
        <div class="top">
          <div class="number">?</div>
          <StaticImage
            src="../images/crimes.png"
            loading="eager"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <span class="label">Crimes</span>
      </div>
      <div class="background card">
        <div class="top">
          <div class="number">3</div>
          <StaticImage
            src="../images/alien.png"
            loading="eager"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <span class="label">Invasions d'aliens</span>
      </div>
      <div class="background card">
        <div class="top">
          <div class="number">4</div>
          <StaticImage
            src="../images/alien.png"
            loading="eager"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <span class="label">Modes de jeu</span>
      </div>
      <div class="background card">
        <div class="top">
          <div class="number">?</div>
          <StaticImage
            src="../images/crimes.png"
            loading="eager"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <span class="label">Crimes</span>
      </div>
      <div class="background card">
        <div class="top">
          <div class="number">3</div>
          <StaticImage
            src="../images/alien.png"
            loading="eager"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <span class="label">Invasions d'aliens</span>
      </div>
    </div>

    <div class="background">
      <p class="grey">
        Bienvenue à <b class="white">Space Crime</b> ! <br /> <br />
        Plongez au cœur d’une station spatiale où le crime règne en maître. Entre complots mystérieux, vols à la tire et assassinats de sang-froid, chaque recoin cache un secret… <br />
        Face à cette vague criminelle, la police intergalactique est dépassée.<br /> <br />
        <b class="white">Enquêtez</b>, <b class="white">analysez</b> les indices et <b class="white">démasquez</b> les coupables grâce à vos talents d’observation et de déduction ! <br />
      </p>
    </div>

    <div class="cards">
      <div class="background card">
        <div class="top">
          <div class="number">5</div>
          <StaticImage
            src="../images/parties.png"
            loading="eager"
            width={120}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <span class="label">Modes de jeu</span>
      </div>
      <div class="background card">
        <div class="caseType classic">Enquête</div>
        <span class="caseTypeDescription white">Résolvez des enquêtes de la plus banale à la plus complexe.</span>
      </div>
      <div class="background card">
        <div class="caseType charlie">Cherche et trouve</div>
        <span class="caseTypeDescription white">Trouvez tous les objets dans le temps imparti.</span>
      </div>
      <div class="background card">
        <div class="caseType mission">Mission</div>
        <span class="caseTypeDescription white">Explorez la carte sans pression pour terminer votre mission.</span>
      </div>
      <div class="background card">
        <div class="caseType wanted">Wanted</div>
        <span class="caseTypeDescription white">Trouvez les dangereux criminels dans le temps imparti.</span>
      </div>
      <div class="background card">
        <div class="caseType treasure">Chasse au trésor</div>
        <span class="caseTypeDescription white">Analysez les indices et récupérer les trésors cachés.</span>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
