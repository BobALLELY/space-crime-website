import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <div>
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>

    <div class="logos">
      <div class="logo">
        <StaticImage
            src="../images/android.png"
            loading="eager"
            width={150}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
      </div>
      <div class="logo">
        <StaticImage
            src="../images/ios.png"
            loading="eager"
            width={150}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
      </div>
    </div>
    {/* <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link> */}
  </header>
)

export default Header
