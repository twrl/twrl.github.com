define(['jquery', 'jquery/colorbox', 'domReady!'], function ($) {
    
    var sw = $('#share-widget'),
        article = sw.closest('article');
        
    sw.find('[data-network="linkedin"]').click(function () {
        
        var xml = '<?xml version="1.0"?><share><content><title>' + article.find('[itemprop="headline"]').text()
                + '</title><submitted-url>' + document.location.href 
                + '</submitted-url></content><visibility><code>anyone</code></visibility></share>';
                
        $.post('http://api.linkedin.com/v1/people/~/shares', xml)
    });
    
    sw.find('[data-network="facebook"]').colorbox({iframe: true, width: '80%', height: '50%'});

    
    
});