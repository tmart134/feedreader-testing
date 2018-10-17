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


        it('should have at least 1 entry', function(){

            var firstEntry = $('.entry')[0];
            expect(firstEntry).toBeInDOM();
        
        })

            
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
