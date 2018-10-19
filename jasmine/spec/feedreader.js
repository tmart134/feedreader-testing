/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.

 *Resources : 
 *https://jasmine.github.io/2.0/introduction.html
 *https://github.com/velesin/jasmine-jquery

 */

/* All of the tests are within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
   describe('RSS Feeds', function() {
     
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it ('should have a URL', function(){
            for (let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });

        it('should have a name', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
         
    });

   describe('The menu', function(){

        it('should be hidden by default', function(){

            let menu = $( 'body' );
            expect(menu.hasClass('menu-hidden')).toBe(true);

         });

        it('should open when clicked', function(){

            var spyEvent = spyOnEvent('.menu-icon-link', 'click');
            $('.menu-icon-link').click();
            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });
            

       it ('should hide when clicked again', function(){    
            
            var spyEvent = spyOnEvent('.menu-icon-link', 'click');
            $('.menu-icon-link').click();
            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            expect(spyEvent).toHaveBeenTriggered();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    }); 

    describe('Initial Entries', function(){

        beforeEach(function(done) {
            
            loadFeed(0, function() {
                    done();
                });
           
        });


        it('should have at least 1 entry in the feed', function(){

            var feed = $('.feed');
            expect(feed).toContainElement('article.entry');
        
        })

            
    });

    describe('New Feed Selection', function() {

        var initialFeed;

        beforeEach(function(done) {
            
            //get the first feed and save it
            loadFeed(0, function() {
                initialFeed = $('.entry h2'); 
                //get the second feed                          
                loadFeed(1, function() {
                    done();                                  
                });
              
            /*check
            console.log('initial: ', initialFeed);
            console.log(initialFeed[0]);
            console.log(initialFeed[0].innerHTML);  
            */ 
            });
        });    


        it('should load new feeds when called', function(){ 

            var secondFeed;
            secondFeed = $('.entry h2');  
              
            /*check
            console.log('secondFeed: ', secondFeed);
            console.log(secondFeed[0]);
            console.log(secondFeed[0].innerHTML);
            */

            expect(secondFeed === initialFeed).toBe(false);
        });

    });
 
}());
