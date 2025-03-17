import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <p class="intro background">
        Crimes mystérieux, vols sophistiqués, complots dangereux…
        <br/>La station spatiale est en danger, et la police est dépassée. Seul un détective comme vous peut résoudre les différentes enquêtes !
        <br/>
        <br/>
        Êtes-vous le détective que nous attendons tous ? 
      </p>
      <h2 class="background">100 parties disponibles !</h2>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
