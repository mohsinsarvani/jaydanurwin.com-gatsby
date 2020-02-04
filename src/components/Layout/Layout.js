import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import MetaLinks from "../MetaLinks/MetaLinks";
import Header from "../Header/Header";
import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import Footer from "../Footer/Footer";

import styles from "./layout.module.scss";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        datoCmsSite {
          globalSeo {
            siteName
          }
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsHome {
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
        allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              profileType
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.siteWrapper}>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <MetaLinks />
        <Header />
        {/* <MobileHeader />
        <WideHeader /> */}
        <TopAppBarFixedAdjust>
        <main className={styles.siteMain}>{children}</main>
        <Footer />
        </TopAppBarFixedAdjust>
      </div>
    )}
  />
);

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
