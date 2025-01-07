app.controller("postController", ['$scope', '$rootScope', '$timeout',
    function ($scope, $rootScope, $timeout
    ) {
        const init = () => {
            //variable 
            $scope.headings = [];
            $scope.getHeadings();
        }
        $scope.ixoMsg = "This is ixoquiz";
        $scope.openScrollTitlePost = () => {
            alert('click working');
        }

        // $scope.options = [
        //             { text: 'is lorem is' },
        //             { text: 'was hsfas ' },
        //             { text: 'None of the above ' },
        //             { text: 'None of the above' }
        //         ];

        // Function to extract all headings from the content
        $scope.getHeadings = function () {
            // Wait for the content to load completely
            $timeout(function () {
                var content = document.getElementById('content');
                var headingElements = content.querySelectorAll('h1, h2, h3, h4, h5, h6');

                // Iterate over all headings and store their ID and text
                $scope.headings = Array.from(headingElements).map(function (heading) {
                    return {
                        id: heading.id,
                        text: heading.textContent
                    };
                });
            }, 0);
        };

        $scope.scrollToHeading = (id) => {
            var element = $('#' + id);
            if (element.length) { $('html, body').animate({ scrollTop: element.offset().top }, 500); }
        }

        // Wait for the DOM to be fully loaded 
        document.addEventListener("DOMContentLoaded", function() {
            var middleDiv = document.querySelector('.col-lg-6');
            var rightDiv = document.querySelector('.col-lg-3.side-div');
        
            window.addEventListener('scroll', function() {
                var middleDivBottom = middleDiv.getBoundingClientRect().bottom;
        
                if (middleDivBottom <= window.innerHeight) {
                    rightDiv.classList.add('fixed-scroll');
                } else {
                    rightDiv.classList.remove('fixed-scroll');
                }
            });
        });


        
    //layout shift
        $scope.isColumnLayout = false;
        var maxContentLength = 20; // Set a threshold for content length
    
        // Function to check content length and adjust layout
        $scope.adjustLayout = function() {
            var shouldUseColumnLayout = false;
            
            $rootScope.options.forEach(function(option) {
                if (option.text.length > maxContentLength) {
                    shouldUseColumnLayout = true;
                }
            });
    
            $scope.isColumnLayout = shouldUseColumnLayout;
        };
    
        // Call the function to adjust layout after the DOM is ready
        $timeout($scope.adjustLayout);

        init();
    }
]);