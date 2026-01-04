import React from 'react'
import { Helmet } from 'react-helmet'
import metadata from '../data/metadata.json'

const SEO = () => {
    return (
        <Helmet>
            <html lang={metadata.language} />
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta name="theme-color" content={metadata.themeColor} />
            
            {/* Open Graph / Social Media */}
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:site_name" content={metadata.openGraph.siteName} />
        </Helmet>
    )
}

export default SEO
