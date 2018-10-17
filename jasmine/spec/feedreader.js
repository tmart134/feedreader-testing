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
      
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0,function(){
                
            }
        })

        it('should have at least 1 entry', function(){


            expect($('<div class="feed"></div>')).toContainElement('article.entry');
        
        })


    })

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
