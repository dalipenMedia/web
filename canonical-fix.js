// Canonical URL fix for Dalipen website
// This script ensures proper canonical URLs and handles parameter-based duplicates

(function() {
    'use strict';
    
    // Check if current URL has problematic parameters
    function hasProblematicParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const problematicParams = [
            'from=AppAgg.com',
            'utm_campaign',
            'utm_medium', 
            'utm_source'
        ];
        
        return problematicParams.some(param => {
            if (param.includes('=')) {
                return urlParams.get(param.split('=')[0]) === param.split('=')[1];
            }
            return urlParams.has(param);
        });
    }
    
    // Redirect to canonical URL if needed
    function redirectToCanonical() {
        const currentPath = window.location.pathname;
        const canonicalMap = {
            '/kolay': '/kolay.html',
            '/kolay/': '/kolay.html'
        };
        
        if (canonicalMap[currentPath] && hasProblematicParams()) {
            const canonicalUrl = window.location.origin + canonicalMap[currentPath];
            window.location.href = canonicalUrl;
        }
    }
    
    // Add canonical link if missing
    function addCanonicalLink() {
        if (!document.querySelector('link[rel="canonical"]')) {
            const canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = window.location.origin + window.location.pathname;
            document.head.appendChild(canonical);
        }
    }
    
    // Handle chat subdomain redirects
    function handleChatSubdomain() {
        if (window.location.hostname === 'chat.dalipen.com') {
            const path = window.location.pathname;
            if (path === '/search' || path === '/home') {
                window.location.href = 'https://www.dalipen.com/';
            }
        }
    }
    
    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            redirectToCanonical();
            addCanonicalLink();
            handleChatSubdomain();
        });
    } else {
        redirectToCanonical();
        addCanonicalLink();
        handleChatSubdomain();
    }
    
    // Also run on navigation events
    window.addEventListener('popstate', function() {
        redirectToCanonical();
        addCanonicalLink();
        handleChatSubdomain();
    });
    
})(); 