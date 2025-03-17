import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Space Crime`} />
      
    {/* <div class="header">    
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Space Crime Company
        </footer>
      </div>
    </>
  )
}

export default Layout
