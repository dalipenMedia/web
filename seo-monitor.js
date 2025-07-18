// SEO Monitor for Dalipen - Track duplicate page issues
// This script monitors and reports on SEO issues

(function() {
    'use strict';
    
    const SEO_MONITOR = {
        // Track problematic URLs
        problematicUrls: [
            'https://chat.dalipen.com/search?query={search_term_string}',
            'https://chat.dalipen.com/home',
            'https://www.dalipen.com/kolay?from=AppAgg.com&utm_campaign=AppAgg.com&utm_medium=referral&utm_source=AppAgg.com'
        ],
        
        // Check if current page is problematic
        isProblematicPage: function() {
            const currentUrl = window.location.href;
            return this.problematicUrls.some(url => {
                // Handle dynamic parameters
                if (url.includes('{search_term_string}')) {
                    return currentUrl.includes('chat.dalipen.com/search');
                }
                return currentUrl.includes(url.split('?')[0]);
            });
        },
        
        // Log SEO issues for monitoring
        logIssue: function(issue) {
            if (typeof console !== 'undefined' && console.log) {
                console.log('[SEO Monitor]', issue);
            }
            
            // Send to analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'seo_issue', {
                    'event_category': 'seo',
                    'event_label': issue,
                    'value': 1
                });
            }
        },
        
        // Check canonical URL
        checkCanonical: function() {
            const canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                this.logIssue('Missing canonical URL');
                return false;
            }
            
            const currentUrl = window.location.href.split('?')[0];
            const canonicalUrl = canonical.href.split('?')[0];
            
            if (currentUrl !== canonicalUrl) {
                this.logIssue('Canonical URL mismatch: ' + currentUrl + ' vs ' + canonicalUrl);
                return false;
            }
            
            return true;
        },
        
        // Check hreflang tags
        checkHreflang: function() {
            const hreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
            if (hreflangs.length === 0) {
                this.logIssue('Missing hreflang tags');
                return false;
            }
            
            // Check for x-default
            const xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
            if (!xDefault) {
                this.logIssue('Missing x-default hreflang');
                return false;
            }
            
            return true;
        },
        
        // Check meta robots
        checkMetaRobots: function() {
            const metaRobots = document.querySelector('meta[name="robots"]');
            if (metaRobots && metaRobots.content.includes('noindex')) {
                this.logIssue('Page has noindex directive');
                return false;
            }
            return true;
        },
        
        // Run all checks
        runChecks: function() {
            const issues = [];
            
            if (this.isProblematicPage()) {
                issues.push('Current page is in problematic URLs list');
            }
            
            if (!this.checkCanonical()) {
                issues.push('Canonical URL issue detected');
            }
            
            if (!this.checkHreflang()) {
                issues.push('Hreflang issue detected');
            }
            
            if (!this.checkMetaRobots()) {
                issues.push('Meta robots issue detected');
            }
            
            // Report results
            if (issues.length > 0) {
                this.logIssue('SEO issues found: ' + issues.join(', '));
            } else {
                this.logIssue('No SEO issues detected');
            }
            
            return issues;
        },
        
        // Initialize monitoring
        init: function() {
            // Run checks on page load
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.runChecks());
            } else {
                this.runChecks();
            }
            
            // Run checks periodically
            setInterval(() => this.runChecks(), 30000); // Every 30 seconds
            
            // Run checks on navigation
            window.addEventListener('popstate', () => this.runChecks());
            
            // Log initialization
            this.logIssue('SEO Monitor initialized');
        }
    };
    
    // Initialize when script loads
    SEO_MONITOR.init();
    
    // Make available globally for debugging
    window.SEO_MONITOR = SEO_MONITOR;
    
})(); 