define(['module', 'cache!http://www.google-analytics.com/ga.js'], function (module, ga) {
    
    var goog = {
        setAccount:     function (accountId) {
                            ga.push(['_setAccount', accountId]);
                        },
        setDomainName:  function (domainName) {
                            ga.push(['_setDomainName', domainName]);
                        },
        trackPageview:  function () {
                            ga.push(['_trackPageview']);
                        },
        trackEvent:     function (category, action) {
                            // FIXME: Handle optional parameters for this...
                            ga.push(['_trackEvent', category, action]);
                        },
        trackSocial:    function (network, action, opt_target) {
                            // TODO: Support opt_path
                            if (opt_target !== undefined) {
                                ga.push(['_trackSocial', network, action, opt_target]);
                            } else {
                                ga.push(['_trackSocial', network, action]);
                            }
                        },
        trackTiming:    function (category, variable, time) {
                            ga.push(['_trackTiming', category, variable, time]);
                        }
                        
    };
    
    goog.setAccount(module.config().account);
    
    return goog;
    
});